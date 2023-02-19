import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import signImg from "./assets/sign.svg";
import dotImg from "./assets/navDot.svg";
import lineImg from "./assets/navLine.svg";
import planeImg from "./assets/navPlane.svg";
import cubeImg from "./assets/navCube.svg";

const navigation = [
  { name: "Home", img: dotImg, href: "#", current: true },
  { name: "About me", img: lineImg, href: "#about", current: false },
  { name: "Projects", img: planeImg, href: "#projects", current: false },
  { name: "Contact", img: cubeImg, href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="fixed w-full py-2 border-b mix-blend-exclusion z-50"
    >
      {({ open }) => (
        <>
          <div className="px-2 sm:px-6 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex  sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="ml-24 flex flex-1 items-center sm:items-stretch justify-end">
                <div className="flex flex-shrink-0 absolute top-4 left-0 ml-24 nav-item transition-all md:w-20 w-16">
                  <img src={signImg} className="w-full" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex ">
                    {navigation.map((item) => (
                      <div
                        className={`nav-item w-24 h-20 relative flex md:mr-8 lg:mr-12 justify-center items-center transition-all hover:scale-110 duration-150 ease-in-out`}
                      >
                        <a href={item.href}>
                          <img className="w-8/12 mx-auto" src={item.img} />
                        </a>
                        <p className={`text-${item.name} absolute bottom-0`}>
                          {item.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3 flex items-end flex-col">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block nav-item h-10 relative "
                  >
                    <div className="flex items-center w-full">
                      <p className="text-white pr-4">{item.name}</p>
                      <img className="w-6" src={item.img} />
                    </div>
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
