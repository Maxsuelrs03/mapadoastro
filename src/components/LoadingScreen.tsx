import { useEffect, useState } from 'react';

interface Props {
  stepLabel: string;
  progress: number; // 0..1
}

const PHASES = [
  'Consultando seu mapa astral…',
  'Mapeando o seu mapa astral…',
  'Localizando a casa do seu bloqueio…',
  'Decodificando os 3 bloqueios que travam sua vida…',
];

export function LoadingScreen({ stepLabel, progress }: Props) {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const id = window.setInterval(() => {
      setDots((d) => (d.length >= 3 ? '' : d + '.'));
    }, 380);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center px-6 text-center">
      {/* animated orbit */}
      <div className="relative h-40 w-40">
        <div className="absolute inset-0 rounded-full border border-gold-400/20" />
        <div className="absolute inset-3 rounded-full border border-gold-400/15" />
        <div className="absolute inset-6 rounded-full border border-gold-400/10" />
        <div
          className="absolute inset-0 animate-spin-slow"
          style={{ animationDuration: '6s' }}
        >
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-gold-300 shadow-[0_0_12px_rgba(233,185,76,0.9)]" />
        </div>
        <div
          className="absolute inset-3 animate-spin-slow"
          style={{ animationDuration: '4s', animationDirection: 'reverse' }}
        >
          <span className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cream-100 shadow-[0_0_10px_rgba(250,243,224,0.7)]" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl text-gold-300 drop-shadow-[0_0_18px_rgba(233,185,76,0.6)]">
            ✦
          </span>
        </div>
      </div>

      <h2 className="mt-10 text-xl font-semibold text-cream-100">
        {stepLabel || PHASES[0]}
        <span className="inline-block w-6 text-left">{dots}</span>
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-cream-200/60">
        Não feche esta página. Estou cruzando o seu signo com o minuto exato em
        que você nasceu. Em instantes, aqui embaixo, você vê o que está travando{' '}
        <span className="text-gold-300">a sua vida</span>.
      </p>

      <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-300 transition-[width] duration-200 ease-out"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>
      <p className="mt-2 text-xs tabular-nums text-cream-200/40">
        {Math.round(progress * 100)}%
      </p>
    </div>
  );
}
