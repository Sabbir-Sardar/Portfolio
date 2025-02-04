// Copyright 2025 PREM
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Components
 */

import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.png",
    title: "Rent Car Web Application",
    tags: ["Laravel", "MySql"],
    projectLink: "https://github.com/Sabbir-Sardar/Rent-Car.git",
  },
  {
    imgSrc: "/images/project-2.png",
    title: "Inventory Management System",
    tags: ["Laravel", "MySql"],
    projectLink:
      "https://github.com/Sabbir-Sardar/Inventory-Management-System.git",
  },
  {
    imgSrc: "/images/project-3.png",
    title: "Portfolio Website",
    tags: ["React", "Vite"],
    projectLink: "https://github.com/Sabbir-Sardar/Portfolio.git",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="abel-regular text-lg headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="abel-regular text-lg grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
