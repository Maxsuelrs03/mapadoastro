import { useCallback, useState } from 'react';
import { Starfield } from '@/components/Starfield';
import { Hero } from '@/components/Hero';
import { SignSelector } from '@/components/SignSelector';
import { LoadingScreen } from '@/components/LoadingScreen';
import { ReadingScreen } from '@/components/ReadingScreen';
import { UpsellFlow } from '@/components/UpsellFlow';
import { useReadingSequence } from '@/hooks/useReadingSequence';
import { ZODIAC } from '@/data/zodiac';

type Phase = 'hero' | 'loading' | 'reading' | 'upsell';

function App() {
  const [phase, setPhase] = useState<Phase>('hero');
  const [signIndex, setSignIndex] = useState<number | null>(null);

  const { run, stepLabel, progress } = useReadingSequence(() => {
    setPhase('reading');
  });

  const pickSign = useCallback(
    (i: number) => {
      setSignIndex(i);
      setPhase('loading');
      run();
    },
    [run]
  );

  const reset = useCallback(() => {
    setPhase('hero');
    setSignIndex(null);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Starfield />

      <main className="relative z-10 flex min-h-screen flex-col items-center pb-20">
        {phase === 'hero' && (
          <div className="flex w-full flex-col items-center">
            <Hero />
            <div className="mt-12 sm:mt-16">
              <SignSelector onPick={pickSign} />
            </div>
          </div>
        )}

        {phase === 'loading' && (
          <div className="flex w-full flex-1 items-center justify-center py-24">
            <LoadingScreen stepLabel={stepLabel} progress={progress} />
          </div>
        )}

        {phase === 'reading' && signIndex !== null && (
          <div className="flex w-full flex-1 flex-col items-center justify-center py-16">
            <ReadingScreen
              sign={ZODIAC[signIndex]}
              onComplete={() => setPhase('upsell')}
            />
          </div>
        )}

        {phase === 'upsell' && (
          <div className="flex w-full flex-1 items-center justify-center py-20">
            <UpsellFlow onDone={reset} />
          </div>
        )}

      </main>
    </div>
  );
}

export default App;
