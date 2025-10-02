import React, { createContext } from "react";

type NotificationContextType = {
  notification: {
    visible: boolean;
    title: string;
    message: string;
    type: string;
  };

  setNotification: React.Dispatch<
    React.SetStateAction<{
      visible: boolean;
      title: string;
      message: string;
      type: string;
    }>
  >;

  setErrorModal: () => void;
  setSendModal: () => void;
  onClose: () => void;
};

export const NotificationContext = createContext({} as NotificationContextType);
