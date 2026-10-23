import { Shield, Check, Sparkles, BookOpen, UserRound, LockKeyhole, Star, Moon, Sun, ArrowRight } from 'lucide-react';
import type { UserDetails } from '@/components/QuizDetails';

interface Props {
  details: UserDetails | null;
  perspective: string | null;
  onChooseEssential: () => void;
  onChoosePremium: () => void;
}

const SHARED_DELIVERABLES = [
  'Leitura personalizada do mapa astral',
  'Plano de reflexão de 7 dias',
  'Guia prático de hábitos e autoconhecimento',
];

const PREMIUM_EXTRA = [
  'Jornada guiada de 14 dias',
  'Diário de acompanhamento de 21 dias',
];

const PREMIUM_BONUSES = [
  'Calendário mensal de reflexão',
  'Guia de perguntas para relacionamentos e autoconhecimento',
  'Áudios de reflexão e meditação',
];

function TarotArtwork() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-gold-400/25 bg-[#100b13] p-4 sm:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(183,117,45,0.22),transparent_65%)]" />
      <div className="relative flex min-h-[220px] items-center justify-center gap-2 sm:min-h-[310px] sm:gap-5">
        {[
          { title: 'A LUA', symbol: '☾', tone: 'from-[#251b31] to-[#100d1a]', rotate: '-rotate-6', sub: 'INTUIÇÃO' },
          { title: 'O ENFORCADO', symbol: '♙', tone: 'from-[#39231d] to-[#171018]', rotate: 'rotate-0', sub: 'PERSPECTIVA' },
          { title: 'A ESTRELA', symbol: '✧', tone: 'from-[#202a39] to-[#11101d]', rotate: 'rotate-6', sub: 'RENOVAÇÃO' },
        ].map((card) => (
          <div key={card.title} className={`relative flex w-[31%] max-w-[185px] flex-col items-center rounded-xl border border-[#d7b56b]/75 bg-gradient-to-b ${card.tone} p-2 shadow-[0_12px_35px_rgba(0,0,0,0.55)] ${card.rotate} sm:rounded-2xl sm:p-3`}>
            <div className="flex aspect-[3/4.5] w-full flex-col items-center justify-between border border-[#d7b56b]/45 p-2 sm:p-3">
              <span className="text-[7px] tracking-[0.2em] text-[#e5c981] sm:text-[10px]">✦ M A P A ✦</span>
              <div className="flex aspect-square w-full items-center justify-center rounded-full border border-[#d7b56b]/60 bg-[#d7b56b]/[0.06] text-4xl text-[#e6c67b] sm:text-6xl">{card.symbol}</div>
              <div className="text-center">
                <p className="text-[7px] font-semibold tracking-[0.08em] text-[#f6e5bd] sm:text-[10px]">{card.title}</p>
                <p className="mt-1 text-[6px] tracking-[0.15em] text-[#d7b56b]/75 sm:text-[8px]">{card.sub}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="relative mt-3 text-center text-[9px] uppercase tracking-[0.24em] text-[#d9bd7d]/80 sm:text-xs">Uma leitura simbólica · uma nova perspectiva</p>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="Avaliação demonstrativa de quatro estrelas e meia em cinco">
      {[0, 1, 2, 3].map((n) => <Star key={n} className="h-4 w-4 fill-[#e9b94c] text-[#e9b94c]" />)}
      <span className="relative inline-flex h-4 w-4">
        <Star className="absolute h-4 w-4 text-[#e9b94c]" />
        <span className="absolute inset-y-0 left-0 w-1/2 overflow-hidden"><Star className="h-4 w-4 fill-[#e9b94c] text-[#e9b94c]" /></span>
      </span>
    </div>
  );
}

export function SalesPage({ details, perspective, onChooseEssential, onChoosePremium }: Props) {
  const displayName = details?.name?.trim() || 'Você';

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-8 sm:px-6">
      <header className="mb-7 flex items-center justify-between border-b border-gold-400/15 pb-4 pt-5">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/50 text-gold-300"><Sun className="h-5 w-5" /></span>
          <span className="text-xs font-semibold tracking-[0.18em] text-cream-100 sm:text-sm">MAPA DO ASTRO</span>
        </div>
        <span className="text-[10px] uppercase tracking-[0.16em] text-gold-300/70">Leitura personalizada</span>
      </header>

      <section className="grid items-center gap-5 md:grid-cols-[0.9fr_1.1fr] md:gap-8">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-300 sm:text-xs">Sua leitura começa aqui</p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-cream-100 sm:text-4xl lg:text-5xl">
            {displayName}, mais do que cartas, <span className="text-gold-300">uma nova perspectiva sobre você.</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-cream-200/75 sm:text-base">
            Explore os temas que você escolheu e conheça uma leitura simbólica organizada para ajudar você a refletir sobre sentimentos, escolhas e próximos passos.
          </p>
          {perspective && <p className="mt-3 text-sm text-gold-200">Sua área de interesse: <strong>{perspective}</strong></p>}
          <div className="mt-5 grid grid-cols-3 gap-2 text-left">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5"><UserRound className="mb-2 h-4 w-4 text-gold-300" /><p className="text-[10px] leading-snug text-cream-100 sm:text-xs">Para ler no celular ou imprimir</p></div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5"><Moon className="mb-2 h-4 w-4 text-gold-300" /><p className="text-[10px] leading-snug text-cream-100 sm:text-xs">Interpretação por temas</p></div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5"><LockKeyhole className="mb-2 h-4 w-4 text-gold-300" /><p className="text-[10px] leading-snug text-cream-100 sm:text-xs">Acesso digital</p></div>
          </div>
          <button onClick={() => document.getElementById('planos-mapa-astro')?.scrollIntoView({ behavior: 'smooth' })} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-300 px-5 py-3.5 text-sm font-bold text-midnight-900 sm:w-auto">
            Ver planos e conteúdos <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="order-1 md:order-2"><TarotArtwork /></div>
      </section>

      <section className="mt-12">
        <div className="mb-5 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-300/80">O que você recebe</p>
          <h2 className="mt-2 text-2xl font-semibold text-cream-100 sm:text-3xl">Uma experiência organizada, do início ao próximo passo</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-cream-200/65">Veja o conteúdo incluído antes de escolher seu plano.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { n: '01', title: 'Guias de reflexão', text: 'Materiais para explorar amor, dinheiro e paz interior no seu ritmo, com leitura fácil no celular.' },
            { n: '02', title: 'Reflexão guiada', text: 'Perguntas e orientações para registrar percepções e considerar outras perspectivas.' },
            { n: '03', title: 'Material complementar', text: 'Conteúdo digital para revisitar as reflexões e organizar pequenos próximos passos.' },
          ].map((item) => <article key={item.n} className="rounded-2xl border border-gold-400/15 bg-white/[0.025] p-4 sm:p-5"><span className="text-xs font-semibold tracking-[0.2em] text-gold-300">{item.n}</span><h3 className="mt-3 font-semibold text-cream-100">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-cream-200/65">{item.text}</p></article>)}
        </div>
      </section>

      <section className="mt-12 grid overflow-hidden rounded-3xl border border-gold-400/20 bg-[#100c16] md:grid-cols-2">
        <div className="flex min-h-[230px] flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(201,157,70,0.17),transparent_70%)] p-5 sm:p-8">
          <div className="flex gap-3 sm:gap-5">
            {[
              { title: 'A LUA', glyph: '☾' },
              { title: 'O ENFORCADO', glyph: '♙' },
              { title: 'A ESTRELA', glyph: '✧' },
            ].map((c) => <div key={c.title} className="flex aspect-[2/3] w-[78px] flex-col items-center justify-between border border-gold-400/70 bg-gradient-to-b from-[#33243b] to-[#100c16] p-2 shadow-lg sm:w-[105px]"><span className="text-[7px] tracking-widest text-gold-300">✦</span><span className="text-3xl text-gold-200 sm:text-4xl">{c.glyph}</span><span className="text-center text-[6px] font-semibold text-cream-100 sm:text-[8px]">{c.title}</span></div>)}
          </div>
          <p className="mt-4 text-center text-[9px] uppercase tracking-[0.2em] text-gold-300/70">Três cartas · três perspectivas</p>
        </div>
        <div className="p-5 sm:p-7">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-300/80">Demonstração de leitura</p>
          <h2 className="mt-2 text-xl font-semibold text-cream-100 sm:text-2xl">{displayName}, veja como uma leitura pode ser apresentada</h2>
          <p className="mt-2 text-sm leading-relaxed text-cream-200/65">Veja um exemplo do formato e da linguagem usados na leitura.</p>
          <div className="mt-5 space-y-4">
            <div><h3 className="text-sm font-semibold text-gold-200">01 · A Lua — o que pede clareza</h3><p className="mt-1 text-xs leading-relaxed text-cream-200/70">Simboliza dúvidas e informações incompletas. A reflexão é separar fatos, receios e suposições antes de tirar conclusões.</p></div>
            <div><h3 className="text-sm font-semibold text-gold-200">02 · O Enforcado — outra perspectiva</h3><p className="mt-1 text-xs leading-relaxed text-cream-200/70">Convida a pausar e observar o que talvez esteja sendo visto sempre do mesmo jeito.</p></div>
            <div><h3 className="text-sm font-semibold text-gold-200">03 · A Estrela — possibilidade de renovação</h3><p className="mt-1 text-xs leading-relaxed text-cream-200/70">Representa esperança e recuperação da confiança para escolher um próximo passo possível.</p></div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-300/80">Exemplos da experiência</p>
          <h2 className="mt-2 text-2xl font-semibold text-cream-100 sm:text-3xl">Uma experiência feita para olhar para dentro</h2>
          <div className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-xl border border-gold-400/20 bg-white/[0.03] px-4 py-3">
            <Stars /><strong className="text-sm text-cream-100">4,5/5</strong>
          </div>
          <p className="mt-2 text-[10px] text-cream-200/45">Nota ilustrativa; ainda não representa uma avaliação real de clientes.</p>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            { name: 'Mariana S.', age: '28 anos · São Paulo', quote: 'A leitura me ajudou a organizar perguntas que eu vinha evitando e a pensar no que realmente precisava conversar.' },
            { name: 'Camila R.', age: '32 anos · Salvador', quote: 'A demonstração mostra como as cartas podem servir de ponto de partida para refletir sobre padrões e escolhas.' },
            { name: 'Rafael L.', age: '26 anos · Belo Horizonte', quote: 'O formato em etapas deixa a interpretação mais fácil de acompanhar e consultar.' },
          ].map((person) => <article key={person.name} className="rounded-2xl border border-white/10 bg-white/[0.025] p-4"><div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/40 bg-gradient-to-br from-[#6b453b] to-[#211624] text-sm font-semibold text-cream-100">{person.name.split(' ').map((s) => s[0]).join('').replace('.', '')}</div><div><p className="text-sm font-semibold text-cream-100">{person.name}</p><p className="text-[10px] text-cream-200/50">{person.age}</p></div></div><div className="mt-3"><Stars /></div><p className="mt-3 text-sm leading-relaxed text-cream-200/75">“{person.quote}”</p></article>)}
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-5 text-center"><p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-300/80">Compare os planos</p><h2 className="mt-2 text-2xl font-semibold text-cream-100 sm:text-3xl">{displayName}, escolha o conteúdo ideal para você</h2><p className="mt-2 text-sm text-cream-200/60">A estrutura é a mesma; o Premium inclui materiais e bônus adicionais.</p></div>
        <div id="planos-mapa-astro" className="grid scroll-mt-5 gap-4 md:grid-cols-2">
          <article className="flex flex-col rounded-3xl border border-white/15 bg-white/[0.025] p-5 sm:p-6">
            <span className="w-fit rounded-full bg-white/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cream-200/70">Essencial</span>
            <h3 className="mt-4 text-xl font-semibold text-cream-100">Sua leitura e guia de reflexão</h3><p className="mt-2 text-sm text-cream-200/60">Para começar com o conteúdo principal.</p>
            <div className="mt-5 text-3xl font-bold text-cream-100">R$ 17,90</div>
            <ul className="mt-5 flex-1 space-y-3">{SHARED_DELIVERABLES.map((item) => <li key={item} className="flex gap-2 text-sm text-cream-200/75"><Check className="h-4 w-4 shrink-0 text-gold-300" />{item}</li>)}</ul>
            <button onClick={onChooseEssential} className="mt-6 w-full rounded-xl border border-gold-400/50 bg-gold-400/10 px-4 py-3.5 text-sm font-bold text-gold-200 transition-colors hover:bg-gold-400/20">Quero o Essencial <ArrowRight className="ml-1 inline h-4 w-4" /></button>
          </article>
          <article className="relative flex flex-col rounded-3xl border border-gold-400/50 bg-gradient-to-b from-gold-400/[0.09] to-transparent p-5 shadow-[0_0_40px_-24px_rgba(233,185,76,0.45)] sm:p-6">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-500 to-gold-300 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-midnight-900">Mais completo</span>
            <span className="mt-2 w-fit rounded-full bg-gold-400/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">Premium</span>
            <h3 className="mt-4 text-xl font-semibold text-cream-100">Uma jornada mais profunda</h3><p className="mt-2 text-sm text-cream-200/60">Todo o plano Essencial e materiais extras para acompanhar suas reflexões.</p>
            <div className="mt-5 flex items-baseline gap-2"><span className="text-sm text-cream-200/40 line-through">R$ 57,90</span><span className="text-3xl font-bold text-gold-300">R$ 37,90</span></div>
            <ul className="mt-5 flex-1 space-y-3">{[...SHARED_DELIVERABLES, ...PREMIUM_EXTRA, ...PREMIUM_BONUSES].map((item) => <li key={item} className="flex gap-2 text-sm text-cream-200/75"><Check className="h-4 w-4 shrink-0 text-gold-300" />{item}</li>)}</ul>
            <button onClick={onChoosePremium} className="mt-6 w-full rounded-xl bg-gradient-to-r from-gold-500 to-gold-300 px-4 py-3.5 text-sm font-bold text-midnight-900 shadow-lg transition-transform active:scale-[0.99]">Quero o Premium <ArrowRight className="ml-1 inline h-4 w-4" /></button>
          </article>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
        <Shield className="mx-auto h-6 w-6 text-gold-300" />
        <h3 className="mt-3 text-base font-semibold text-cream-100">Garantia de 7 dias</h3>
        <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-cream-200/65">Se a compra não corresponder ao que foi apresentado, você pode solicitar o reembolso dentro de 7 dias, conforme as condições aplicáveis à compra.</p>
      </section>
      <footer className="mt-10 border-t border-gold-400/15 py-6 text-center"><p className="text-xs tracking-[0.18em] text-gold-300/80">MAPA DO ASTRO</p><p className="mt-2 text-[10px] text-cream-200/40">Tarô · Autoconhecimento · Reflexão</p></footer>
    </div>
  );
}
