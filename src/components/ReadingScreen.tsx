import { useEffect, useState } from 'react';
import { Heart, Coins, Moon, ArrowRight, Compass } from 'lucide-react';
import type { ZodiacSign } from '@/data/zodiac';
import type { UserDetails } from '@/components/QuizDetails';

interface Props {
  sign: ZodiacSign;
  details: UserDetails | null;
  onContinue: (perspective: string) => void;
}

const BLOCK_ICONS = [Heart, Coins, Moon] as const;

const PERSPECTIVE_OPTIONS = [
  'Amor e relacionamentos',
  'Autoconhecimento',
  'Decisões e novos caminhos',
  'Propósito e próximos passos',
];

export function ReadingScreen({ sign, details, onContinue }: Props) {
  const displayName = details?.name?.trim() || 'Sua leitura';
  const [revealed, setRevealed] = useState<number>(0); // 0..2 blocks
  const [perspective, setPerspective] = useState<string>('');

  useEffect(() => {
    if (revealed >= 2) return;
    if (revealed < 2) {
      const t = window.setTimeout(() => setRevealed((r) => r + 1), 2100);
      return () => clearTimeout(t);
    }
  }, [revealed]);

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
        <div className="flex items-center gap-3 border-b border-gold-400/10 px-4 py-3 sm:px-5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-400/10 text-gold-300">
            <Icon className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gold-300/70">
              Bloqueio {i + 1} · {b.area}
            </p>
            <h3 className="text-base font-semibold text-cream-100">{b.title}</h3>
          </div>
        </div>
        <p className="px-4 py-4 text-sm leading-relaxed text-cream-200/75 sm:px-5">
          {b.body}
        </p>
      </div>
    );
  });

  const allBlocksVisible = revealed >= 2;

  return (
    <div className="mx-auto w-full max-w-2xl px-4 sm:px-5">
      {/* Blocks */}
      {revealed >= 0 && (
        <>
          <div className="mb-5 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300/75">
              Leitura personalizada para {displayName}
            </p>
            <h2 className="text-xl font-semibold text-cream-100 sm:text-2xl">
              {displayName}, vamos explorar os 3 bloqueios do seu mapa
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-cream-200/60">
              Esta é uma leitura simbólica para ajudar você a refletir sobre possíveis padrões e novas perspectivas.
            </p>
            <p className="mt-2 text-xs text-cream-200/50">
              {sign.name} · regido por {sign.ruling} · elemento {sign.element}
            </p>
          </div>
          <div className="space-y-4">{blockCards}</div>
        </>
      )}

      {/* Stories + perspective question — shown after blocks are visible */}
      {allBlocksVisible && (
        <div className="mt-10 animate-fade-up space-y-8">
          {/* Perspective question */}
          <section className="rounded-2xl border border-gold-400/20 bg-gold-400/[0.04] p-5 sm:p-6">
            <div className="mb-4 text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gold-400/10">
                <Compass className="h-4 w-4 text-gold-300" />
              </span>
              <h2 className="mt-3 text-base font-semibold leading-snug text-cream-100 sm:text-lg">
                Em qual área da sua vida você gostaria de encontrar uma nova perspectiva?
              </h2>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2">
              {PERSPECTIVE_OPTIONS.map((opt) => {
                const active = perspective === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => setPerspective(opt)}
                    className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      active
                        ? 'border-gold-400/60 bg-gold-400/10 text-gold-200 shadow-[0_0_20px_-8px_rgba(233,185,76,0.5)]'
                        : 'border-white/10 bg-white/[0.03] text-cream-200/70 hover:border-gold-400/30 hover:bg-white/[0.06]'
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => perspective && onContinue(perspective)}
              disabled={!perspective}
              className={`group mt-5 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-bold transition-all ${
                perspective
                  ? 'bg-gradient-to-r from-gold-500 to-gold-300 text-midnight-900 shadow-lg hover:scale-[1.02] active:scale-[0.98]'
                  : 'cursor-not-allowed bg-white/[0.05] text-cream-200/30'
              }`}
            >
              Continuar
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </section>
        </div>
      )}
    </div>
  );
}
