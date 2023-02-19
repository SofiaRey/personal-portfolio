import questionMark from "./assets/questionMark.png";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Header() {
  const professions = [
    "UI DESIGNER",
    "PROGRAMADORA",
    "EDITORA DE VIDEOS",
    "FOTÓGRAFA",
  ];

  let [mousePos, setMousePos] = useState({});
  let [index, setIndex] = useState(0);

  // ---------------- GSAP ----------------
  const anim = gsap.timeline();

  // get mouse position
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  anim.to("#anim-question", {
    duration: 1,
    x: -mousePos.x / 50,
    ease: "ease.out",
    y: -mousePos.y / 50,
  });

  // ---------------- Change word ----------------
  useEffect(() => {
    const interval = setInterval(() => {
      // TODO: delete
      // anim.fromTo("#anim-words", { opacity: 0 }, { duration: 0.3, opacity: 1 });
      setIndex(index == 3 ? 0 : index++);
    }, 800);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <header className="md:h-screen flex items-center">
      <div className="flex items-start flex-col ml-24 md:ml-40">
        <h2 className="text-white text-2xl md:text-6xl text-thin mb-4">Hola, soy</h2>
        <h1 id="anim-words" className="text-amarillo font-bold text-3xl md:text-8xl transition-all text-left">
          ¿{professions[index]}?
        </h1>
        <div
          id="anim-question"
          className="hidden md:block absolute w-5/12 right-0 bottom-20"
        >
          <img className="w-full" src={questionMark} />
        </div>
      </div>
    </header>
  );
}
