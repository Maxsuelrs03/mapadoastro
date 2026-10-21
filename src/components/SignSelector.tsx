import { useState } from 'react';
import { ZODIAC } from '@/data/zodiac';

interface Props {
  onPick: (index: number) => void;
}

export function SignSelector({ onPick }: Props) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="mx-auto w-full max-w-3xl px-5 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-300/80">
        Toque no seu signo para começar
      </p>

      <div className="mt-7 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4">
        {ZODIAC.map((sign, i) => {
          const active = hovered === i;
          return (
            <button
              key={sign.name}
              onClick={() => onPick(i)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative flex flex-col items-center justify-center rounded-2xl border px-2 py-4 transition-all duration-300 ${
                active
                  ? 'border-gold-400/70 bg-gold-400/10 shadow-[0_0_25px_-5px_rgba(233,185,76,0.5)]'
                  : 'border-white/10 bg-white/[0.03] hover:border-gold-400/30 hover:bg-white/[0.06]'
              }`}
            >
              <span
                className={`text-3xl transition-colors duration-300 ${
                  active ? 'text-gold-300' : 'text-cream-100/70 group-hover:text-gold-300'
                }`}
                style={{ textShadow: active ? '0 0 16px rgba(233,185,76,0.7)' : 'none' }}
              >
                {sign.symbol}
              </span>
              <span className="mt-1 text-xs font-semibold tracking-wide text-cream-100">
                {sign.name}
              </span>
              <span className="mt-0.5 text-[10px] text-cream-200/40">
                {sign.dateRange}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-7 text-xs text-cream-200/40">
        <span className="font-semibold text-gold-300">37.953 pessoas</span> já
        descobriram seus bloqueios
      </p>
    </section>
  );
}
