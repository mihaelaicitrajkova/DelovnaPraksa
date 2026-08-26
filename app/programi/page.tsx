import Link from 'next/link';
import { PageShell } from '../components/SiteFrame';

const programmes = [
  { no: '01', name: 'Глас на младите', slug: 'glas-na-mladite', icon: '✳', text: 'Млади луѓе ги претвораат своите идеи во мали, видливи промени — со ментори, алатки и простор за проба.' },
  { no: '02', name: 'Зелени маала', slug: 'zeleni-maala', icon: '⌁', text: 'Заедно со соседите правиме повеќе сенка, градини и улици на кои сакаме да останеме подолго.' },
  { no: '03', name: 'Култура на грижа', slug: 'kultura-na-griza', icon: '♡', text: 'Негуваме мали ритуали на заедништво: разговори, соседски трпези и поддршка меѓу генерации.' },
];

export default function Programmes() { return <PageShell><section className="page-hero"><p className="eyebrow"><span /> 01 · ПРОГРАМИ</p><h1>Идеи што <em>пуштаат корен.</em></h1><p>Три долгорочни програми, една едноставна цел: луѓето да имаат моќ да го подобрат местото каде што живеат.</p></section><section className="listing">{programmes.map((p, i) => <article className={`listing-card tint-${i + 1}`} key={p.slug}><span>{p.no}</span><div className="listing-symbol">{p.icon}</div><h2>{p.name}</h2><p>{p.text}</p><Link className="button button-dark" href={`/programi/${p.slug}`}>Погледни ја програмата <b>→</b></Link></article>)}</section><section className="band-note"><p>Имаш идеја за твоето маало?</p><Link href="/vkluci-se">Сподели ја со нас ↗</Link></section></PageShell>; }
