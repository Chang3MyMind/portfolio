import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import SkillBar from "./SkillBar";

describe("SkillBar", () => {
  const MockIntersectionObserver = vi.fn();
  MockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });

  window.IntersectionObserver = MockIntersectionObserver;

  it("should display the skill bar when passing values", () => {
    const mockCSkill = [
      { name: "Test1", value: 67 },
      { name: "Test2", value: 41 },
    ];

    const mockPSkill = [
      { name: "Test3", value: 67 },
      { name: "Test4", value: 41 },
    ];

    render(
      mockCSkill.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} value={skill.value} />
      )),

      mockPSkill.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} value={skill.value} />
      ))
    );

    const textElement = screen.getByText(/Test1/, /Test2/, /Test3/, /Test4/);

    expect(textElement).toBeInTheDocument();
  });
});
