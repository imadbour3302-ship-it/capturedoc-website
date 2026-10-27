import re
d = open(r'C:\Users\imad\AppData\Local\Temp\cd.js', encoding='utf-8', errors='replace').read()
for m in re.finditer(r'[A-Za-z0-9_/.-]*\.woff2?', d):
    print(m.group(0))
