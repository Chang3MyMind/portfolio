import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactFormSchema } from "../../schemas/contactFormSchema";
import { NotificationContext } from "../../context/NotificationContext.js";

type Data = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { setSendModal, setErrorModal } = useContext(NotificationContext);

  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  function sendEmail(data: Data) {
    setIsSubmitting(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(serviceID, templateID, data, publicKey)
      .then(() => {
        setSendModal();
        reset();
      })
      .catch(() => {
        setErrorModal();
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <>
      <section
        ref={ref}
        id="contact"
        className={`sections-container fade-in-section scroll-mt-24 ${
          isIntersecting ? "is-visible" : ""
        }`}
      >
        <div className="section-content">
          <h2 className="section-title" id="contact-heading">
            Contato
          </h2>
          <div className="flex flex-col p-5 md:col-span-10 md:col-start-1 md:grid">
            <form
              action=""
              method="post"
              role="form"
              aria-labelledby="contact-heading"
              onSubmit={handleSubmit(sendEmail)}
            >
              <div className="flex gap-x-3 md:justify-center">
                <div className="flex flex-col md:w-full">
                  <label
                    htmlFor="firstName"
                    className="form-text font-normal md:text-lg"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="form-box flex w-full"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col md:w-full">
                  <label
                    htmlFor="lastName"
                    className="form-text font-normal md:text-lg"
                  >
                    Sobrenome
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="form-box flex w-full"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="form-text font-normal md:text-lg"
                >
                  E-mail
                </label>
                <input
                  className="form-box flex w-full"
                  type="email"
                  id="email"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="form-text font-normal md:text-lg"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  className="form-box flex max-h-28 w-full resize-y md:max-h-40 md:min-h-28 xl:min-h-36 xl:max-h-60"
                  {...register("message")}
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                id="submitForm"
                className="color-text mt-4 gradient-on-bg box-border inline-flex items-center justify-center rounded-md px-5 py-1 md:px-10 md:text-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:px-2 disabled:md:px-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
                    Enviando...
                  </>
                ) : (
                  "Enviar"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
