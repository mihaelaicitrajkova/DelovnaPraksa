import Link from 'next/link';
import { ReactNode } from 'react';

export function Header() {
  return <header className="site-header inner-header"><Link className="brand" href="/" aria-label="Mostari home"><span className="brand-mark"><i /><i /><i /></span><span>mostari<span>.</span></span></Link><nav aria-label="Главна навигација"><Link href="/za-nas">За нас</Link><Link href="/programi">Програми</Link><Link href="/prikazni">Приказни</Link><Link href="/vkluci-se">Вклучи се</Link></nav><div className="header-actions"><span className="language"><b>МК</b><span>/</span>EN</span><Link className="join-link" href="/vkluci-se">Приклучи се <span>↗</span></Link></div></header>;
}

export function Footer() {
  return <footer><div className="footer-top"><p>Растеме со луѓето, не покрај нив.</p><Link className="button button-light" href="/vkluci-se">Стани дел од маалото <span>↗</span></Link></div><div className="footer-bottom"><span>© 2026 МОСТАРИ</span><span>СКОПЈЕ · СЕВЕРНА МАКЕДОНИЈА</span><Link href="/prikazni">ПРИКАЗНИ ОД МААЛОТО</Link></div></footer>;
}

export function PageShell({ children }: { children: ReactNode }) { return <><Header /><main>{children}</main><Footer /></>; }
