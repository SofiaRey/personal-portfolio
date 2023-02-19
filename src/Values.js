import AdaptabilityGif from "./assets/adaptability.gif";
import CuriosityGif from "./assets/curiosity.gif";
import ConsciousGif from "./assets/conscious.gif";

export default function Values() {
  return (
    <section className="values flex bg-violetaDarker w-screen justify-center md:justify-around flex-wrap pt-16 md:pt-0">
      <article className="h-72 md:h-full w-7/12 md:w-2/12 flex flex-col items-center text-white">
        <div className="flex overflow-hidden h-2/6 items-center">
          <img className="object-contain" src={AdaptabilityGif} />
        </div>
        <h5 className="text-2xl font-bold pb-4">Adaptabilidad</h5>
        <p>
          I'm a web developer junior, formed at ÁNIMA, I am 18 years old. I am
          studying a degree in Multimedia Design.
        </p>
      </article>
      <article className="h-72 md:h-full w-7/12 md:w-2/12 flex flex-col items-center text-white">
        <div className="flex  h-2/6 items-center">
          <img className="object-contain w-6/12 h-3/6" src={CuriosityGif} />
          <img className="object-contain w-6/12 h-3/6" src={CuriosityGif} />
        </div>
        <h5 className="text-2xl font-bold pb-4">Curiosidad</h5>
        <p>
          I'm a web developer junior, formed at ÁNIMA, I am 18 years old. I am
          studying a degree in Multimedia Design.
        </p>
      </article>
      <article className="h-72 md:h-full w-7/12 md:w-2/12 flex flex-col items-center text-white">
        <div className="h-2/6 flex items-center">
          <img className="h-4/6" src={ConsciousGif} />
        </div>
        <h5 className="text-2xl font-bold pb-4">Conscinecia</h5>
        <p>
          I'm a web developer junior, formed at ÁNIMA, I am 18 years old. I am
          studying a degree in Multimedia Design.
        </p>
      </article>
    </section>
  );
}
