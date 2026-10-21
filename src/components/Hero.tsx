import { Star } from 'lucide-react';

export function Hero() {
  return (
    <header className="mx-auto w-full max-w-3xl px-5 pt-14 text-center sm:pt-20">
      <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30 bg-gold-400/10">
        <Star className="h-5 w-5 text-gold-300" fill="currentColor" />
      </div>

      <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold-300/70">
        Leitura Astral Personalizada
      </p>

      <h1 className="mt-5 text-3xl font-semibold leading-tight text-cream-100 sm:text-5xl sm:leading-[1.1]">
        Existe um <span className="italic text-gold-300">bloqueio no seu mapa</span>{' '}
        que ninguém nunca te contou
      </h1>

      <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream-200/70 sm:text-lg">
        Um teste rápido do seu signo revela os 3 bloqueios que travam seu{' '}
        <span className="text-cream-100">amor</span>, seu{' '}
        <span className="text-cream-100">dinheiro</span> e sua{' '}
        <span className="text-cream-100">paz</span> — e como destravá-los agora.
      </p>
    </header>
  );
}
