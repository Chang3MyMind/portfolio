import React, { ReactElement } from "react";
import { render, RenderOptions, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import {
  NotificationContext,
  NotificationContextType,
} from "../context/NotificationContext";

import Notification from "./ui/Notification";
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
  >,
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <AllTheProviders value={providerProps}>{children}</AllTheProviders>
  );

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

// Inicio do teste

// Teste para verificar se a notificação de erro é exibida corretamente
describe("Notification", () => {
  it("The error text should appear", () => {
    const mockNotification = {
      visible: true,
      title: "Falha ao enviar o e-mail.",
      message: "Ocorreu um erro ao enviar o email, tente novamente mais tarde.",
      type: "error",
      modalLabel: "Modal de erro ao enviar e-mail",
    };

    customRender(<Notification />, {
      providerProps: {
        notification: mockNotification,
      },
    });

    const textElement = screen.getByText(
      /Ocorreu um erro ao enviar o email, tente novamente mais tarde./,
    );

    expect(textElement).toBeInTheDocument();
  });

  // Teste para a notificação de sucesso
  it(" Testing the successful notification when sending the email.", () => {
    const mockNotification = {
      visible: true,
      title: "E-mail enviado com sucesso.",
      message:
        "E-mail enviado, obrigado por entrar em contato, em breve responderemos.",
      type: "send",
      modalLabel: "Modal de sucesso ao enviar e-mail",
    };

    customRender(<Notification />, {
      providerProps: {
        notification: mockNotification,
      },
    });

    const textElement = screen.getByText(
      /E-mail enviado, obrigado por entrar em contato, em breve responderemos./,
    );

    expect(textElement).toBeInTheDocument();
  });

  // Teste para o botão de fechar a notificação
  it("Testing the close button with the escape key", async () => {
    const mockNotification = {
      visible: true,
      type: "error",
      title: "Título do Erro",
      message: "Mensagem do Erro",
      modalLabel: "Modal de erro ao enviar e-mail",
    };
    const mockOnClose = vi.fn();

    customRender(<Notification />, {
      providerProps: {
        notification: mockNotification,
        onClose: mockOnClose,
      },
    });

    await userEvent.keyboard("{Escape}");

    expect(mockOnClose).toHaveBeenCalled();
  });
});
