import { useEffect, useState } from 'react';
import { Shield, Check, Heart, Coins, Moon, Sparkles, ArrowRight, BookOpen, Calendar, Lock } from 'lucide-react';
import type { ZodiacSign } from '@/data/zodiac';
import type { UserDetails } from '@/components/QuizDetails';

interface Props {
  sign: ZodiacSign;
  details: UserDetails | null;
  onChooseEssential: () => void;
  onChoosePremium: () => void;
}

const BLOCK_ICONS = [Heart, Coins, Moon] as const;

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

export function ReadingScreen({ sign, details, onChooseEssential, onChoosePremium }: Props) {
  const [revealed, setRevealed] = useState<number>(-1); // -1 intro, 0..2 blocks, 3 ready
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const displayName = details?.name?.trim() || 'Querida';

  useEffect(() => {
    if (revealed >= 3) return;
    if (revealed === -1) {
      const t = window.setTimeout(() => setRevealed(0), 1800);
      return () => clearTimeout(t);
    }
    if (revealed < 2) {
      const t = window.setTimeout(() => setRevealed((r) => r + 1), 2100);
      return () => clearTimeout(t);
    }
    // after the 3rd block (revealed === 2), stop auto-advancing — wait for user
  }, [revealed]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  const blockCards = sign.blocks.map((b, i) => {
    const Icon = BLOCK_ICONS[i];
    const visible = revealed >= i;
    return (
      <div
        key={b.area}
        className={`overflow-hidden rounded-2xl border border-gold-400/15 bg-gradient-to-b from-white/[0.05] to-transparent transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="flex items-center gap-3 border-b border-gold-400/10 px-5 py-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-400/10 text-gold-300">
            <Icon className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gold-300/70">
              Bloqueio {i + 1} · {b.area}
            </p>
            <h3 className="text-base font-semibold text-cream-100">{b.title}</h3>
          </div>
        </div>
        <p className="px-5 py-4 text-sm leading-relaxed text-cream-200/75">
          {b.body}
        </p>
      </div>
    );
  });

  const allBlocksVisible = revealed >= 2;

  return (
    <div className="mx-auto w-full max-w-2xl px-5">
      {/* Intro card */}
      <div
        className={`rounded-3xl border border-gold-400/20 bg-gradient-to-b from-gold-400/[0.08] to-transparent p-6 text-center transition-opacity duration-700 sm:p-8 ${
          revealed === -1 ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ display: revealed === -1 ? 'block' : 'none' }}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-gold-300/70">
          Sua Leitura Personalizada
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-cream-100">
          {displayName}
        </h2>
        <p className="mt-1 text-sm text-cream-200/60">
          Signo: {sign.name}
          {details ? ` · ${details.age} anos` : ' · 21/03/1985'}
          {details?.gender && details.gender !== 'Prefiro não informar'
            ? ` · ${details.gender}`
            : ''}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-cream-200/70">
          {displayName}, seu mapa mostra uma configuração rara. Em mais de 25
          anos, vi menos de 20 pessoas com esse alinhamento — um portal abrindo.
          As próximas semanas são decisivas: esse ciclo só volta daqui a{' '}
          <span className="text-gold-300">9 anos</span>.
        </p>
      </div>

      {/* Blocks */}
      {revealed >= 0 && (
        <>
          <div className="mb-5 text-center">
            <h2 className="text-xl font-semibold text-cream-100 sm:text-2xl">
              Os 3 bloqueios do seu mapa
            </h2>
            <p className="mt-1 text-sm text-cream-200/50">
              {sign.name} · regido por {sign.ruling} · elemento {sign.element}
            </p>
          </div>
          <div className="space-y-4">{blockCards}</div>
        </>
      )}

      {/* Continue button — manual, no auto-advance */}
      {allBlocksVisible && revealed < 3 && (
        <div className="mt-8 animate-fade-up text-center">
          <button
            onClick={() => setRevealed(3)}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-300 px-8 py-4 text-base font-bold text-midnight-900 shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Ver meus planos de desbloqueio
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Plans — Essencial + Premium */}
      {revealed >= 3 && (
        <div className="mt-8 animate-fade-up space-y-5">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-cream-100 sm:text-2xl">
              Escolha seu plano de desbloqueio
            </h2>
            <p className="mt-1 text-sm text-cream-200/50">
              {displayName}, cada plano atua sobre os 3 bloqueios revelados.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
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

          <div className="flex items-center justify-center gap-2 text-xs text-cream-200/50">
            <Shield className="h-3.5 w-3.5 text-gold-300/70" />
            Garantia incondicional de 7 dias
          </div>

          {/* Email capture — remains optional, does not block */}
          {submitted === false && (
            <form
              onSubmit={handleSubmit}
              className="mt-2 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center"
            >
              <p className="text-sm leading-relaxed text-cream-200/70">
                Receba sua leitura completa no seu e-mail:
              </p>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu melhor e-mail"
                className="mt-4 w-full rounded-xl border border-white/15 bg-midnight-800/60 px-4 py-3 text-sm text-cream-100 placeholder:text-cream-200/30 focus:border-gold-400/50 focus:outline-none focus:ring-2 focus:ring-gold-400/20"
              />
              <button
                type="submit"
                className="mt-3 w-full rounded-xl border border-gold-400/40 bg-gold-400/10 px-6 py-3 text-sm font-semibold text-gold-200 transition-colors hover:bg-gold-400/20"
              >
                Receber minha leitura
              </button>
            </form>
          )}

          {submitted && (
            <p className="text-center text-xs text-gold-300/70">
              Enviamos sua leitura para o seu e-mail.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
