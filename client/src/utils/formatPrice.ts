export function formatPrice(price: number) {
  return '$' + price.toLocaleString('de-DE', { minimumFractionDigits: 0 });
}
