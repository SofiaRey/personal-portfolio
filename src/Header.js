import questionMark from "./assets/questionMark.png";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const professions = [
    "UI DESIGNER",
    "PROGRAMMER",
    "VIDEO EDITOR",
    "UX DESIGNER",
    "PHOTOGRAPHER",
    "GRAPHIC DESIGNER",
  ];

  let [mousePos, setMousePos] = useState({});
  let [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);

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
    const intervalId = setInterval(() => {
      setCurrentProfessionIndex(
        (currentProfessionIndex) =>
          (currentProfessionIndex + 1) % professions.length
      );
    }, 1500);

    return () => clearInterval(intervalId);
  }, [professions.length]);

  const currentProfession = professions[currentProfessionIndex];

  return (
    <header id="header" className="h-96 md:h-screen flex items-center relative">
      <div className="flex items-start flex-col ml-24 md:ml-40">
        <h2 className="text-white text-2xl md:text-6xl text-thin mb-4">
          Hi, I'm a
        </h2>
        <AnimatePresence mode="wait">
          {currentProfession && (
            <motion.h1
              key={currentProfession}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-amarillo font-bold text-3xl md:text-8xl transition-all text-left"
            >
              <span>¿{currentProfession}?</span>
            </motion.h1>
          )}
        </AnimatePresence>

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
