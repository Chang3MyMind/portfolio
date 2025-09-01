// Importa as ferramentas que vamos usar
import "@testing-library/jest-dom";
import { vi } from "vitest";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import Contact from "./Contact";

describe("Componente Contact", () => {
  const MockIntersectionObserver = vi.fn();
  MockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = MockIntersectionObserver;
  it("deve exibir mensagens de erro ao submeter o formulário com campos vazios", async () => {
    render(<Contact />);
    const submitButton = screen.getByRole("button", { name: /send/i });
    await userEvent.click(submitButton);

    expect(
      await screen.findByText(/first name is required/i)
    ).toBeInTheDocument();
  });
});
