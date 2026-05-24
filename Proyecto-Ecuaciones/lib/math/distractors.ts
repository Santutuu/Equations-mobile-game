export function generateOptions(answer: number): number[] {
  const options = new Set<number>();

  options.add(answer);

  const randomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  while (options.size < 4) {
    const offset = randomInt(-10, 10);

    if (offset !== 0) options.add(answer + offset);
  }

  return Array.from(options).sort(() => Math.random() - 0.5);
}