import React, { useState, useEffect } from "react";
import { NotificationContext } from "./NotificationContext.js";

type NotificationProviderProps = {
  children: React.ReactNode;
};

export default function NotificationProvider({
  children,
}: NotificationProviderProps) {
  const [notification, setNotification] = useState({
    visible: false,
    title: "",
    message: "",
    type: "",
    modalLabel: "",
  });

  function setErrorModal() {
    setNotification({
      visible: true,
      title: "Falha ao enviar o e-mail.",
      message: "Ocorreu um erro ao enviar o email, tente novamente mais tarde.",
      type: "error",
      modalLabel: "Modal de erro ao enviar e-mail",
    });
  }

  function setSendModal() {
    setNotification({
      visible: true,
      title: "E-mail enviado com sucesso.",
      message:
        "E-mail enviado, obrigado por entrar em contato, em breve responderemos.",
      type: "send",
      modalLabel: "Modal de sucesso ao enviar e-mail",
    });
  }

  function onClose() {
    setNotification({
      visible: false,
      title: "",
      message: "",
      type: "",
      modalLabel: "",
    });
  }

  useEffect(() => {
    if (notification.visible && notification.type === "send") {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification]);

  return (
    <NotificationContext.Provider
      value={{
        notification,
        setNotification,
        setErrorModal,
        setSendModal,
        onClose,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
