import { useEffect, useRef, useState } from 'react';

interface Step {
  label: string;
  durationMs: number;
}

const STEPS: Step[] = [
  { label: 'Mapeando o seu mapa astral…', durationMs: 2400 },
  { label: 'Localizando a casa do seu bloqueio…', durationMs: 2600 },
  { label: 'Cruzando seu signo com o minuto exato do nascimento…', durationMs: 2800 },
  { label: 'Decodificando os 3 bloqueios que travam sua vida…', durationMs: 2200 },
];

export function useReadingSequence(onComplete: () => void) {
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [running, setRunning] = useState(false);
  const timers = useRef<number[]>([]);
  const raf = useRef<number | null>(null);
  const startRef = useRef<number>(0);

  useEffect(() => {
    return () => {
      timers.current.forEach(clearTimeout);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  const run = () => {
    if (running) return;
    setRunning(true);
    setStepIndex(0);
    setProgress(0);
    startRef.current = performance.now();
    const total = STEPS.reduce((a, s) => a + s.durationMs, 0);

    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      const p = Math.min(elapsed / total, 1);
      setProgress(p);
      let cursor = 0;
      for (let i = 0; i < STEPS.length; i++) {
        cursor += STEPS[i].durationMs;
        if (elapsed <= cursor + 1) {
          setStepIndex(i);
          break;
        }
      }
      if (p < 1) {
        raf.current = requestAnimationFrame(tick);
      } else {
        setRunning(false);
        onComplete();
      }
    };
    raf.current = requestAnimationFrame(tick);
  };

  return { stepIndex, stepLabel: STEPS[stepIndex]?.label ?? '', progress, running, run };
}
