import { useEffect, useState } from 'react';
import { X, Shield, Check, Sparkles } from 'lucide-react';

interface Props {
  open: boolean;
  onClose: () => void;
  onBuy: () => void;
  name?: string;
}

const PREMIUM_ITEMS = [
  'Leitura personalizada do mapa astral',
  'Plano de reflexão de 7 dias',
  'Guia prático de hábitos e autoconhecimento',
  'Jornada guiada de 14 dias',
  'Diário de acompanhamento de 21 dias',
];

const PREMIUM_BONUSES = [
  'Calendário mensal de reflexão',
  'Guia de perguntas para relacionamentos',
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
      className={`fixed inset-0 z-50 flex items-center justify-center px-3 transition-opacity duration-300 sm:px-4 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      role="dialog"
      aria-modal="true"
      style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div
        className="absolute inset-0 bg-midnight-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={`relative flex max-h-[92vh] w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-gold-400/40 bg-gradient-to-b from-midnight-800 to-midnight-950 shadow-[0_0_80px_-10px_rgba(233,185,76,0.5)] transition-all duration-300 ${
          visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-6 scale-95 opacity-0'
        }`}
      >
        {/* Header — compact */}
        <div className="shrink-0 border-b border-gold-400/15 px-4 pt-4 pb-3 text-center sm:px-5">
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full text-cream-200/40 transition-colors hover:bg-white/5 hover:text-cream-100"
          >
            <X className="h-3.5 w-3.5" />
          </button>

          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-gold-300/70">
            Condição especial, {displayName}
          </p>
          <h2 className="mt-2 text-lg font-semibold leading-tight text-cream-100 sm:text-xl">
            Premium completo com 51,81% OFF
          </h2>
        </div>

        {/* Scrollable middle — only if needed on very small screens */}
        <div className="flex-1 overflow-y-auto px-4 py-3 sm:px-5">
          {/* Price — prominent, early */}
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-sm text-cream-200/40 line-through">R$57,90</span>
            <span className="text-3xl font-bold text-gold-300">R$27,90</span>
          </div>
          <p className="text-center text-xs font-semibold text-gold-300/80">51,81% de desconto</p>

          <p className="mt-3 text-center text-xs leading-relaxed text-cream-200/60">
            Os mesmos 5 entregáveis e 3 bônus do Premium — por um valor
            especial disponível agora.
          </p>

          {/* Compact deliverable summary */}
          <div className="mt-3 rounded-xl border border-gold-400/20 bg-gold-400/[0.06] px-3 py-2.5">
            <p className="text-[9px] uppercase tracking-[0.15em] text-gold-300/70">5 entregáveis</p>
            <ul className="mt-1.5 space-y-1">
              {PREMIUM_ITEMS.map((t) => (
                <li key={t} className="flex items-start gap-1.5 text-[11px] text-cream-200/70">
                  <Check className="mt-0.5 h-3 w-3 shrink-0 text-gold-300" /> {t}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-[9px] uppercase tracking-[0.15em] text-gold-300/70">3 bônus</p>
            <ul className="mt-1.5 space-y-1">
              {PREMIUM_BONUSES.map((t) => (
                <li key={t} className="flex items-start gap-1.5 text-[11px] text-cream-200/65">
                  <Sparkles className="mt-0.5 h-3 w-3 shrink-0 text-gold-300/70" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer — fixed, always visible */}
        <div className="shrink-0 border-t border-gold-400/15 px-4 pb-4 pt-3 sm:px-5">
          <button
            onClick={onBuy}
            className="w-full rounded-xl bg-gradient-to-r from-gold-500 to-gold-300 px-4 py-3.5 text-sm font-bold text-midnight-900 shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Quero o Premium por R$27,90
          </button>
          <div className="mt-2 flex items-center justify-center gap-1.5 text-[10px] text-cream-200/45">
            <Shield className="h-3 w-3 text-gold-300/70" /> Garantia de 7 dias
          </div>
          <button
            onClick={onClose}
            className="mt-2 w-full text-center text-[11px] text-cream-200/35 underline-offset-2 hover:underline"
          >
            Não, prefiro o Essencial
          </button>
        </div>
      </div>
    </div>
  );
}
