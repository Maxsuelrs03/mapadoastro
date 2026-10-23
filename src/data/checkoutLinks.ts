export const CHECKOUT_LINKS = {
  essencial: 'https://pay.cakto.com.br/4777ma9_1231768',
  premium: 'https://pay.cakto.com.br/3337euy_1231878',
  // Oferta de R$27,90: exclusiva do pop-up
  condicaoEspecial: 'https://pay.cakto.com.br/fpxdexa',
} as const;

// Parâmetros de rastreamento repassados ao checkout (Utmify / Meta Ads)
const TRACKING_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'src', 'sck', 'xcod', 'fbclid'];
const STORAGE_KEY = 'mda_tracking_params';

function getTrackingParams(): URLSearchParams {
  const found = new URLSearchParams();
  const current = new URLSearchParams(window.location.search);
  TRACKING_PARAMS.forEach((key) => {
    const value = current.get(key);
    if (value) found.set(key, value);
  });
  try {
    if (Array.from(found.keys()).length > 0) {
      sessionStorage.setItem(STORAGE_KEY, found.toString());
    } else {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) return new URLSearchParams(saved);
    }
  } catch {
    // sessionStorage indisponível: segue só com a URL atual
  }
  return found;
}

// Guarda as UTMs assim que o site abre, antes de qualquer navegação interna
if (typeof window !== 'undefined') getTrackingParams();

export function goToCheckout(url: string) {
  const target = new URL(url);
  getTrackingParams().forEach((value, key) => {
    if (!target.searchParams.has(key)) target.searchParams.set(key, value);
  });
  window.location.href = target.toString();
}
