import { useEffect, useState } from 'react';
import { Heart, Coins, Moon, ArrowRight } from 'lucide-react';
import type { ZodiacSign } from '@/data/zodiac';
import type { UserDetails } from '@/components/QuizDetails';

interface Props {
  sign: ZodiacSign;
  details: UserDetails | null;
  onContinue: () => void;
}

const BLOCK_ICONS = [Heart, Coins, Moon] as const;

export function ReadingScreen({ sign, details, onContinue }: Props) {
  const [revealed, setRevealed] = useState<number>(-1); // -1 intro, 0..2 blocks

  const displayName = details?.name?.trim() || 'Querida';

  useEffect(() => {
    if (revealed >= 2) return;
    if (revealed === -1) {
      const t = window.setTimeout(() => setRevealed(0), 1800);
      return () => clearTimeout(t);
    }
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
      {allBlocksVisible && (
        <div className="mt-8 animate-fade-up text-center">
          <button
            onClick={onContinue}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-300 px-8 py-4 text-base font-bold text-midnight-900 shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Continuar
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
