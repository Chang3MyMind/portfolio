import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { NotificationContext } from "../context/NotificationContext.js";

export default function Notification() {
  const { notification, onClose } = useContext(NotificationContext);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className=" z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby={notification.modalLabel}
    >
      <div className="bg-background dark:bg-background-dark p-6  rounded-lg shadow-2xl relative">
        <button
          aria-label="Fechar"
          onClick={onClose}
          className="absolute cursor-pointer top-2 right-2 text-text-color dark:text-text-color-dark"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <h2 className="text-center mb-5 text-text-color dark:text-text-color-dark font-bold text-base md:text-lg ">
          {notification.title}
        </h2>
        <p className="text-justify text-text-color dark:text-text-color-dark font-medium text-sm md:text-base">
          {notification.message}
        </p>
      </div>
    </div>
  );
}
