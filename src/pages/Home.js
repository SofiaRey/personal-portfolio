import Header from "../Header";
import About from "../About";
import Values from "../Values";
import ProjectsSection from "../ProjectsSection";
import Navbar from "../Navbar";

import ProcessLine from "../assets/processLine.svg";

function Home() {
  return (
    <div className="relative App font-rubik overflow-hidden">
      <img
        className="absolute left-0 mix-blend-exclusion z-30"
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
