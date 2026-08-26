import type { Metadata } from 'next';
import './globals.css';
import './interior.css';
import './landing-fix.css';
import './hero-fix.css';
export const metadata: Metadata = { title: 'Мостари — Соседства што растат заедно', description: 'Фиктивна граѓанска организација од Скопје за живи, зелени и поврзани маала.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="mk"><body>{children}</body></html>; }
