export const compareToArrays = (a: unknown[], b: unknown[]) =>
    JSON.stringify(a) === JSON.stringify(b);