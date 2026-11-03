/** Deterministic PRNG so each demo always shows the same fake data. */
export function createSeed(n: number) {
  let state = (n * 2654435761) >>> 0
  return () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0
    return state / 0x100000000
  }
}

export function pick<T>(rand: () => number, items: T[]): T {
  return items[Math.floor(rand() * items.length)]!
}

export function between(rand: () => number, min: number, max: number) {
  return min + rand() * (max - min)
}

export function intBetween(rand: () => number, min: number, max: number) {
  return Math.floor(between(rand, min, max + 1))
}
