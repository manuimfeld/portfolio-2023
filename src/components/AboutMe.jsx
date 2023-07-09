import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="flex flex-col md:flex-row md:items-center justify-center text-center px-[20px] flex-wrap w-auto min-h-[calc(100vh_-_60px)] lg:px-[40px]"
    >
      <h2 className="h-fit text-color-primary mx-auto w-full text-2xl pt-10">
        Sobre mí
      </h2>
      <div className="order-2 md:order-1 flex flex-col items-center justify-center pt-10 mx-auto md:mx-0 w-[100%] md:w-[50%] h-[50%] ">
        <img
          src="https://manuimfeld.com.ar/img/51068304.png"
          alt="Ilustracion SVG de una persona programando"
          className="p-2 border-4 border-color-primary rounded-[100%] h-[70%] w-[60%] md:h-[50%] md:w-[40%] md:mr-[20%]"
        />
        <p className="text-text-primary font-bold text-2xl mb-5 mt-2 md:mr-[20%]">
          Manuel Imfeld
        </p>
        <div className="flex items-center justify-center md:mr-auto w-[100vw] md:w-[80%] my-5">
          <a
            href="mailto: manu_jadir@hotmail.com?subject=Propuesta&body"
            className="w-fit mx-5"
          >
            <FaEnvelope className="w-fit mx-auto filterArrow" />
            <span className="text-text-primary">Enviar Mail</span>
          </a>
          <a
            href="https://github.com/manuimfeld"
            target="_blank"
            rel="noreferrer"
            className="w-fit mx-5"
          >
            <FaGithub className="w-fit mx-auto filterArrow" />
            <span className="text-text-primary">Ver Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/manuimfeld/"
            target="_blank"
            rel="noreferrer"
            className="w-fit mx-5"
          >
            <FaLinkedin className="w-fit mx-auto filterArrow" />
            <span className="text-text-primary">Ver Linkedin</span>
          </a>
        </div>
      </div>
      <p className="order-1 md:order-2 md:text-center md:mr-auto text-text-secondary w-[90%] md:w-[40%] mx-auto md:mx-0 text-lg mt-6">
        Hola, soy Manuel Imfeld, tengo 21 años y soy{" "}
        <span className="text-text-primary">Desarrollador Web. </span>
        Actualmente me dedico a crear proyectos propios para enseñar mis
        conocimientos en el desarrollo web desde el lado del cliente{" "}
        <span className="text-color-primary">(Frontend) </span>
        hasta el lado del servidor{" "}
        <span className="text-color-primary">(Backend) </span>
      </p>
    </section>
  );
};
export default AboutMe;
