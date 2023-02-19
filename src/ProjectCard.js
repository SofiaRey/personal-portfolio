import wireframeImg from "./assets/wireframeImg.jpg";

export default function ProjectPreview({ img, title, tag, url, isDark }) {
  return (
    <a className={`w-6/12 md:w-4/12 z-20 p-2 relative ${!isDark && "font-loved"}`}>
      <article
        className={`flex flex-col w-full items-start pb-4 pt-2 px-2 m-2 ${
          isDark
            ? "text-white bg-violeta rounded"
            : "text-black border border-black"
        }`}
      >
        <div className="overflow-hidden h-32 w-full">
          <img
            className={`proj-img saturate-0 ${
              isDark ? "object-cover rounded" : "h-full w-full object-fill"
            }`}
            src={isDark ? img : wireframeImg}
          />
        </div>
        <h4 className="text-lg font-bold">{title}</h4>
        <div
          className={`border mr-auto text-xs px-2 ${
            isDark
              ? "border-amarillo text-amarillo rounded"
              : "border-black text-black"
          }`}
        >
          {tag}
        </div>
      </article>
    </a>
  );
}
