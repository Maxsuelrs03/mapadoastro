import { useState } from 'react';
import { ArrowRight, Heart, Coins, Moon, Sparkles, Compass, BookOpen } from 'lucide-react';

export interface QuizAnswers {
  focusArea: string;
  transformGoal: string;
  guidanceType: string;
}

interface Props {
  name?: string;
  onComplete: (answers: QuizAnswers) => void;
}

const QUESTIONS = [
  {
    id: 'focusArea' as const,
    question: 'Qual área da vida mais deseja compreender neste momento?',
    icon: Compass,
    options: [
      { label: 'Amor e relacionamentos', icon: Heart },
      { label: 'Dinheiro e propósito', icon: Coins },
      { label: 'Paz interior e equilíbrio', icon: Moon },
    ],
  },
  {
    id: 'transformGoal' as const,
    question: 'O que gostaria de desenvolver ou transformar?',
    icon: Sparkles,
    options: [
      { label: 'Autoconhecimento profundo', icon: BookOpen },
      { label: 'Clareza nas decisões', icon: Compass },
      { label: 'Relações mais leves', icon: Heart },
    ],
  },
  {
    id: 'guidanceType' as const,
    question: 'Que tipo de orientação gostaria de receber primeiro?',
    icon: Compass,
    options: [
      { label: 'Reflexões práticas para o dia a dia', icon: BookOpen },
      { label: 'Um plano passo a passo', icon: Compass },
      { label: 'Áudios para meditar e relaxar', icon: Moon },
    ],
  },
];

export function FollowUpQuestions({ name, onComplete }: Props) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const displayName = name?.trim() || 'Querida';

  const current = QUESTIONS[step];
  const selected = answers[current.id];

  const pick = (value: string) => {
    setAnswers((a) => ({ ...a, [current.id]: value }));
  };

  const next = () => {
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      onComplete(answers as QuizAnswers);
    }
  };

  const progress = ((step + 1) / QUESTIONS.length) * 100;

  return (
    <section className="mx-auto w-full max-w-xl px-5">
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs text-cream-200/40">
          <span>
            Pergunta {step + 1} de {QUESTIONS.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-300 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div key={step} className="animate-fade-up">
        <div className="mb-6 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold-400/10">
            <current.icon className="h-5 w-5 text-gold-300" />
          </span>
          <h2 className="mt-4 text-lg font-semibold leading-snug text-cream-100 sm:text-xl">
            {current.question}
          </h2>
          <p className="mt-2 text-sm text-cream-200/50">
            {displayName}, escolha a opção que mais combina com você.
          </p>
        </div>

        <div className="space-y-3">
          {current.options.map((opt) => {
            const active = selected === opt.label;
            const Icon = opt.icon;
            return (
              <button
                key={opt.label}
                onClick={() => pick(opt.label)}
                className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-4 text-left transition-all duration-200 ${
                  active
                    ? 'border-gold-400/60 bg-gold-400/10 shadow-[0_0_20px_-8px_rgba(233,185,76,0.5)]'
                    : 'border-white/10 bg-white/[0.03] hover:border-gold-400/30 hover:bg-white/[0.06]'
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                    active ? 'bg-gold-400/20 text-gold-300' : 'bg-white/[0.05] text-cream-200/60'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span
                  className={`text-sm font-medium ${
                    active ? 'text-gold-200' : 'text-cream-200/80'
                  }`}
                >
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>

        <button
          onClick={next}
          disabled={!selected}
          className={`group mt-7 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-bold transition-all ${
            selected
              ? 'bg-gradient-to-r from-gold-500 to-gold-300 text-midnight-900 shadow-lg hover:scale-[1.02] active:scale-[0.98]'
              : 'cursor-not-allowed bg-white/[0.05] text-cream-200/30'
          }`}
        >
          {step < QUESTIONS.length - 1 ? 'Continuar' : 'Ver minha página personalizada'}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
