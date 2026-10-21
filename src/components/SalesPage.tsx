import { Shield, Check, Sparkles, BookOpen, Quote } from 'lucide-react';
import type { UserDetails } from '@/components/QuizDetails';
import type { QuizAnswers } from '@/components/FollowUpQuestions';

interface Props {
  details: UserDetails | null;
  answers: QuizAnswers | null;
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

const ILLUSTRATIVE_SCENARIOS = [
  {
    title: 'Quando o relacionamento pesa',
    text: 'Situações comuns em que a pessoa sente que carrega o relacionamento nas costas e não entende por que o padrão se repete. A leitura ajuda a nomear o bloqueio e abrir espaço para mudança.',
  },
  {
    title: 'Quando o dinheiro entra e sai',
    text: 'O cenário em que o esforço existe, mas a fartura não chega. O guia prático propõe reflexões sobre crenças e hábitos que podem estar no caminho.',
  },
  {
    title: 'Quando a mente não desliga',
    text: 'A sensação de estar sempre acelerado, sem conseguir descansar de verdade. Os áudios de reflexão oferecem um momento de pausa e reorientação.',
  },
];

export function SalesPage({ details, answers, onChooseEssential, onChoosePremium }: Props) {
  const displayName = details?.name?.trim() || 'Querida';
  const focusArea = answers?.focusArea;

  return (
    <div className="mx-auto w-full max-w-2xl px-5">
      {/* 1. Introdução personalizada */}
      <section className="animate-fade-up text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold-400/10">
          <Sparkles className="h-5 w-5 text-gold-300" />
        </span>
        <h1 className="mt-5 text-2xl font-semibold text-cream-100 sm:text-3xl">
          {displayName}, sua jornada começa aqui
        </h1>
        {focusArea && (
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-cream-200/70">
            Você disse que deseja compreender mais sobre{' '}
            <span className="text-gold-300">{focusArea.toLowerCase()}</span>.
            O material a seguir foi organizado para apoiar você exatamente
            nesse caminho.
          </p>
        )}
      </section>

      {/* 2. Contextualização */}
      <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
        <h2 className="text-lg font-semibold text-cream-100">
          Como este material te apoia
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-cream-200/70">
          Os entregáveis não prometem previsões científicas nem soluções
          mágicas. São ferramentas de reflexão e autoconhecimento que ajudam
          você a nomear padrões, criar novos hábitos e tomar decisões com mais
          clareza — no seu ritmo.
        </p>
      </section>

      {/* 3. Histórias e depoimentos (editorial, ilustrativo) */}
      <section className="mt-10">
        <h2 className="text-center text-lg font-semibold text-cream-100 sm:text-xl">
          Situações que talvez você reconheça
        </h2>
        <p className="mt-1 text-center text-xs text-cream-200/40">
          Conteúdo ilustrativo — não são relatos de clientes reais.
        </p>
        <div className="mt-5 space-y-4">
          {ILLUSTRATIVE_SCENARIOS.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-gold-400/15 bg-gradient-to-b from-white/[0.04] to-transparent p-5"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-400/10">
                  <Quote className="h-3.5 w-3.5 text-gold-300" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-cream-100">{s.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-cream-200/65">
                    {s.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Benefícios e entregáveis */}
      <section className="mt-10">
        <h2 className="text-center text-lg font-semibold text-cream-100 sm:text-xl">
          O que você recebe
        </h2>
        <div className="mt-5 grid gap-3">
          {SHARED_DELIVERABLES.map((t, i) => (
            <div
              key={t}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-400/10 text-xs font-bold text-gold-300">
                {i + 1}
              </span>
              <span className="text-sm text-cream-200/80">{t}</span>
            </div>
          ))}
          <div className="mt-2 rounded-xl border border-gold-400/20 bg-gold-400/[0.05] px-4 py-3">
            <p className="text-xs font-semibold text-gold-300/80">No Premium, você recebe também:</p>
            <div className="mt-2 space-y-1.5">
              {PREMIUM_EXTRA.map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 shrink-0 text-gold-300" />
                  <span className="text-xs text-cream-100">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2 rounded-xl border border-gold-400/20 bg-gold-400/[0.05] px-4 py-3">
            <p className="text-xs font-semibold text-gold-300/80">3 bônus do Premium:</p>
            <div className="mt-2 space-y-1.5">
              {PREMIUM_BONUSES.map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 shrink-0 text-gold-300/70" />
                  <span className="text-xs text-cream-200/70">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Planos e preços */}
      <section className="mt-10">
        <h2 className="text-center text-lg font-semibold text-cream-100 sm:text-xl">
          Escolha seu plano
        </h2>
        <p className="mt-1 text-center text-sm text-cream-200/50">
          {displayName}, cada plano atua sobre os 3 bloqueios revelados.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {/* Plano Essencial */}
          <div className="flex flex-col rounded-3xl border border-white/12 bg-gradient-to-b from-white/[0.04] to-transparent p-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cream-200/70">
              <BookOpen className="h-3 w-3" /> Essencial
            </span>
            <h3 className="mt-4 text-lg font-semibold text-cream-100">
              Comece sua jornada
            </h3>
            <p className="mt-1 text-xs text-cream-200/50">3 entregáveis</p>

            <ul className="mt-4 space-y-2">
              {SHARED_DELIVERABLES.map((t) => (
                <li key={t} className="flex items-start gap-2 text-xs text-cream-200/70">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-300" /> {t}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-cream-100">R$17,90</span>
            </div>

            <button
              onClick={onChooseEssential}
              className="mt-5 w-full rounded-xl border border-gold-400/40 bg-gold-400/10 px-6 py-3.5 text-sm font-bold text-gold-200 transition-colors hover:bg-gold-400/20"
            >
              Adquirir meu plano
            </button>
          </div>

          {/* Plano Premium */}
          <div className="relative flex flex-col rounded-3xl border border-gold-400/40 bg-gradient-to-b from-gold-400/[0.1] via-white/[0.03] to-transparent p-6 shadow-[0_0_50px_-20px_rgba(233,185,76,0.4)]">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-500 to-gold-300 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-midnight-900">
              Recomendado
            </span>
            <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-gold-400/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-300">
              <Sparkles className="h-3 w-3" /> Premium
            </span>
            <h3 className="mt-4 text-lg font-semibold text-cream-100">
              Transformação completa
            </h3>
            <p className="mt-1 text-xs text-cream-200/50">5 entregáveis + 3 bônus</p>

            <ul className="mt-4 space-y-2">
              {SHARED_DELIVERABLES.map((t) => (
                <li key={t} className="flex items-start gap-2 text-xs text-cream-200/70">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-300" /> {t}
                </li>
              ))}
              {PREMIUM_EXTRA.map((t) => (
                <li key={t} className="flex items-start gap-2 text-xs text-cream-100">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-300" /> {t}
                </li>
              ))}
            </ul>

            <div className="mt-3 border-t border-gold-400/15 pt-3">
              <p className="text-[10px] uppercase tracking-[0.15em] text-gold-300/70">Bônus inclusos</p>
              <ul className="mt-2 space-y-1.5">
                {PREMIUM_BONUSES.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-xs text-cream-200/65">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-300/70" /> {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex items-baseline gap-2">
              <span className="text-sm text-cream-200/40 line-through">R$57,90</span>
              <span className="text-3xl font-bold text-gold-300">R$37,90</span>
            </div>
            <p className="mt-0.5 text-[11px] font-semibold text-gold-300/80">34,54% OFF</p>

            <button
              onClick={onChoosePremium}
              className="mt-5 w-full rounded-xl bg-gradient-to-r from-gold-500 to-gold-300 px-6 py-3.5 text-sm font-bold text-midnight-900 shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Escolher Premium
            </button>
          </div>
        </div>
      </section>

      {/* 6. Garantia e informações de compra */}
      <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
        <Shield className="mx-auto h-6 w-6 text-gold-300/70" />
        <h3 className="mt-3 text-sm font-semibold text-cream-100">
          Garantia incondicional de 7 dias
        </h3>
        <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-cream-200/60">
          Se em até 7 dias você sentir que o material não é para você, basta
          solicitar o reembolso — sem perguntas. O risco é todo nosso.
        </p>
      </section>

      {/* 7. Chamada para ação final */}
      <section className="mt-8 pb-4 text-center">
        <p className="text-sm text-cream-200/60">
          {displayName}, escolha o plano que faz sentido para você agora.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={onChooseEssential}
            className="rounded-xl border border-gold-400/40 bg-gold-400/10 px-6 py-3.5 text-sm font-bold text-gold-200 transition-colors hover:bg-gold-400/20"
          >
            Adquirir Essencial — R$17,90
          </button>
          <button
            onClick={onChoosePremium}
            className="rounded-xl bg-gradient-to-r from-gold-500 to-gold-300 px-6 py-3.5 text-sm font-bold text-midnight-900 shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Escolher Premium — R$37,90
          </button>
        </div>
      </section>
    </div>
  );
}
