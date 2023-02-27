import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import signImg from "./assets/sign.svg";
import dotImg from "./assets/navDot.svg";
import lineImg from "./assets/navLine.svg";
import planeImg from "./assets/navPlane.svg";
import cubeImg from "./assets/navCube.svg";

export default function WhiteCanvas() {
  return (
    <div className="white-canvas w-10/12 h-screen bg-white flex justify-center items-center z-20">
        <p>Don't be afraid to the white canvas.</p>
    </div>
  );
}
