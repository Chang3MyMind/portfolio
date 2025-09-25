import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Notification({ notification, onClose }) {
  return (
    <div className=" z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-background dark:bg-background-dark p-6  rounded-lg shadow-2x relative">
        {notification.type === "error" ? (
          <FontAwesomeIcon
            icon={faXmark}
            className="absolute cursor-pointer top-2 right-2"
            onClick={onClose}
          />
        ) : null}
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
