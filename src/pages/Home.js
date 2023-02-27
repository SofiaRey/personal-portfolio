import Header from "../Header";
import About from "../About";
import Values from "../Values";
import ProjectsSection from "../ProjectsSection";
import Navbar from "../Navbar";

import WhiteCanvas from "../WhiteCanvas";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProcessLine from "../assets/processLine.svg";

// ---------------- GSAP ----------------
const anim = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

anim.from(".white-canvas", {
  yPercent: 100,
});

ScrollTrigger.create({
  animation: anim,
  trigger: ".white-canvas",
  // start: "top bottom",
  scrub: true,
  // pin: '.cont',
  markers: true,
  id: 'id',
  // pinSpacing: false
});

function Home() {
  return (
    <div className="relative App font-rubik overflow-x-hidden">
      <img
        className="fixed left-0 mix-blend-exclusion z-30"
        src={ProcessLine}
      />
      <Navbar />
      <Header />
      <About />
      <Values />
      <ProjectsSection />
    </div>
  );
}

export default Home;
