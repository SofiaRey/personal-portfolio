import { useParams } from "react-router-dom";
import projectsData from "../projectsData";
import NavbarMin from "../NavbarMin";

function Project() {
  const { id } = useParams();

  const project = projectsData.find((proj) => proj.id == id);

  return (
    <section className="w-screen text-white">
      <NavbarMin />
      <div
        style={{ backgroundImage: `url(${project["imgFrontPage"]})` }}
        className="bg-center bg-cover overflow-hidden h-60 md:h-96 w-full bg-fixed bg-no-repeat"
      ></div>
      <div className="mx-20 md:mx-40 mt-4">
        <div className="inline border mr-auto text-base px-2 border-amarillo text-amarillo rounded ">
          {project['category'] == "Graphic_Design"
                    ? "Graphic Design"
                    : project['category'] == "UIUX"
                    ? "UI/UX"
                    : project['category'] == "ThreeD"
                    ? "3D"
                    : project['category']}
        </div>
        <h1 className={`text-4xl font-bold mt-2 ${project['webUrl'] ? 'mb-2': 'mb-8'}` }>{project["title"]}</h1>
        {project['webUrl'] && <a className="text-lg underline block mb-8" href={project['webUrl']}>Visit web</a>}
        <div>
          {project["texts"].map((paragraph) => (
            <p className="mb-4">{paragraph}</p>
          ))}
        </div>
        {project["videoUrl"] && (
          <div className="w-full flex justify-center my-8">
            <iframe
              width="560"
              height="315"
              src={project["videoUrl"]}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        )}
        {project["figmaUrl"] && (
          <div className="w-full flex justify-center my-8">
            <iframe
              height="450"
              width="800"
              src={project["figmaUrl"]}
              allowfullscreen
            />
          </div>
        )}
        {project["bigPicture"] && (
          <div className="w-full flex justify-center my-8">
           <img src={project["bigPicture"]}/>
          </div>
        )}
        {project["galleryImages"] && (
          <div>
            <h3 className="text-xl font-bold my-2">Gallery</h3>
            <div className="flex mb-8 flex-wrap">
              {project["galleryImages"].map((image) => (
                <div className="w-full md:w-4/12 p-2 overflow-hidden h-60 flex justify-center">
                  <img
                    className="h-full w-full rounded object-cover"
                    src={image}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Project;
