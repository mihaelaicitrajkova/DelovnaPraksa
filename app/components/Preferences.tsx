'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export type Language = 'mk' | 'en';
type Theme = 'light' | 'dark';
type Preferences = { language: Language; theme: Theme; setLanguage: (value: Language) => void; toggleLanguage: () => void; toggleTheme: () => void };
const PreferencesContext = createContext<Preferences | null>(null);

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('mk');
  const [theme, setTheme] = useState<Theme>('light');
  useEffect(() => {
    const savedLanguage = localStorage.getItem('mostari-language') as Language | null;
    const savedTheme = localStorage.getItem('mostari-theme') as Theme | null;
    if (savedLanguage === 'mk' || savedLanguage === 'en') setLanguage(savedLanguage);
    if (savedTheme === 'light' || savedTheme === 'dark') setTheme(savedTheme);
  }, []);
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('mostari-theme', theme); }, [theme]);
  useEffect(() => { document.documentElement.lang = language; localStorage.setItem('mostari-language', language); }, [language]);
  return <PreferencesContext.Provider value={{ language, theme, setLanguage, toggleLanguage: () => setLanguage(v => v === 'mk' ? 'en' : 'mk'), toggleTheme: () => setTheme(v => v === 'light' ? 'dark' : 'light') }}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() { const value = useContext(PreferencesContext); if (!value) throw new Error('PreferencesProvider missing'); return value; }
