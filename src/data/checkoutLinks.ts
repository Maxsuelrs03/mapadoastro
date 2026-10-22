export const CHECKOUT_LINKS = {
  essencial: 'https://pay.cakto.com.br/4777ma9_1231768',
  premium: 'https://pay.cakto.com.br/3337euy_1231878',
  // Oferta de R$27,90: exclusiva do pop-up
  condicaoEspecial: 'https://pay.cakto.com.br/fpxdexa',
} as const;

export function goToCheckout(url: string) {
  window.location.href = url;
}
