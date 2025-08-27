function Contact() {
  return (
    <>
      <section id="contact" className="sections-container">
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
                  />
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
                  />
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
                />
              </div>
              <div className="flex flex-col">
                <label
                  for="menssage"
                  className="form-text font-normal md:text-lg"
                >
                  Menssage
                </label>
                <textarea
                  name="menssage"
                  id="menssage"
                  className="form-box flex max-h-28 w-full resize-y md:max-h-40 md:min-h-28 xl:min-h-36 xl:max-h-60"
                ></textarea>
              </div>
              <button
                type="submit"
                id="submitForm"
                className="color-text gradient-on-bg box-border inline-flex rounded-md px-5 py-1 md:px-10 md:text-lg"
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
