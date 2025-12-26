import { sum } from "@/lib";
import { describe, expect, it } from "vitest";
// import { render, screen } from '@testing-library/react'; // For component testing

describe("example test", () => {
  it("should add 1 + 1 correctly", () => {
    expect(1 + 1).toBe(2);
  });
});

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
