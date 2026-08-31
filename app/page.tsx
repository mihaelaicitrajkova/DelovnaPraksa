'use client';

import { useEffect, useRef, useState } from 'react';
import { usePreferences } from './components/Preferences';

const copy = {
  mk: {
    nav: ['За нас', 'Програми', 'Приказни', 'Вклучи се'],
    label: 'НЕЗАВИСНА ГРАЃАНСКА ОРГАНИЗАЦИЈА · СКОПЈЕ',
    headline: ['Соседства што', 'растат заедно.'],
    intro: 'Мостари создава безбедни, зелени и живи маала каде младите луѓе имаат глас — и простор тој глас да стане дело.',
    primary: 'Запознај нè', secondary: 'Нашите програми', current: 'ТЕКОВНА АКЦИЈА', action: 'Мал парк, голема промена',
    actionText: 'Со 86 соседи го претвораме напуштениот агол во градина и место за дружење.', people: 'луѓе вклучени', years: 'години работа', projects: 'заеднички акции',
    impactTitle: 'Малите чекори се гледаат од далеку.', impactText: 'Од попладневни работилници до долгорочни партнерства, работиме таму каде што секојдневието се среќава со надежта.',
    areas: [['Глас на младите', 'Работилници, менторство и младински иницијативи што почнуваат од вистински идеи.'], ['Зелени маала', 'Практични акции за почисти улици, повеќе сенка и заеднички јавни простори.'], ['Култура на грижа', 'Мали настани што ги поврзуваат генерациите и градат чувство на припадност.']],
    stories: 'Приказни од маалото', storyTitle: 'Училишниот двор во Чаир доби своја прва градина', storyText: 'Деца, родители и наставници засадија 240 садници во само едно саботно утро.', read: 'Прочитај приказна', footer: 'Растеме со луѓето, не покрај нив.',
  },
  en: {
    nav: ['About', 'Programmes', 'Stories', 'Get involved'], label: 'INDEPENDENT CIVIC ORGANISATION · SKOPJE', headline: ['Neighbourhoods that', 'grow together.'],
    intro: 'Mostari creates safe, green and lively neighbourhoods where young people have a voice — and space to turn that voice into action.',
    primary: 'Meet us', secondary: 'Our programmes', current: 'CURRENT ACTION', action: 'Small park, big change', actionText: 'Together with 86 neighbours, we are turning a forgotten corner into a garden and meeting place.', people: 'people involved', years: 'years of work', projects: 'community actions',
    impactTitle: 'Small steps can be seen from far away.', impactText: 'From afternoon workshops to long-term partnerships, we work where daily life meets hope.',
    areas: [['Youth voice', 'Workshops, mentoring and youth initiatives that start with real ideas.'], ['Green blocks', 'Practical actions for cleaner streets, more shade and shared public spaces.'], ['A culture of care', 'Small events that connect generations and build belonging.']],
    stories: 'Stories from the block', storyTitle: 'A school yard in Chair has its first garden', storyText: 'Children, parents and teachers planted 240 seedlings in one Saturday morning.', read: 'Read the story', footer: 'We grow with people, never alongside them.',
  },
};

