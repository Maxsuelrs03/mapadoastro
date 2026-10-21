import { useEffect, useRef, useState } from 'react';
import { X, Gift, Shield, Clock } from 'lucide-react';

interface Props {
  open: boolean;
  onClose: () => void;
  onAccept: () => void;
  name?: string;
}

export function ExitIntentPopup({ open, onClose, onAccept, name }: Props) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (open) {
      const t = window.setTimeout(() => setLeaving(true), 50);
      return () => clearTimeout(t);
    }
    setLeaving(false);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-opacity duration-300 ${
        leaving ? 'opacity-100' : 'opacity-0'
      }`}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-midnight-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={`relative w-full max-w-md overflow-hidden rounded-3xl border border-gold-400/40 bg-gradient-to-b from-midnight-800 to-midnight-950 p-6 text-center shadow-[0_0_80px_-10px_rgba(233,185,76,0.5)] transition-all duration-300 sm:p-8 ${
          leaving ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-6 scale-95 opacity-0'
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
          Espere{name ? `, ${name}` : ', Querida'} — não vá ainda
        </p>

        <h2 className="mt-3 text-2xl font-semibold leading-tight text-cream-100">
          O seu ciclo raro ainda está aberto
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-cream-200/70">
          Os astros alinharam esta leitura só para você. Se sair agora, o portal
          se fecha e esse alinhamento só volta daqui a{' '}
          <span className="text-gold-300">9 anos</span>.
        </p>

        <div className="mt-5 rounded-2xl border border-gold-400/20 bg-gold-400/[0.06] p-4">
          <p className="text-xs text-cream-200/60">Oferta exclusiva de saída</p>
          <div className="mt-1 flex items-center justify-center gap-2">
            <span className="text-cream-200/40 line-through">R$97</span>
            <span className="text-3xl font-bold text-gold-300">R$19</span>
          </div>
          <p className="mt-1 text-xs text-cream-200/50">
            Seu Ritual Solar completo + o Ímã dos 21 Dias
          </p>
        </div>

        <button
          onClick={onAccept}
          className="mt-5 w-full rounded-xl bg-gradient-to-r from-gold-500 to-gold-300 px-6 py-4 text-base font-bold text-midnight-900 shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Quero aproveitar agora
        </button>

        <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-cream-200/45">
          <span className="flex items-center gap-1.5">
            <Shield className="h-3.5 w-3.5 text-gold-300/70" /> Garantia 7 dias
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-gold-300/70" /> Só nesta página
          </span>
        </div>

        <button
          onClick={onClose}
          className="mt-4 text-xs text-cream-200/35 underline-offset-4 hover:underline"
        >
          Não, prefiro perder essa janela
        </button>
      </div>
    </div>
  );
}

export function useExitIntent(enabled: boolean) {
  const [triggered, setTriggered] = useState(false);
  const armed = useRef(false);
  const lastY = useRef(0);

  useEffect(() => {
    if (!enabled) {
      armed.current = false;
      return;
    }
    if (triggered) return;

    const arm = () => {
      armed.current = true;
    };
    const onMouseOut = (e: MouseEvent) => {
      if (!armed.current || triggered) return;
      // only when the cursor truly leaves the viewport (toward top/toolbar)
      if (e.clientY <= 0 || e.relatedTarget === null) {
        setTriggered(true);
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (triggered) return;
      const y = e.touches[0]?.clientY ?? 0;
      // fast aggressive scroll-up = intent to leave (mobile)
      if (lastY.current > 0 && y - lastY.current > 120 && y > window.innerHeight - 80) {
        setTriggered(true);
      }
      lastY.current = y;
    };

    // arm after a short delay so an immediate mouse jitter doesn't fire it
    const armTimer = window.setTimeout(arm, 800);
    document.addEventListener('mouseout', onMouseOut);
    document.addEventListener('touchmove', onTouchMove);

    return () => {
      window.clearTimeout(armTimer);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('touchmove', onTouchMove);
    };
  }, [enabled, triggered]);

  const reset = () => setTriggered(false);

  return { triggered, reset };
}
