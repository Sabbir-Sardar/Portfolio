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
import SkillCard from "./SkillCard";
const skillItem = [
  {
    imgSrc: "/images/laravel-2.svg",
    label: "Laravel",
    desc: "PHP framework for backend development",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "JavaScript library for building UIs",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/mysql.svg",
    label: "MySQL",
    desc: "Relational database for data management",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/vite.svg",
    label: "Vite",
    desc: "Build tools for optimized bundling",
  },

  {
    imgSrc: "/images/redux.svg",
    label: "Redux",
    desc: "State management for React apps",
  },
  {
    imgSrc: "/images/postman.svg",
    label: "Postman",
    desc: "API testing tool",
  },
  {
    imgSrc: "/images/github.svg",
    label: "Git & GitHub",
    desc: "Version control and collaboration",
  },
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
];
const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="abel-regular text-lg headline-2 reveal-up">
          Essential Tools I use
        </h2>

        <p className="abel-regular text-lg text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="abel-regular text-lg grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
