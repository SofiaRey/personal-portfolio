import ProfilePicture from "./assets/profile.png";

export default function About() {

  return (
    <section id='about' className="about flex items-center relative">
      <div className="flex items-center md:items-start h-full md:ml-40 md:justify-end justify-center flex-col md:flex-row">
        <div className="mix-blend-luminosity w-4/12 md:h-full flex items-end mb-6 md:mb-0">
          <img className="rounded-full md:rounded-none object-contain bottom-0 md:w-full" src={ProfilePicture} />
        </div>
        <div className="triangle absolute left-0 bottom-0 bg-no-repeat bg-bottom bg-contain w-screen h-full"></div>
        <div className="flex flex-col md:items-start w-full md:w-8/12 px-12 md:px-0">
          <h6 className="text-amarillo font-bold text-xs">
            ESTUDIANTE DE DISEÑO MULTIMEDIA
          </h6>
          <h3 className="text-white text-2xl md:text-4xl font-bold text-thin mb-4 pt-2 pb-4">
            Hola, soy Sofía Rey
          </h3>
          <p className="text-xs md:text-sm md:text-left text-white transition-all z-10 md:w-7/12">
            I'm a web developer junior, formed at ÁNIMA, I am 18 years old. I am
            studying a degree in Multimedia Design, combining my favorite areas:
            programming and design. I have a good english level and nowadays I
            am learning Chinese. In my free time I enjoy programming in some
            personal projects in order to learn more frameworks and languages. I
            also enjoy playing the piano, singing in a choir and practising
            aerial silks.
          </p>
        </div>
      </div>
    </section>
  );
}
