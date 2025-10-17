import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Skills from "./Skills";

vi.mock("../hooks/useIntersectionObserver", () => ({
  default: () => [null, true],
}));

describe("Skills", () => {
  it("should display multiple skill bars when passing values", () => {
    render(<Skills />);

    expect(screen.getAllByRole("progressbar")).toHaveLength(12);
  });
});
