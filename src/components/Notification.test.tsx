import React, { ReactElement } from "react";
import { render, RenderOptions, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import {
  NotificationContext,
  NotificationContextType,
} from "../context/NotificationContext";

import Notification from "./Notification";
import userEvent from "@testing-library/user-event";

const AllTheProviders = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: Partial<NotificationContextType>;
}) => {
  return (
    <NotificationContext.Provider value={value as NotificationContextType}>
      {children}
    </NotificationContext.Provider>
  );
};

const customRender = (
  ui: ReactElement,
  {
    providerProps,
    ...renderOptions
  }: { providerProps: Partial<NotificationContextType> } & Omit<
    RenderOptions,
    "wrapper"
  >
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <AllTheProviders value={providerProps}>{children}</AllTheProviders>
  );

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

// Inicio do teste
describe("Notification", () => {
  it("The error text should appear", () => {
    const mockNotification = {
      visible: true,
      title: "Falha ao enviar o e-mail.",
      message: "Ocorreu um erro ao enviar o email, tente novamente mais tarde.",
      type: "error",
    };

    customRender(<Notification />, {
      providerProps: {
        notification: mockNotification,
      },
    });

    const textElement = screen.getByText(
      /Ocorreu um erro ao enviar o email, tente novamente mais tarde./
    );

    expect(textElement).toBeInTheDocument();
  });

  it("should render a close button when type is 'error'", async () => {
    const mockNotification = {
      visible: true,
      type: "error",
      title: "Título do Erro",
      message: "Mensagem do Erro",
    };
    const mockOnClose = vi.fn();

    customRender(<Notification />, {
      providerProps: {
        notification: mockNotification,
        onClose: mockOnClose,
      },
    });

    const closeButton = screen.getByRole("button", { name: /fechar/i });
    await userEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalled();
  });

  it(" Should not render a close button when type is 'send'", () => {
    const mockNotification = {
      visible: true,
      type: "send",
      title: "Título de Sucesso",
      message: "Mensagem de Sucesso",
    };

    customRender(<Notification />, {
      providerProps: {
        notification: mockNotification,
      },
    });

    const closeButton = screen.queryByRole("button", { name: /Fechar/i });

    expect(closeButton).not.toBeInTheDocument();
  });
});
