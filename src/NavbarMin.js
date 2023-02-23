import { Disclosure, Menu, Transition } from "@headlessui/react";
import signImg from "./assets/sign.svg";

export default function NavbarMin() {
  return (
    <Disclosure
      as="nav"
      className="fixed w-full py-2 border-b mix-blend-exclusion z-50"
    >
      {({ open }) => (
        <>
          <div className="px-2 sm:px-6 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="ml-24 flex flex-1 items-center sm:items-stretch justify-end">
                <a
                  href="/"
                  className="flex flex-shrink-0 absolute top-4 left-0 ml-24 nav-item transition-all md:w-20 w-16"
                >
                  <img src={signImg} className="w-full" />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
