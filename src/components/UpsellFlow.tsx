import { useState } from 'react';
import { Sparkles, Check, Calendar, Star } from 'lucide-react';

interface Props {
  onDone: () => void;
  name?: string;
}

export function UpsellFlow({ onDone, name }: Props) {
  const [stage, setStage] = useState<'bump' | 'cross' | 'done'>('bump');
  const displayName = name?.trim() || 'Querida';

  if (stage === 'done') {
    return (
      <div className="mx-auto w-full max-w-md px-5 text-center animate-fade-up">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-400/15">
          <Sparkles className="h-7 w-7 text-gold-300" />
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-cream-100">
          Seu Ritual Solar está a caminho.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-cream-200/70">
          Enviamos tudo para o seu e-mail. O universo alinhou cada detalhe para
          este momento — agora é com você. Boa jornada, {displayName}.
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

  if (stage === 'cross') {
    return (
      <div className="mx-auto w-full max-w-xl px-5 animate-fade-up">
        <div className="rounded-3xl border border-gold-400/25 bg-gradient-to-b from-gold-400/[0.08] to-transparent p-6 text-center sm:p-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-300">
            <Calendar className="h-3 w-3" /> Última revelação do seu mapa
          </span>
          <h3 className="mt-4 text-2xl font-semibold text-cream-100">
            Ativar o ímã é o começo. Mas os astros mudam todo mês.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-cream-200/70">
            Sem saber <span className="text-gold-300">quando Vênus favorece</span>{' '}
            ou <span className="text-gold-300">Saturno testa</span>, você pode
            agir na hora errada e travar de novo. Meus clientes que acompanham
            os trânsitos mantêm o relacionamento leve o ano inteiro.
          </p>
          <p className="mt-2 text-sm text-cream-200/60">
            O <span className="font-semibold text-cream-100">Mapa Anual do Amor</span>{' '}
            + os trânsitos mensais decodificados pela Mahila são a sua bússola
            para os próximos 12 meses.
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="text-cream-200/50 line-through">de R$297</span>
            <span className="text-3xl font-bold text-gold-300">R$97</span>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={() => setStage('done')}
              className="w-full rounded-xl bg-gradient-to-r from-gold-500 to-gold-300 px-6 py-4 text-base font-bold text-midnight-900 shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Sim, quero o Mapa Anual do Amor
            </button>
            <button
              onClick={() => setStage('done')}
              className="text-sm text-cream-200/50 underline-offset-4 hover:underline"
            >
              Não, prefiro ficar só com o Ritual Solar
            </button>
          </div>
        </div>
      </div>
    );
  }

  // order bump
  return (
    <div className="mx-auto w-full max-w-lg px-5 animate-fade-up">
      <div className="rounded-3xl border border-gold-400/25 bg-gradient-to-b from-gold-400/[0.08] to-transparent p-6 text-center sm:p-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-300">
          <Star className="h-3 w-3" /> Oferta única desta página
        </span>
        <h3 className="mt-4 text-xl font-semibold text-cream-100 sm:text-2xl">
          Mensagens reais que a Mahila recebeu depois do Ritual
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-cream-200/70">
          Depois do Ritual Solar, muitas pessoas relataram viradas inesperadas
          em amor e dinheiro nas primeiras 3 semanas. A Mahila preparou um
          material extra — o <span className="font-semibold text-cream-100">Ímã
          dos 21 Dias</span> — para acelerar o efeito do seu Ritual.
        </p>

        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="text-cream-200/40 line-through">de R$127</span>
          <span className="text-cream-200/50 line-through">R$47</span>
          <span className="text-2xl font-bold text-gold-300">R$19</span>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={() => setStage('cross')}
            className="w-full rounded-xl bg-gradient-to-r from-gold-500 to-gold-300 px-6 py-4 text-base font-bold text-midnight-900 shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Sim, adicione o Ímã dos 21 Dias por R$19
          </button>
          <button
            onClick={() => setStage('cross')}
            className="text-sm text-cream-200/50 underline-offset-4 hover:underline"
          >
            Não, quero só o Ritual Solar
          </button>
        </div>

        <ul className="mt-6 space-y-2 text-left text-xs text-cream-200/60">
          {[
            'Protocolo diário de 7 minutos',
            'Mantra de ativação matinal',
            'Cronograma dos 3 bloqueios em 21 dias',
          ].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-gold-300" /> {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
