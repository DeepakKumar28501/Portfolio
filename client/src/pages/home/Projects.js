import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";
function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#3135e4c82] w-1/3 sm:flex-row sm:overflow-scroll sm:w-full">
          {projects.map((projects, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-10  ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] py-3 bg-[#297b92d0]"
                    : "text-white"
                }`}
              >
                {projects.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10 ">
          <img
            src={projects[selectedItemIndex].image}
            // alt="Project image"
            className="h-60 w-72"
          />
        </div>

        <div className="flex flex-col gap-5 w-1/3">
          <h1 className="text-secondary text-2xl">
            {projects[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-xl">
            {projects[selectedItemIndex].title}
          </h1>
          <p className="text-white">
            {projects[selectedItemIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
