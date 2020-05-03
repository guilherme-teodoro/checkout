export const range = (start: number, end: number): Array<number> => {
  return [...Array(end - start + 1)].map((_, i) => start + i);
};

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function intersperse(arr: any[], sep: any) {
  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).reduce(
    (xs, x, idx) => {
      const separator = typeof sep === "function" ? sep(idx) : sep;
      return xs.concat([separator, x]);
    },
    [arr[0]]
  );
}
