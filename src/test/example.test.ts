// math.test.js
import { describe, expect, it } from 'vitest';

// Sample function to test
function add(a: number, b: number) {
  return a + b;
}

function subtract(a: number, b: number) {
  return a - b;
}

describe('Math operations', () => {
  it('should correctly add two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  it('should correctly subtract two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(3, 5)).toBe(-2);
    expect(subtract(0, 0)).toBe(0);
  });

  it('should handle floating point addition', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
