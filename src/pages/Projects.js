import { useState } from "react";
import { Tab } from "@headlessui/react";
import projectsData from "../projectsData";
import ProjectCard from "../ProjectCard";
import NavbarMin from "../NavbarMin";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Projects() {
  let [categories] = useState({
    All: projectsData,
    Graphic_Design: projectsData.filter(
      (proj) => proj.category == "Graphic Design"
    ),
    Audiovisual: projectsData.filter((proj) => proj.category == "Audiovisual"),
    UIUX: projectsData.filter((proj) => proj.category == "UIUX"),
    Programming: projectsData.filter((proj) => proj.category == "Programming"),
    ThreeD: projectsData.filter((proj) => proj.category == "ThreeD"),
  });

  return (
    <>
      <NavbarMin />

      <section className="flex justify-center pt-24">
        <div className="w-10/12 px-2 py-16 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-sm leading-5 focus:outline-none",
                      selected
                        ? "font-bold text-base text-amarillo border-b-2 border-amarillo"
                        : "text-white"
                    )
                  }
                >
                  {category == "Graphic_Design"
                    ? "Graphic Design"
                    : category == "UIUX"
                    ? "UI/UX"
                    : category == "ThreeD"
                    ? "3D"
                    : category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2 min-h-screen">
              {Object.values(categories).map((projs, idx) => (
                <Tab.Panel key={idx}>
                  <div className="w-10/12 flex flex-wrap mx-auto">
                    {projs.map((proj) => (
                      <ProjectCard
                        key={proj["id"]}
                        id={proj["id"]}
                        img={proj["imgPreviewUrl"]}
                        title={proj["title"]}
                        tag={proj["category"]}
                        isDark={true}
                        showMobile={proj["showMobile"]}
                      />
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </>
  );
}
