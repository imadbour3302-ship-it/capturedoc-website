import re

def parse_js(s, i=0):
    """Minimal JS-literal parser -> Python obj."""
    def skip(i):
        while i < len(s) and s[i] in ' \n\t':
            i += 1
        return i
    i = skip(i)
    c = s[i]
    if c == '{':
        i += 1
        obj = {}
        while True:
            i = skip(i)
            if s[i] == '}':
                return obj, i + 1
            if s[i] in '"\'':
                key, i = parse_str(s, i)
            elif s.startswith('...', i):
                i += 3
                _, i = parse_js(s, i)
                i = skip(i)
                if i < len(s) and s[i] == ',':
                    i += 1
                continue
            else:
                m = re.match(r'[A-Za-z_$][A-Za-z0-9_$.-]*', s[i:])
                if not m:
                    raise ValueError(f'bad key at {i}: {s[i-60:i+60]!r}')
                key = m.group(0)
                i += len(key)
            i = skip(i)
            assert s[i] == ':', f'expected : got {s[i]!r} at {i}'
            i += 1
            val, i = parse_js(s, i)
            obj[key] = val
            i = skip(i)
            if i < len(s) and s[i] == ',':
                i += 1
    if c == '[':
        i += 1
        arr = []
        while True:
            i = skip(i)
            if s[i] == ']':
                return arr, i + 1
            val, i = parse_js(s, i)
            arr.append(val)
            i = skip(i)
            if i < len(s) and s[i] == ',':
                i += 1
    if c in '"\'':
        return parse_str(s, i)
    if c == '`':
        j = s.find('`', i + 1)
        return s[i+1:j], j + 1
    m = re.match(r'-?\d+\.?\d*', s[i:])
    if m:
        return float(m.group(0)), i + len(m.group(0))
    m = re.match(r'[A-Za-z_$][A-Za-z0-9_$.]*', s[i:])
    ident = m.group(0)
    i += len(ident)
    i = skip(i)
    if i < len(s) and s[i] == '(':
        depth = 0
        in_str = None
        esc = False
        j = i
        while j < len(s):
            ch = s[j]
            if esc: esc = False
            elif ch == '\\': esc = True
            elif in_str:
                if ch == in_str: in_str = None
            elif ch in '"\'`': in_str = ch
            elif ch == '(': depth += 1
            elif ch == ')':
                depth -= 1
                if depth == 0:
                    j += 1
                    break
            j += 1
        inner = s[i+1:j-1]
        args = split_args(inner)
        parsed = [parse_js(a.strip(), 0)[0] if a.strip() else None for a in args]
        return {'@call': ident, 'args': parsed}, j
    return {'@var': ident}, i

def parse_str(s, i):
    q = s[i]
    i += 1
    out = []
    while s[i] != q:
        if s[i] == '\\':
            i += 1
            m = {'n': '\n', 't': '\t', 'r': '\r'}.get(s[i], s[i])
            out.append(m)
        else:
            out.append(s[i])
        i += 1
    return ''.join(out), i + 1

def split_args(s):
    args, depth, cur, in_str, esc = [], 0, '', None, False
    for ch in s:
        if esc: esc = False; cur += ch; continue
        if ch == '\\': esc = True; cur += ch; continue
        if in_str:
            cur += ch
            if ch == in_str: in_str = None
            continue
        if ch in '"\'`': in_str = ch; cur += ch; continue
        if ch in '([{': depth += 1
        if ch in ')]}': depth -= 1
        if ch == ',' and depth == 0:
            args.append(cur); cur = ''
        else:
            cur += ch
    if cur.strip(): args.append(cur)
    return args

def unwrap(v):
    if isinstance(v, dict) and '@call' in v:
        arr = v['args'][0] if v['args'] else []
        return [[x for x in item if not (isinstance(x, dict) and '@var' in x)] if isinstance(item, list) else item for item in arr]
    if isinstance(v, dict) and '@var' in v:
        return None
    if isinstance(v, list):
        return [unwrap(x) for x in v]
    if isinstance(v, dict):
        return {k: unwrap(x) for k, x in v.items()}
    return v
