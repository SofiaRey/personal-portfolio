import ProfilePicture from "./assets/profile.png";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Mouse() {
  let [mousePos, setMousePos] = useState({});

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

  anim.set(".mouse", { xPercent: -50, yPercent: -50 });
  anim.set(".mouse-follower", { xPercent: -50, yPercent: -50 });

  anim.to(".mouse", {
    duration: 0.1,
    x: mousePos.x,
    y: mousePos.y,
  });
  anim.to(".mouse-follower", {
    duration: 0.3,
    x: mousePos.x,
    ease: "ease.out",
    y: mousePos.y,
  });

  return (
    <>
      <div className="mouse-follower fixed w-20 h-20 border border-white z-30 top-0 left-0 rounded-full mix-blend-exclusion"></div>
      <div className="mouse fixed w-4 h-4 bg-white z-30 top-0 left-0 rounded-full mix-blend-exclusion"></div>
    </>
  );
}
