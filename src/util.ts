export const range = (start: number, end: number): Array<number> => {
  return [...Array(end - start + 1)].map((_, i) => start + i);
};

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
