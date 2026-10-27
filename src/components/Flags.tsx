type P = { className?: string };

const W = { viewBox: "0 0 24 16", "aria-hidden": true } as const;

export const Flags: Record<string, (p: P) => React.ReactElement> = {
  algeria: (p) => (
    <svg {...W} {...p}><rect width="12" height="16" fill="#006233"/><rect x="12" width="12" height="16" fill="#fff"/><path d="M12.8 5.2a3.6 3.6 0 1 0 0 5.6 4.4 4.4 0 1 1 0-5.6z" fill="#d21034"/><path d="M14.5 6.6l.5 1.5h1.6l-1.3 1 .5 1.5-1.3-.9-1.3.9.5-1.5-1.3-1h1.6z" fill="#d21034"/></svg>
  ),
  tunisia: (p) => (
    <svg {...W} {...p}><rect width="24" height="16" fill="#e70013"/><circle cx="12" cy="8" r="4" fill="#fff"/><circle cx="12" cy="8" r="3" fill="#e70013"/><circle cx="12.8" cy="8" r="2.4" fill="#fff"/><path d="M13.6 6.8l.35 1h1.1l-.9.65.35 1.05-.9-.65-.9.65.35-1.05-.9-.65h1.1z" fill="#e70013"/></svg>
  ),
  egypt: (p) => (
    <svg {...W} {...p}><rect width="24" height="5.4" fill="#ce1126"/><rect y="5.4" width="24" height="5.3" fill="#fff"/><rect y="10.7" width="24" height="5.3" fill="#000"/><circle cx="12" cy="8" r="1.6" fill="#c09300"/></svg>
  ),
  senegal: (p) => (
    <svg {...W} {...p}><rect width="8" height="16" fill="#00853f"/><rect x="8" width="8" height="16" fill="#fdef42"/><rect x="16" width="8" height="16" fill="#e31b23"/><path d="M12 5.8l.6 1.8h1.9l-1.5 1.1.6 1.8-1.6-1.1-1.6 1.1.6-1.8-1.5-1.1h1.9z" fill="#00853f"/></svg>
  ),
  congo: (p) => (
    <svg {...W} {...p}><path d="M0 16V0h14L0 16z" fill="#009543"/><path d="M14 0h10v6L4 16H0z" fill="#fbde4a"/><path d="M24 6v10H4z" fill="#dc241f"/></svg>
  ),
  drc: (p) => (
    <svg {...W} {...p}><rect width="24" height="16" fill="#007fff"/><path d="M0 16L19 0h5L5 16z" fill="#f7d618"/><path d="M2.5 16L21.5 0h2.5L5 16z" fill="#ce1021"/><path d="M4 2.5l.75 2.2h2.35l-1.9 1.4.7 2.2-1.9-1.35-1.9 1.35.7-2.2-1.9-1.4h2.35z" fill="#f7d618"/></svg>
  ),
  saudi: (p) => (
    <svg {...W} {...p}><rect width="24" height="16" fill="#165d31"/><path d="M6 5.5h12M7 7.5h10M8 9.5h8" stroke="#fff" strokeWidth="1.1" strokeLinecap="round"/><path d="M5 12.5h14" stroke="#fff" strokeWidth="1.3" strokeLinecap="round"/></svg>
  ),
  uae: (p) => (
    <svg {...W} {...p}><rect width="7" height="16" fill="#e4312b"/><rect x="7" width="17" height="5.4" fill="#009a44"/><rect x="7" y="5.4" width="17" height="5.3" fill="#fff"/><rect x="7" y="10.7" width="17" height="5.3" fill="#000"/></svg>
  ),
  jordan: (p) => (
    <svg {...W} {...p}><rect width="24" height="5.4" fill="#000"/><rect y="5.4" width="24" height="5.3" fill="#fff"/><rect y="10.7" width="24" height="5.3" fill="#007a3d"/><path d="M0 0l10 8-10 8z" fill="#ce1126"/><path d="M3.2 6.6l.45 1.35h1.45l-1.15.85.45 1.35-1.2-.85-1.15.85.4-1.35-1.15-.85h1.45z" fill="#fff"/></svg>
  ),
  uk: (p) => (
    <svg {...W} {...p}><rect width="24" height="16" fill="#012169"/><path d="M0 0l24 16M24 0L0 16" stroke="#fff" strokeWidth="2.6"/><path d="M0 0l24 16M24 0L0 16" stroke="#c8102e" strokeWidth="1.4"/><path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="4.4"/><path d="M12 0v16M0 8h24" stroke="#c8102e" strokeWidth="2.6"/></svg>
  ),
  france: (p) => (
    <svg {...W} {...p}><rect width="8" height="16" fill="#002395"/><rect x="8" width="8" height="16" fill="#fff"/><rect x="16" width="8" height="16" fill="#ed2939"/></svg>
  ),
  germany: (p) => (
    <svg {...W} {...p}><rect width="24" height="5.4" fill="#000"/><rect y="5.4" width="24" height="5.3" fill="#dd0000"/><rect y="10.7" width="24" height="5.3" fill="#ffce00"/></svg>
  ),
  portugal: (p) => (
    <svg {...W} {...p}><rect width="9.6" height="16" fill="#046a38"/><rect x="9.6" width="14.4" height="16" fill="#da291c"/><circle cx="9.6" cy="8" r="3.2" fill="#ffe900"/><circle cx="9.6" cy="8" r="1.7" fill="#da291c"/></svg>
  ),
  nigeria: (p) => (
    <svg {...W} {...p}><rect width="8" height="16" fill="#008751"/><rect x="8" width="8" height="16" fill="#fff"/><rect x="16" width="8" height="16" fill="#008751"/></svg>
  ),
};
