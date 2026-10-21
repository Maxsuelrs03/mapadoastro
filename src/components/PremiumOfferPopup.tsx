import { useEffect, useState } from 'react';
import { X, Gift, Shield, Check, Sparkles } from 'lucide-react';

interface Props {
  open: boolean;
  onClose: () => void;
  onBuy: () => void;
  name?: string;
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

export function PremiumOfferPopup({ open, onClose, onBuy, name }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      const t = window.setTimeout(() => setVisible(true), 50);
      return () => clearTimeout(t);
    }
    setVisible(false);
  }, [open]);

  if (!open) return null;

  const displayName = name?.trim() || 'Querida';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-midnight-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={`relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl border border-gold-400/40 bg-gradient-to-b from-midnight-800 to-midnight-950 p-6 text-center shadow-[0_0_80px_-10px_rgba(233,185,76,0.5)] transition-all duration-300 sm:p-8 ${
          visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-6 scale-95 opacity-0'
        }`}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-cream-200/40 transition-colors hover:bg-white/5 hover:text-cream-100"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/15">
          <Gift className="h-6 w-6 text-gold-300" />
        </div>

        <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-300/70">
          Condição especial para você, {displayName}
        </p>

        <h2 className="mt-3 text-2xl font-semibold leading-tight text-cream-100">
          Plano Premium com desconto exclusivo
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-cream-200/70">
          Você escolheu o plano Essencial. Que tal receber o pacote completo —
          os mesmos 5 entregáveis e os 3 bônus do Premium — por um valor
          especial, disponível agora?
        </p>

        {/* Deliverables */}
        <div className="mt-5 rounded-2xl border border-gold-400/20 bg-gold-400/[0.06] p-4 text-left">
          <p className="text-[10px] uppercase tracking-[0.15em] text-gold-300/70">
            Pacote Premium completo
          </p>
          <ul className="mt-2 space-y-1.5">
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

          <p className="mt-3 text-[10px] uppercase tracking-[0.15em] text-gold-300/70">
            3 bônus inclusos
          </p>
          <ul className="mt-2 space-y-1.5">
            {PREMIUM_BONUSES.map((t) => (
              <li key={t} className="flex items-start gap-2 text-xs text-cream-200/65">
                <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-300/70" /> {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Price */}
        <div className="mt-5 flex items-baseline justify-center gap-3">
          <span className="text-cream-200/40 line-through">R$57,90</span>
          <span className="text-3xl font-bold text-gold-300">R$27,90</span>
        </div>
        <p className="mt-0.5 text-sm font-semibold text-gold-300/80">51,81% OFF</p>

        <button
          onClick={onBuy}
          className="mt-5 w-full rounded-xl bg-gradient-to-r from-gold-500 to-gold-300 px-6 py-4 text-base font-bold text-midnight-900 shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Quero o Premium completo por R$27,90
        </button>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-cream-200/45">
          <Shield className="h-3.5 w-3.5 text-gold-300/70" />
          Garantia incondicional de 7 dias
        </div>

        <button
          onClick={onClose}
          className="mt-4 text-xs text-cream-200/35 underline-offset-4 hover:underline"
        >
          Não, prefiro ficar com o Essencial
        </button>
      </div>
    </div>
  );
}
