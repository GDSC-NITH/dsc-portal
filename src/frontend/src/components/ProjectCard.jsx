import { useEffect, useState } from "react";
import PropTypes from "prop-types";
// Remove the import statement for ProjectCard.css
// import "./ProjectCard.css";

ProjectCard.propTypes = {
  id: PropTypes.string.isRequired,
};

export default function ProjectCard({ id }) {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    async function fetchProjectData() {
      try {
        const response = await fetch(`/api/projects/${id}`);
        const data = await response.json();
        setProjectData(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    }

    fetchProjectData();
  }, [id]);

  if (!projectData) {
    return (
      <div className="flex flex-col md:flex-row h-fit self-stretch rounded-lg drop-shadow-md shadow-lg bg-white dark:bg-neutral-800 shadow-slate-300 dark:shadow-neutral-700 overflow-hidden max-w-xs min-w-xs md:max-w-5xl">
        <div className="relative h-52 md:aspect-square aspect-auto ghost-card"></div>
        <div className="flex flex-col gap-2 p-4 w-full">
          <div className="flex flex-row justify-between">
            <span className="text-sm ghost-card rounded w-1/4 h-4"></span>
            <div className="flex flex-col gap-1 w-1/4">
              <div className="w-full h-1 ghost-card rounded-lg"></div>
              <span className="text-xs ghost-card rounded w-1/2 h-3"></span>
            </div>
          </div>
          <h2 className="mt-4 text-lg ghost-card rounded w-3/4 h-5"></h2>
          <span className="text-sm ghost-card rounded w-full h-3"></span>
          <span className="text-sm ghost-card rounded w-full h-3"></span>
          <button className="btn-primary mt-auto ghost-card rounded h-10"></button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row h-fit self-stretch rounded-lg drop-shadow-md shadow-lg bg-white dark:bg-neutral-800 shadow-slate-300 dark:shadow-neutral-700 overflow-hidden max-w-xs min-w-xs md:max-w-5xl">
      <div
        className="relative h-52 md:aspect-square aspect-auto"
        id="project-card-image"
      >
        <div className="-z-10 absolute h-full w-full bg-gradient-to-b from-neutral-800/80 via-gray-600/30 to-gray-800/40"></div>
        <img
          src={projectData.image || "/sample-image.jpg"}
          alt="Project"
          className="object-cover h-full w-full absolute -z-20"
        />
        <div className="h-full w-full flex flex-col px-3 py-4 gap-2 items-start justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-neutral-200">{projectData.part}</span>
            <span className="text-md font-semibold tracking-wider text-white">
              {projectData.name}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-md text-neutral-100">{projectData.subtitle}</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 w-full" id="project-card-details">
        <div className="flex flex-row justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {projectData.version}
          </span>
          <div className="flex flex-col gap-1">
            <progress
              aria-busy="true"
              value={projectData.progress}
              max="100"
              className="w-full h-1 rounded-lg"
            ></progress>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {projectData.progress}%
            </span>
          </div>
        </div>
        <h2 className="text-lg font-semibold dark:text-white">
          {projectData.headline}
        </h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {projectData.description}
        </span>
        <button className="btn-primary mt-auto dark:bg-neutral-900 dark:text-white">
          View Project
        </button>
      </div>
    </div>
  );
}
