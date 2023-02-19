import { EnvelopeIcon } from "@heroicons/react/24/outline";
import LinkedinIcon from "./assets/linkedinIcon.svg";
import GithubIcon from "./assets/githubIcon.svg";
import favicon from "./assets/favicon.svg";
import faviconOutlined from "./assets/faviconOutlined.svg";

export default function Footer() {
  return (
    <footer
      id="contact"
      className={`py-4 bg-white flex px-20 md:px-40 justify-between items-center flex-col md:flex-row z-50`}
    >
      <a className="md:hidden w-12 mb-4" href="#">
        <img src={favicon} />
      </a>
      <h3 className="font-loved text-xl">More to come...</h3>
      <a className="hidden md:block" href="#">
        <img className="w-14" src={faviconOutlined} />
      </a>
      <div className="flex items-center mt-4 md:mt-0">
        <a
          href="mailto:sofia.rey.se@gmail.com?subject=Let's work together"
          className="mr-4 md:mr-2"
        >
          <EnvelopeIcon className="h-6 w-6 text-black" />
        </a>
        <a href="https://github.com/SofiaRey" className="mr-4 md:mr-2">
          <img className="h-6 w-6 text-black" src={GithubIcon} />
        </a>
        <a href="https://www.linkedin.com/in/sof%C3%ADa-rey-se/" className="">
          <img className="h-5 w-5 text-black" src={LinkedinIcon} />
        </a>
      </div>
    </footer>
  );
}
