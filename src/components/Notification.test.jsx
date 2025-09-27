import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { NotificationContext } from "../context/NotificationContext";

import Notification from "./Notification";

describe("Notification", () => {
  const MockIntersectionObserver = vi.fn();
  MockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });

  window.IntersectionObserver = MockIntersectionObserver;
  it("The error text should appear", () => {
    const mockNotification = {
      visible: true,
      title: "Falha ao enviar o e-mail.",
      message: "Ocorreu um erro ao enviar o email, tente novamente mais tarde.",
      type: "error",
    };

    render(
      <NotificationContext.Provider value={{ notification: mockNotification }}>
        <Notification />
      </NotificationContext.Provider>
    );

    const textElement = screen.getByText(
      /Ocorreu um erro ao enviar o email, tente novamente mais tarde./,
      /Falha ao enviar o e-mail./
    );

    expect(textElement).toBeInTheDocument();
  });
});
