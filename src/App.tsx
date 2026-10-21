import { useCallback, useState } from 'react';
import { Starfield } from '@/components/Starfield';
import { Hero } from '@/components/Hero';
import { SignSelector } from '@/components/SignSelector';
import { LoadingScreen } from '@/components/LoadingScreen';
import { ReadingScreen } from '@/components/ReadingScreen';
import { UpsellFlow } from '@/components/UpsellFlow';
import { ExitIntentPopup, useExitIntent } from '@/components/ExitIntentPopup';
import { QuizDetails, type UserDetails } from '@/components/QuizDetails';
import { useReadingSequence } from '@/hooks/useReadingSequence';
import { ZODIAC } from '@/data/zodiac';

type Phase = 'hero' | 'details' | 'loading' | 'reading' | 'upsell';

function App() {
  const [phase, setPhase] = useState<Phase>('hero');
  const [signIndex, setSignIndex] = useState<number | null>(null);
  const [details, setDetails] = useState<UserDetails | null>(null);

  const { run, stepLabel, progress } = useReadingSequence(() => {
    setPhase('reading');
  });

  const exitActive = phase === 'reading' || phase === 'upsell';
  const { triggered, reset: resetExit } = useExitIntent(exitActive);

  const pickSign = useCallback((i: number) => {
    setSignIndex(i);
    setPhase('details');
  }, []);

  const submitDetails = useCallback(
    (d: UserDetails) => {
      setDetails(d);
      setPhase('loading');
      run();
    },
    [run]
  );

  const reset = useCallback(() => {
    setPhase('hero');
    setSignIndex(null);
    setDetails(null);
    resetExit();
  }, [resetExit]);

  const closeExit = useCallback(() => resetExit(), [resetExit]);

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

        {phase === 'details' && signIndex !== null && (
          <div className="flex w-full flex-1 flex-col items-center justify-center py-16">
            <QuizDetails sign={ZODIAC[signIndex]} onSubmit={submitDetails} />
          </div>
        )}

        {phase === 'loading' && (
          <div className="flex w-full flex-1 items-center justify-center py-24">
            <LoadingScreen stepLabel={stepLabel} progress={progress} name={details?.name} />
          </div>
        )}

        {phase === 'reading' && signIndex !== null && (
          <div className="flex w-full flex-1 flex-col items-center justify-center py-16">
            <ReadingScreen
              sign={ZODIAC[signIndex]}
              details={details}
              onComplete={() => setPhase('upsell')}
            />
          </div>
        )}

        {phase === 'upsell' && (
          <div className="flex w-full flex-1 items-center justify-center py-20">
            <UpsellFlow onDone={reset} name={details?.name} />
          </div>
        )}

      </main>

      <ExitIntentPopup
        open={triggered && exitActive}
        onClose={closeExit}
        onAccept={() => {
          closeExit();
          setPhase('upsell');
        }}
        name={details?.name}
      />
    </div>
  );
}

export default App;
