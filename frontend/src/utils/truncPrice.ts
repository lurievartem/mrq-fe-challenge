export const getTruncPrice = (price: number): string => {
  const formatter = Intl.NumberFormat('en', { style: 'currency', notation: 'compact', currency: 'USD' });

  return price ? formatter.format(price) : '$0';
}
