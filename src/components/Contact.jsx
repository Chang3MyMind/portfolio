import emailjs from "@emailjs/browser";

import { useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function Contact() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5 });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validate(formData);
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      emailjs
        .send(serviceID, templateID, formData, publicKey)
        .then((response) => {
          console.log("E-MAIL ENVIADO!", response.status, response.text);
          alert("Mensagem enviada com sucesso!");
          //Limpa formulario após envio
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        })
        .catch((err) => {
          console.log("ERRO AO ENVIAR:", err);
          alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
        });
    }
  };

  const validate = (data) => {
    const errors = {};

    if (!data.firstName) {
      errors.firstName = "First name is required";
    }
    if (!data.lastName) {
      errors.lastName = "Last name is required";
    }
    if (!data.email) {
      errors.email = "Email is required";
    }
    if (!data.message) {
      errors.message = "Mensage is required";
    }

    return errors;
  };

  return (
    <>
      <section
        ref={ref}
        id="contact"
        className={`sections-container fade-in-section ${
          isIntersecting ? "is-visible" : ""
        }`}
      >
        <div className="section-content">
          <h2 className="section-title" id="contact-heading">
            Contact
          </h2>
          <div className="flex flex-col p-5 md:col-span-10 md:col-start-1 md:grid">
            <form
              action=""
              method="post"
              role="form"
              aria-labelledby="contact-heading"
              onSubmit={handleSubmit}
            >
              <div className="flex gap-x-3 md:justify-center">
                <div className="flex flex-col md:w-full">
                  <label
                    for="firstName"
                    className="form-text font-normal md:text-lg"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="form-box flex w-full"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm">
                      {errors.firstName}
                    </span>
                  )}
                </div>
                <div className="flex flex-col md:w-full">
                  <label
                    for="lastName"
                    className="form-text font-normal md:text-lg"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="form-box flex w-full"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm">
                      {errors.lastName}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                <label for="email" className="form-text font-normal md:text-lg">
                  E-mail
                </label>
                <input
                  className="form-box flex w-full"
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  for="message"
                  className="form-text font-normal md:text-lg"
                >
                  message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="form-box flex max-h-28 w-full resize-y md:max-h-40 md:min-h-28 xl:min-h-36 xl:max-h-60"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 text-sm">{errors.message}</span>
                )}
              </div>
              <button
                type="submit"
                id="submitForm"
                className="color-text mt-4 gradient-on-bg box-border inline-flex rounded-md px-5 py-1 md:px-10 md:text-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
