import emailjs from "@emailjs/browser";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "./Contact";
import Notification from "./Notification";
import NotificationProvider from "../context/NotificationProvider";

// --- SETUP DE MOCKS (A Troca de Elenco) ---

// Mock do hook de visibilidade. Padrão que já estabelecemos.
vi.mock("../hooks/useIntersectionObserver", () => ({
  default: () => [null, true],
}));

// Mock do EmailJS. Ele deve retornar uma Promise.
vi.mock("@emailjs/browser", () => ({
  default: {
    // Para o teste de sucesso, a Promise resolve.
    // Para o teste de erro, faremos a Promise rejeitar.
    send: vi.fn().mockResolvedValue(undefined),
  },
}));

//Para caso mudar a renderização não precisar mudar em todos
const renderContactFlow = () =>
  render(
    <NotificationProvider>
      <Notification />
      <Contact />
    </NotificationProvider>
  );

// --- INÍCIO DOS TESTES ---

describe("Contact Form", () => {
  // Antes de cada teste, vamos garantir que o mock do emailjs esteja limpo.
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should display validation errors when submitting with empty fields", async () => {
    renderContactFlow();

    await userEvent.click(screen.getByRole("button", { name: /Enviar/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/O nome precisa ter no mínimo 3 caracteres./)
      ).toBeInTheDocument();
    });
  });

  it("should display a success notification after submitting the form correctly", async () => {
    renderContactFlow();

    await userEvent.type(
      screen.getByRole("textbox", { name: /^Nome$/i }),
      "Usuário de Teste"
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: /Sobrenome/i }),
      "Válido"
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: /E-mail/i }),
      "teste@email.com"
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: /Mensagem/i }),
      "Esta é uma mensagem de teste válida com mais de dez caracteres."
    );
    await userEvent.click(screen.getByRole("button", { name: /Enviar/i }));

    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalled();

      expect(
        screen.getByText(/E-mail enviado com sucesso./i)
      ).toBeInTheDocument();
    });
  });

  it("should display an error notification when the email fails to send", async () => {
    vi.spyOn(emailjs, "send").mockRejectedValue(new Error("API Error"));

    renderContactFlow();

    await userEvent.type(
      screen.getByRole("textbox", { name: /^Nome$/i }),
      "Usuário de Teste"
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: /Sobrenome/i }),
      "Válido"
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: /E-mail/i }),
      "teste@email.com"
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: /Mensagem/i }),
      "Mensagem de teste."
    );
    await userEvent.click(screen.getByRole("button", { name: /Enviar/i }));

    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalled();

      expect(
        screen.getByText(/Falha ao enviar o e-mail./i)
      ).toBeInTheDocument();
    });
  });
});
