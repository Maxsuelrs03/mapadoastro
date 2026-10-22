import { useCallback, useEffect, useState } from 'react';
import { Starfield } from '@/components/Starfield';
import { Hero } from '@/components/Hero';
import { SignSelector } from '@/components/SignSelector';
import { LoadingScreen } from '@/components/LoadingScreen';
import { ReadingScreen } from '@/components/ReadingScreen';
import { SalesPage } from '@/components/SalesPage';
import { UpsellFlow } from '@/components/UpsellFlow';
import { PremiumOfferPopup } from '@/components/PremiumOfferPopup';
import { QuizDetails, type UserDetails } from '@/components/QuizDetails';
import { useReadingSequence } from '@/hooks/useReadingSequence';
import { ZODIAC } from '@/data/zodiac';
import { CHECKOUT_LINKS, goToCheckout } from '@/data/checkoutLinks';

type Phase = 'hero' | 'details' | 'loading' | 'reading' | 'sales' | 'upsell';

function App() {
  const [phase, setPhase] = useState<Phase>('hero');
  const [signIndex, setSignIndex] = useState<number | null>(null);
  const [details, setDetails] = useState<UserDetails | null>(null);
  const [perspective, setPerspective] = useState<string | null>(null);
  const [premiumPopupOpen, setPremiumPopupOpen] = useState(false);

  // Volta para o topo sempre que o usuário muda de etapa
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [phase]);

  const { run, stepLabel, progress } = useReadingSequence(() => {
    setPhase('reading');
  });

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
    setPerspective(null);
    setPremiumPopupOpen(false);
  }, []);

  const chooseEssential = useCallback(() => {
    setPremiumPopupOpen(true);
  }, []);

  const choosePremium = useCallback(() => {
    goToCheckout(CHECKOUT_LINKS.premium);
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
              onContinue={(p) => {
                setPerspective(p);
                setPhase('sales');
              }}
            />
          </div>
        )}

        {phase === 'sales' && (
          <div className="flex w-full flex-1 flex-col items-center justify-center py-16">
            <SalesPage
              details={details}
              perspective={perspective}
              onChooseEssential={chooseEssential}
              onChoosePremium={choosePremium}
            />
          </div>
        )}

        {phase === 'upsell' && (
          <div className="flex w-full flex-1 items-center justify-center py-20">
            <UpsellFlow onDone={reset} name={details?.name} />
          </div>
        )}

      </main>

      <PremiumOfferPopup
        open={premiumPopupOpen}
        onClose={() => setPremiumPopupOpen(false)}
        onDecline={() => {
          setPremiumPopupOpen(false);
          goToCheckout(CHECKOUT_LINKS.essencial);
        }}
        onBuy={() => {
          setPremiumPopupOpen(false);
          goToCheckout(CHECKOUT_LINKS.condicaoEspecial);
        }}
        name={details?.name}
      />
    </div>
  );
}

export default App;
