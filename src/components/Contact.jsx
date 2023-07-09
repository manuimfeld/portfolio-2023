import Form from "./Form";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mt-5 bg-[#202833] mx-auto min-h-[calc(100vh_-_60px)] lg:px-[40px] w-[100%] p-[20px]"
    >
      <h2 className="text-color-primary mx-auto w-fit text-2xl mb-5">
        Contacto
      </h2>
      <p className="text-text-secondary w-fit mx-auto">
        ¿Te interesó algo de lo que viste o tenés alguna idea?
      </p>
      <p className="text-text-primary font-bold w-fit mx-auto mb-5">
        ¡Envíame un mensaje!
      </p>
      <Form />
    </section>
  );
};
export default Contact;
