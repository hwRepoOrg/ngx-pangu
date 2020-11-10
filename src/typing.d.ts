declare global {
  interface Number {
    precision: (decimal: number) => number;
  }
}

export {};
