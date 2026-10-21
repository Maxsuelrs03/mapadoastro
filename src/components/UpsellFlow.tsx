import { Sparkles } from 'lucide-react';

interface Props {
  onDone: () => void;
  name?: string;
}

export function UpsellFlow({ onDone, name }: Props) {
  const displayName = name?.trim() || 'Querida';

  return (
    <div className="mx-auto w-full max-w-md px-5 text-center animate-fade-up">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-400/15">
        <Sparkles className="h-7 w-7 text-gold-300" />
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-cream-100">
        Seu plano está sendo preparado.
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-cream-200/70">
        O universo alinhou cada detalhe para este momento — agora é com você.
        Boa jornada, {displayName}.
      </p>
      <button
        onClick={onDone}
        className="mt-6 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-cream-100 transition-colors hover:bg-white/[0.08]"
      >
        Voltar ao início
      </button>
    </div>
  );
}
