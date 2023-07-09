import { useState } from "react";
import Card from "./Card";

const Works = () => {
  const [showDescription, setShowDescription] = useState("");

  const works = [
    {
      id: 0,
      title: "Trivia YSY-A",
      text: "Un quizz donde tenés que responder qué cancion se está reproduciendo",
      technologies: "React React, router-dom, HTML, CSS",
      imgURL: "https://i.imgur.com/VXR09NF.png",
      workURL: "https://trivia-ysya.manuimfeld.com.ar/",
    },
    {
      id: 1,
      title: "Wiki-movie",
      text: "Un buscador de películas",
      technologies: "React, router-dom, axios, sweetalert2, HTML, CSS",
      imgURL: "https://i.imgur.com/ESvSGdW.png",
      workURL: "https://moviehunt.manuimfeld.com.ar/",
    },
    {
      id: 2,
      title: "Portfolio (2022)",
      text: "Mi primer portfolio web",
      technologies: "HTML, CSS",
      imgURL: "https://i.imgur.com/KOKI9CG.png",
      workURL: "https://manuimfeld.com.ar/",
    },
  ];

  const handleTap = (work) => {
    if (showDescription !== work) {
      setShowDescription(work);
    } else {
      setShowDescription("");
    }
  };

  return (
    <>
      <section
        id="works"
        className="text-center bg-[#202833] flex flex-col sm:content-start sm:flex-row sm:flex-wrap lg:justify-around justify-start items-start mx-auto min-h-[calc(100vh_-_60px)] px-[20px] lg:px-[40px]"
      >
        <h2 className="text-color-primary mx-auto w-fit sm:w-full h-fit mb-5 text-2xl pt-10">
          Proyectos
        </h2>
        {works.map((work) => {
          return (
            <Card
              showDescription={showDescription}
              handleTap={handleTap}
              data={work}
              key={work.id}
            />
          );
        })}
        <button className="h-fit mx-auto sm:w-[70%] sm:mx-auto mt-5" disabled>
          <a
            href="https://github.com/manuimfeld"
            target="_blank"
            rel="noreferrer"
            className="grow sm:max-w-[150px] mx-auto text-color-primary lg:mt-0 mb-2 font-bold py-2 px-10 border-2 border-color-primary rounded-[20px]"
          >
            Ver más proyectos
          </a>
        </button>
      </section>
    </>
  );
};
export default Works;
