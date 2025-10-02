import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SkillBar from "./SkillBar";

describe("SkillBar", () => {
  it("should display multiple skill bars when passing values", () => {
    const mockSkills = [
      { name: "Test1", value: 67 },
      { name: "Test2", value: 41 },
      { name: "Test3", value: 80 },
      { name: "Test4", value: 95 },
    ];

    render(
      <ul>
        {mockSkills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} value={skill.value} />
        ))}
      </ul>
    );

    expect(screen.getByText("Test1")).toBeInTheDocument();
    expect(screen.getByText("Test2")).toBeInTheDocument();
    expect(screen.getByText("Test3")).toBeInTheDocument();
    expect(screen.getByText("Test4")).toBeInTheDocument();
  });
});
