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

const aboutItems = [
  {
    label: "Project done",
    number: 5,
  },
  {
    label: "Years of experience",
    number: 1,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div
          className="bg-zinc-800 p-7 rounded-2xl
              md:p-12 reveal-up"
        >
          <p className="abel-regular text-lg text-zinc-300 mb-4 md:mb-8 ">
            Welcome! I’m MD Sabbir Sardar, a Web Developer with a sharp focus on
            Laravel and React. I don’t just build websites—I craft seamless
            digital experiences that blend performance, aesthetics, and
            innovation. Whether it’s a powerful backend or an interactive
            frontend, I turn ideas into high-performing, user-friendly
            solutions. Let’s create something extraordinary!
          </p>

          <div
            className="flex flex-wrap items-center gap-4
                md:gap-7"
          >
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span
                    className="text-2xl font-semibold
                                    md:text-4xl"
                  >
                    {number}
                  </span>
                  <span
                    className="text-purple-400
                                    font-semibold md:text-3xl"
                  >
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/SmLogo.png"
              alt="Logo"
              width={50}
              height={50}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
