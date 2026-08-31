'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { usePreferences } from './Preferences';

export function Header() {
  const { language, theme, toggleLanguage, toggleTheme } = usePreferences();
  const t = language === 'mk' ? { about: 'За нас', programs: 'Програми', stories: 'Приказни', join: 'Приклучи се' } : { about: 'About', programs: 'Programmes', stories: 'Stories', join: 'Join us' };
  return <header className="site-header inner-header"><Link className="brand" href="/" aria-label="Mostari home"><span className="brand-mark"><i /><i /><i /></span><span>mostari<span>.</span></span></Link><nav aria-label="Main navigation"><Link href="/za-nas">{t.about}</Link><Link href="/programi">{t.programs}</Link><Link href="/prikazni">{t.stories}</Link><Link href="/vkluci-se">{t.join}</Link></nav><div className="header-actions"><button className="theme-toggle" onClick={toggleTheme} aria-label={theme === 'light' ? 'Enable dark mode' : 'Enable light mode'}>{theme === 'light' ? '☾' : '☀'}</button><button className="language" onClick={toggleLanguage} aria-label="Change language"><b>{language === 'mk' ? 'МК' : 'EN'}</b><span>/</span>{language === 'mk' ? 'EN' : 'МК'}</button><Link className="join-link" href="/vkluci-se">{t.join} <span>↗</span></Link></div></header>;
}

export function Footer() {
  const { language } = usePreferences(); const t = language === 'mk' ? { statement: 'Растеме со луѓето, не покрај нив.', join: 'Стани дел од маалото', stories: 'ПРИКАЗНИ ОД МААЛОТО' } : { statement: 'We grow with people, never alongside them.', join: 'Join the neighbourhood', stories: 'STORIES FROM THE BLOCK' };
  return <footer><div className="footer-top"><p>{t.statement}</p><Link className="button button-light" href="/vkluci-se">{t.join} <span>↗</span></Link></div><div className="footer-bottom"><span>© 2026 MOSTARI</span><span>SKOPJE · NORTH MACEDONIA</span><Link href="/prikazni">{t.stories}</Link></div></footer>;
}
export function PageShell({ children }: { children: ReactNode }) { return <><Header /><main>{children}</main><Footer /></>; }
