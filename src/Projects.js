import ProjectCard from "./ProjectCard";
import ElectroAficheFront from "./assets/projects/afiches/Afiche Mockup1.png";
import { useEffect, useState } from "react";
import doodle from "./assets/doodle.svg";

import { gsap } from "gsap";

export default function About() {
  let [mousePos, setMousePos] = useState({});
  let [isDark, setIsDark] = useState(true);
  let [isMouseOver, setisMouseOver] = useState(false);

  const projects = [
    {
      img: ElectroAficheFront,
      title: "Afiches",
      tag: "Graphic Design",
      url: "",
      showMobile: true,
    },
    {
      img: ElectroAficheFront,
      title: "Afiches",
      tag: "Graphic Design",
      url: "",
      showMobile: true,
    },
    {
      img: ElectroAficheFront,
      title: "Afiches",
      tag: "Graphic Design",
      url: "",
      showMobile: true,
    },
    {
      img: ElectroAficheFront,
      title: "Afiches",
      tag: "Graphic Design",
      url: "",
      showMobile: false,
    },
    {
      img: ElectroAficheFront,
      title: "Afiches",
      tag: "Graphic Design",
      url: "",
      showMobile: false,
    },
    {
      img: ElectroAficheFront,
      title: "Afiches",
      tag: "Graphic Design",
      date: "December 12, 2022",
      url: "",
      showMobile: false,
    },
  ];

  // ---------------- GSAP ----------------
  const anim = gsap.timeline();

  // Get mouse position
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Mouse text 'Click me!'
  anim.set(".mouse-text", { xPercent: -50, yPercent: 20 });
  anim.to(".mouse-text", {
    duration: 0.1,
    x: mousePos.x,
    y: mousePos.y,
  });

  return (
    <section
      id="projects"
      className={`relative flex md:h-screen items-center pl-24 md:pl-40 overflow-hidden w-full justify-between flex-wrap py-20 transition-all duration-300 ${
        isDark ? "bg-violetaDarker" : "bg-white"
      }`}
      onMouseEnter={() => setisMouseOver(true)}
      onMouseLeave={() => setisMouseOver(false)}
    >
      <div
        className={`mouse-text z-30 top-0 left-0 text-white mix-blend-exclusion ${
          isMouseOver ? "fixed" : "hidden"
        }`}
      >
        Click!
      </div>
      <div className="flex flex-col items-star w-10/12 md:w-4/12">
        <div className={`flex-col  ${isDark ? "flex" : "hidden"}`}>
          <h1 className="text-left text-6xl md:text-8xl font-bold text-white">
            PRO
          </h1>
          <h1 className="text-left text-6xl md:text-8xl font-bold text-amarillo">
            JECTS
          </h1>
        </div>
        <div className={`flex-col  ${isDark ? "hidden" : "flex"}`}>
          <h1 className="pro-text text-left text-6xl md:text-8xl font-bold text-white">
            PRO
          </h1>
          <h1 className="text-left text-6xl md:text-8xl font-bold text-black">
            CESS
          </h1>
        </div>
        <a
          className={`border px-4 py-2 w-32 md:w-40 mt-8 transition z-10 ${
            isDark
              ? "border-amarillo text-amarillo hover:border-white hover:bg-white hover:text-black"
              : "border-black text-black hover:border-black hover:bg-black hover:text-white"
          }`}
        >
          Explore
        </a>
      </div>
      <div className="relative flex w-10/12 md:w-8/12 flex-wrap pr-10">
        {projects.map((proj, i) => (
          <ProjectCard
            key={proj.title + i}
            img={proj.img}
            title={proj.title}
            tag={proj.tag}
            date={proj.date}
            isDark={isDark}
            showMobile={proj.showMobile}
          />
        ))}
        <div
          className={`${
            isDark ? "hidden" : "hidden md:absolute -bottom-20 -left-32 w-40"
          }`}
        >
          <img src={doodle} />
        </div>
      </div>
      <div
        className="absolute w-full h-full top-0 cursor-pointer"
        onClick={() => setIsDark(!isDark)}
      ></div>
    </section>
  );
}
