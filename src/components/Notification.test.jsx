import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { NotificationContext } from "../context/NotificationContext";

import Notification from "./Notification";
import userEvent from "@testing-library/user-event";

describe("Notification", () => {
  const MockIntersectionObserver = vi.fn();
  MockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });

  const renderNotificationComponent = (value) => {
    return (
      <NotificationContext.Provider value={value}>
        <Notification />
      </NotificationContext.Provider>
    );
  };

  window.IntersectionObserver = MockIntersectionObserver;
  it("The error text should appear", () => {
    const mockNotification = {
      visible: true,
      title: "Falha ao enviar o e-mail.",
      message: "Ocorreu um erro ao enviar o email, tente novamente mais tarde.",
      type: "error",
    };

    render(renderNotificationComponent({ notification: mockNotification }));

    const textElement = screen.getByText(
      /Ocorreu um erro ao enviar o email, tente novamente mais tarde./,
      /Falha ao enviar o e-mail./
    );

    expect(textElement).toBeInTheDocument();
  });

  it("should render a close button when type is 'error'", async () => {
    const mockNotification = {
      type: "error",
      title: "Título do Erro",
      message: "Mensagem do Erro",
    };
    const mockOnClose = vi.fn();

    render(
      renderNotificationComponent({
        notification: mockNotification,
        onClose: mockOnClose,
      })
    );

    const closeButton = screen.getByRole("button", { name: /fechar/i });
    await userEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalled();
  });

  it(" Should not render a close button when type is 'send'", () => {
    const mockNotification = {
      type: "send",
      title: "Título de Sucesso",
      message: "Mensagem de Sucesso",
    };

    render(renderNotificationComponent({ notification: mockNotification }));

    const closeButton = screen.queryByRole("button", { name: /Fechar/i });

    expect(closeButton).not.toBeInTheDocument();
  });
});
