import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import Contact from "./Contact";
import { NotificationContext } from "../context/NotificationContext.jsx";

const MockIntersectionObserver = vi.fn();
MockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = MockIntersectionObserver;

vi.mock("@emailjs/browser", () => ({
  default: {
    send: vi.fn().mockResolvedValue({ status: 200, text: "OK" }),
  },
}));

describe("Componente Contact", () => {
  const mockSetSendModal = vi.fn();
  const mockSetErrorModal = vi.fn();

  const renderContactComponent = () => {
    render(
      <NotificationContext.Provider
        value={{
          setSendModal: mockSetSendModal,
          setErrorModal: mockSetErrorModal,
        }}
      >
        <Contact />
      </NotificationContext.Provider>
    );
  };

  it("should display error messages when submitting with empty fields", async () => {
    renderContactComponent();
    const submitButton = screen.getByRole("button", { name: /Enviar/i });

    await userEvent.click(submitButton);

    expect(
      await screen.findByText(/O nome precisa ter no mínimo 3 caracteres./i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(
        /O Sobrenome precisa ter no mínimo 3 caracteres./i
      )
    ).toBeInTheDocument();
  });

  it("must call the success function when submitting a valid form", async () => {
    renderContactComponent();

    const firstNameInput = screen.getByRole("textbox", { name: /^Nome$/i });
    const lastNameInput = screen.getByRole("textbox", { name: /^Sobrenome$/i });
    const emailInput = screen.getByRole("textbox", { name: /E-mail/i });
    const messageTextarea = screen.getByRole("textbox", { name: /Mensagem/i });
    const submitButton = screen.getByRole("button", { name: /Enviar/i });

    await userEvent.type(firstNameInput, "Usuário de Teste");
    await userEvent.type(lastNameInput, "Válido");
    await userEvent.type(emailInput, "teste@email.com");
    await userEvent.type(
      messageTextarea,
      "Esta é uma mensagem de teste válida com mais de dez caracteres."
    );
    await userEvent.click(submitButton);

    expect(mockSetSendModal).toHaveBeenCalled();
    expect(mockSetErrorModal).not.toHaveBeenCalled();
  });
});
