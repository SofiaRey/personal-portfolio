import wireframeImg from "./assets/wireframeImg.jpg";

export default function ProjectPreview({
  id,
  img,
  title,
  tag,
  isDark,
  showMobile,
}) {
  return (
    <a
      href={`/projects/${id}`}
      className={`proj-img-cont w-full md:w-4/12 z-20 p-2 relative ${
        !isDark && "font-loved"
      } ${!showMobile && "hidden md:block"}`}
    >
      <article
        className={`flex flex-col w-full items-start pb-4 pt-2 px-2 m-2 ${
          isDark
            ? "text-white bg-violetaLight rounded"
            : "text-black border border-black"
        }`}
      >
        <div className="overflow-hidden h-32 w-full rounded">
          <img
            className={`proj-img transition saturate-0 ${
              isDark ? "object-cover rounded" : "h-full w-full object-fill"
            }`}
            src={isDark ? img : wireframeImg}
          />
        </div>
        <h4 className="text-xl truncate w-full  font-bold text-left">{title}</h4>
        <div
          className={`border mr-auto text-xs px-2 ${
            isDark
              ? "border-amarillo text-amarillo rounded"
              : "border-black text-black"
          }`}
        >
          {tag == "Graphic_Design"
            ? "Graphic Design"
            : tag == "UIUX"
            ? "UI/UX"
            : tag == "ThreeD"
            ? "3D"
            : tag}
        </div>
      </article>
    </a>
  );
}
