import React, { createContext } from "react";

export type NotificationContextType = {
  notification: {
    visible: boolean;
    title: string;
    message: string;
    type: string;
    modalLabel: string;
  };

  setNotification: React.Dispatch<
    React.SetStateAction<{
      visible: boolean;
      title: string;
      message: string;
      type: string;
      modalLabel: string;
    }>
  >;

  setErrorModal: () => void;
  setSendModal: () => void;
  onClose: () => void;
};

export const NotificationContext = createContext({} as NotificationContextType);