function Counter({ active, end, suffix = '' }: { active: boolean; end: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  useEffect(() => { if (!active) return; const started = performance.now(); let frame = 0; const tick = (now: number) => { const progress = Math.min((now - started) / 1300, 1); setValue(Math.floor((1 - Math.pow(1 - progress, 3)) * end)); if (progress < 1) frame = requestAnimationFrame(tick); }; frame = requestAnimationFrame(tick); return () => cancelAnimationFrame(frame); }, [active, end]);
  return <>{value}{suffix}</>;
}

export default function Home() {
  const { language, toggleLanguage, theme, toggleTheme } = usePreferences(); const t = copy[language];
  const figuresRef = useRef<HTMLElement>(null); const [counted, setCounted] = useState(false);
  useEffect(() => { const element = figuresRef.current; if (!element) return; const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setCounted(true); observer.disconnect(); } }, { threshold: .45 }); observer.observe(element); return () => observer.disconnect(); }, []);
  return <main>
    <header className="site-header"><a className="brand" href="/" aria-label="Mostari home"><span className="brand-mark"><i /><i /><i /></span><span>mostari<span>.</span></span></a><nav aria-label="Главна навигација"><a href="/za-nas">{t.nav[0]}</a><a href="/programi">{t.nav[1]}</a><a href="/prikazni">{t.nav[2]}</a><a href="/vkluci-se">{t.nav[3]}</a></nav><div className="header-actions"><button className="theme-toggle" onClick={toggleTheme} aria-label={theme === 'light' ? 'Enable dark mode' : 'Enable light mode'}>{theme === 'light' ? '☾' : '☀'}</button><button className="language" onClick={toggleLanguage} aria-label="Change language"><b>{language === 'mk' ? 'МК' : 'EN'}</b><span>/</span>{language === 'mk' ? 'EN' : 'МК'}</button><a className="join-link" href="/vkluci-se">{language === 'mk' ? 'Приклучи се' : 'Join us'} <span>↗</span></a></div></header>
    <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow"><span /> {t.label}</p><h1>{t.headline[0]} <em>{t.headline[1]}</em></h1><p className="hero-intro">{t.intro}</p><div className="hero-buttons"><a className="button button-dark" href="/za-nas">{t.primary} <span>→</span></a><a className="text-button" href="/programi">{t.secondary} <span>↓</span></a></div></div><div className="hero-art community-board" aria-label="Community activity board"><p className="board-label">МОСТАРИ / ТЕРЕНСКИ БЕЛЕШКИ</p><div className="board-grid"><div className="board-route"><span>ПЕШАЧКА РУТА</span><b>02.4 km</b><i /><i /><i /><i /></div><div className="board-note"><span>СЛЕДНА СРЕДБА</span><strong>Сабота<br />10:00</strong><small>Карпош · мал парк</small></div><div className="board-progress"><span>АКЦИЈА / 07</span><b>72%</b><div><i /></div><small>целта е на дофат</small></div></div><p className="board-stamp">место<br />за сите</p></div><aside className="action-card"><p>{t.current}</p><h2>{t.action}</h2><span className="scribble" /><div className="action-bottom"><small>{t.actionText}</small><a href="/programi/mal-park" aria-label="Open current action">↗</a></div></aside></section>
    <section className={`figures ${counted ? 'is-counted' : ''}`} ref={figuresRef} aria-label="Impact figures"><div><strong><Counter active={counted} end={48} suffix="00+" /></strong><span>{t.people}</span></div><div><strong><Counter active={counted} end={7} /></strong><span>{t.years}</span></div><div><strong><Counter active={counted} end={38} /></strong><span>{t.projects}</span></div><p>01—04</p></section>
    <section className="impact" id="about"><div className="impact-heading"><p className="eyebrow">01 · {language === 'mk' ? 'НАШАТА РАБОТА' : 'OUR WORK'}</p><h2>{t.impactTitle}</h2><p>{t.impactText}</p></div><div className="program-grid" id="programmes">{t.areas.map(([title, body], index) => <article key={title} className={`program program-${index + 1}`}><div className="program-top"><span>0{index + 1}</span><div className="program-icon" aria-hidden="true">{index === 0 ? '✳' : index === 1 ? '⌁' : '♡'}</div></div><div className="program-copy"><h3>{title}</h3><p>{body}</p></div><a className="program-link" href={['/programi/glas-na-mladite','/programi/zeleni-maala','/programi/kultura-na-griza'][index]}>{language === 'mk' ? 'Дознај повеќе' : 'Learn more'} <b>→</b></a></article>)}</div></section>
    <section className="story" id="stories"><div className="story-art"><div className="story-sun" /><div className="story-home"><i /><i /><i /></div><div className="story-leaves">✦ ✦ ✦</div></div><div className="story-copy"><p className="eyebrow">02 · {t.stories.toUpperCase()}</p><h2>{t.storyTitle}</h2><p>{t.storyText}</p><a className="text-button" href="/prikazni/gradina-cair">{t.read} <span>→</span></a></div></section>
    <footer id="involve"><div className="footer-top"><p>{t.footer}</p><a className="button button-light" href="/vkluci-se">{language === 'mk' ? 'Стани дел од маалото' : 'Join the neighbourhood'} <span>↗</span></a></div><div className="footer-bottom"><span>© 2026 МОСТАРИ</span><span>СКОПЈЕ · СЕВЕРНА МАКЕДОНИЈА</span><a href="/vkluci-se">INSTAGRAM · FACEBOOK · LINKEDIN</a></div></footer>
  </main>;
}
