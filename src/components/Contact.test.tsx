import emailjs from "@emailjs/browser";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "./sections/Contact";
import Notification from "./ui/Notification";
import NotificationProvider from "../context/NotificationProvider";

// --- SETUP DE MOCKS  ---

vi.mock("../hooks/useIntersectionObserver", () => ({
  default: () => [null, true],
}));

// Mock do emailjs para evitar chamadas reais à API.
vi.mock("@emailjs/browser", () => ({
  default: {
    send: vi.fn().mockResolvedValue(undefined),
  },
}));

// Função auxiliar para renderizar o componente com o provider de notificação.
const renderContactFlow = () =>
  render(
    <NotificationProvider>
      <Notification />
      <Contact />
    </NotificationProvider>,
  );

// --- INÍCIO DOS TESTES ---

describe("Contact Form", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should display validation errors when submitting with empty fields", async () => {
    renderContactFlow();

    await userEvent.click(screen.getByRole("button", { name: /Enviar/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/O nome precisa ter no mínimo 3 caracteres./),
      ).toBeInTheDocument();
    });
  });

  it("should display a success notification after submitting the form correctly", async () => {
    renderContactFlow();

    await userEvent.type(
      screen.getByRole("textbox", { name: /^Nome$/i }),
      "Usuário de Teste",
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: /Sobrenome/i }),
      "Válido",
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: /E-mail/i }),
      "teste@email.com",
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: /Mensagem/i }),
      "Esta é uma mensagem de teste válida com mais de dez caracteres.",
    );
    await userEvent.click(screen.getByRole("button", { name: /Enviar/i }));

    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalled();

      expect(
        screen.getByText(/E-mail enviado com sucesso./i),
      ).toBeInTheDocument();
    });
  });

  it("should display an error notification when the email fails to send", async () => {
    vi.spyOn(emailjs, "send").mockRejectedValue(new Error("API Error"));

    renderContactFlow();

    await userEvent.type(
      screen.getByRole("textbox", { name: /^Nome$/i }),
      "Usuário de Teste",
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: /Sobrenome/i }),
      "Válido",
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: /E-mail/i }),
      "teste@email.com",
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: /Mensagem/i }),
      "Mensagem de teste.",
    );
    await userEvent.click(screen.getByRole("button", { name: /Enviar/i }));

    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalled();

      expect(
        screen.getByText(/Falha ao enviar o e-mail./i),
      ).toBeInTheDocument();
    });
  });
});
