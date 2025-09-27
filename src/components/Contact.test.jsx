import { vi } from "vitest";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import Contact from "./Contact";
import NotificationProvider from "../context/NotificationProvider.jsx";

describe("Componente Contact", () => {
  const MockIntersectionObserver = vi.fn();
  MockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = MockIntersectionObserver;
  it("should display error messages when submitting the form with empty fields", async () => {
    render(
      <NotificationProvider>
        <Contact />
      </NotificationProvider>
    );
    const submitButton = screen.getByRole("button", { name: /Enviar/i });
    await userEvent.click(submitButton);

    expect(
      await screen.findByText(/O nome precisa ter no mínimo 3 caracteres./i)
    ).toBeInTheDocument();
  });
});
