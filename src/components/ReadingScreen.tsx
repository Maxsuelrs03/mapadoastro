import { useEffect, useState } from 'react';
import { Lock, Sparkles, Shield, Check, Heart, Coins, Moon } from 'lucide-react';
import type { ZodiacSign } from '@/data/zodiac';
import type { UserDetails } from '@/components/QuizDetails';

interface Props {
  sign: ZodiacSign;
  details: UserDetails | null;
  onComplete: () => void;
}

const BLOCK_ICONS = [Heart, Coins, Moon] as const;

export function ReadingScreen({ sign, details, onComplete }: Props) {
  const [revealed, setRevealed] = useState<number>(-1); // -1 intro, 0..3 blocks, 4 offer
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const displayName = details?.name?.trim() || 'Querida';

  useEffect(() => {
    if (revealed >= 3) return;
    if (revealed === -1) {
      const t = window.setTimeout(() => setRevealed(0), 1800);
      return () => clearTimeout(t);
    }
    const t = window.setTimeout(() => setRevealed((r) => r + 1), 2100);
    return () => clearTimeout(t);
  }, [revealed]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    onComplete();
  };

  const blockCards = sign.blocks.map((b, i) => {
    const Icon = BLOCK_ICONS[i];
    const visible = revealed >= i + 1;
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

      {/* Offer 1 — Ritual Solar */}
      {revealed >= 3 && (
        <div className="mt-10 animate-fade-up">
          <div className="rounded-3xl border border-gold-400/30 bg-gradient-to-b from-gold-400/[0.1] via-white/[0.03] to-transparent p-6 text-center shadow-[0_0_60px_-20px_rgba(233,185,76,0.4)] sm:p-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-300">
              <Lock className="h-3 w-3" /> Ritual Solar
            </span>
            <h3 className="mt-4 text-2xl font-semibold text-cream-100">
              Destrave os 3 bloqueios agora
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-cream-200/70">
              O Ritual Solar é a ativação personalizada do seu signo para
              dissolver cada bloqueio revelado. Inclui áudio guiado, mantras do
              dia e o mapa dos próximos 21 dias para a virada.
            </p>

            <div className="mt-5 flex items-center justify-center gap-3">
              <span className="text-cream-200/50 line-through">de R$97</span>
              <span className="text-3xl font-bold text-gold-300">R$37</span>
              <span className="rounded-full bg-gold-400/15 px-2 py-0.5 text-[10px] uppercase tracking-wide text-gold-300">
                hoje
              </span>
            </div>

            <button
              onClick={onComplete}
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-gold-500 to-gold-300 px-6 py-4 text-base font-bold text-midnight-900 shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Quero ativar meu Ritual Solar
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-cream-200/50">
              <Shield className="h-3.5 w-3.5 text-gold-300/70" />
              Garantia incondicional de 7 dias
            </div>
            <p className="mt-1 text-[10px] text-cream-200/30">
              Acesso liberado só enquanto o ciclo estiver ativo.
            </p>
          </div>
        </div>
      )}

      {/* Final email capture */}
      {submitted === false && revealed >= 3 && (
        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center"
        >
          <p className="text-sm leading-relaxed text-cream-200/70">
            Receba sua leitura completa e o Ritual Solar no seu e-mail:
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
    </div>
  );
}
