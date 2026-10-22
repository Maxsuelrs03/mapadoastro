import { useState } from 'react';
import { ArrowRight, User, Cake, Sparkles } from 'lucide-react';
import type { ZodiacSign } from '@/data/zodiac';

export interface UserDetails {
  name: string;
  age: number;
  gender: 'Feminino' | 'Masculino' | 'Prefiro não informar' | '';
}

interface Props {
  sign: ZodiacSign;
  onSubmit: (details: UserDetails) => void;
}

// Mantém o campo visível acima do teclado no celular (espera o teclado abrir)
const keepFieldVisible = (e: React.FocusEvent<HTMLInputElement>) => {
  const field = e.currentTarget;
  window.setTimeout(() => {
    field.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, 300);
};

const GENDER_OPTIONS: UserDetails['gender'][] = [
  'Feminino',
  'Masculino',
  'Prefiro não informar',
];

export function QuizDetails({ sign, onSubmit }: Props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<UserDetails['gender']>('');
  const [touched, setTouched] = useState(false);

  const ageNum = parseInt(age, 10);
  const ageValid = !isNaN(ageNum) && ageNum >= 18 && ageNum <= 100;
  const nameValid = name.trim().length >= 2;
  const formValid = nameValid && ageValid;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!formValid) return;
    onSubmit({
      name: name.trim(),
      age: ageNum,
      gender: gender || 'Prefiro não informar',
    });
  };

  return (
    <section className="mx-auto w-full max-w-xl px-5">
      {/* sign breadcrumb */}
      <div className="mb-8 text-center">
        <span className="text-4xl text-gold-300 drop-shadow-[0_0_14px_rgba(233,185,76,0.5)]">
          {sign.symbol}
        </span>
        <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gold-300/70">
          {sign.name} · {sign.dateRange}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-7">
        <p className="text-center text-sm text-cream-200/60">
          Para refinar a sua leitura, preciso de mais três detalhes rápidos.
        </p>

        {/* Nome */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-cream-100">
            <User className="h-4 w-4 text-gold-300/70" />
            Como podemos chamar você?
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={keepFieldVisible}
            onBlur={() => setTouched(true)}
            placeholder="Digite seu primeiro nome"
            maxLength={40}
            className="w-full rounded-xl border border-white/15 bg-midnight-800/60 px-4 py-3 text-base text-cream-100 placeholder:text-cream-200/30 focus:border-gold-400/50 focus:outline-none focus:ring-2 focus:ring-gold-400/20"
          />
          {touched && !nameValid && (
            <p className="mt-1.5 text-xs text-red-300/80">
              Por favor, digite seu nome (pelo menos 2 letras).
            </p>
          )}
        </div>

        {/* Idade */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-cream-100">
            <Cake className="h-4 w-4 text-gold-300/70" />
            Qual é a sua idade?
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={18}
            max={100}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            onFocus={keepFieldVisible}
            onBlur={() => setTouched(true)}
            placeholder="Entre 18 e 100 anos"
            className="w-full rounded-xl border border-white/15 bg-midnight-800/60 px-4 py-3 text-base text-cream-100 placeholder:text-cream-200/30 focus:border-gold-400/50 focus:outline-none focus:ring-2 focus:ring-gold-400/20"
          />
          {touched && age !== '' && !ageValid && (
            <p className="mt-1.5 text-xs text-red-300/80">
              A idade precisa estar entre 18 e 100 anos.
            </p>
          )}
        </div>

        {/* Sexo */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-cream-100">
            <Sparkles className="h-4 w-4 text-gold-300/70" />
            Como você se identifica?
            <span className="text-xs font-normal text-cream-200/40">
              (opcional)
            </span>
          </label>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {GENDER_OPTIONS.map((opt) => {
              const active = gender === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setGender(opt)}
                  className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'border-gold-400/60 bg-gold-400/10 text-gold-200 shadow-[0_0_20px_-8px_rgba(233,185,76,0.5)]'
                      : 'border-white/10 bg-white/[0.03] text-cream-200/70 hover:border-gold-400/30 hover:bg-white/[0.06]'
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!formValid}
          className={`group flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-bold transition-all ${
            formValid
              ? 'bg-gradient-to-r from-gold-500 to-gold-300 text-midnight-900 shadow-lg hover:scale-[1.02] active:scale-[0.98]'
              : 'cursor-not-allowed bg-white/[0.05] text-cream-200/30'
          }`}
        >
          Gerar minha leitura
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
        {touched && !formValid && (
          <p className="text-center text-xs text-red-300/80">
            Preencha o nome e uma idade válida para continuar.
          </p>
        )}
      </form>
    </section>
  );
}
