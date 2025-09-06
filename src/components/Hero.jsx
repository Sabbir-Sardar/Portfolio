import { motion } from "framer-motion";

const Hero = () => {
  const text = "MD Sabbir Sardar";
  return (
    <section id="home" className="pt-28 lg:pt-36 ">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10 ">
        <div>
          <h2 className="headline-2 max-w-[8ch] bad-script-regular  sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-0 text-sm">
            Hi, I am
          </h2>
          <h2 className="headline-1 max-w-[15ch] cormorant-garamond-light sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-2">
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                {char}
              </motion.span>
            ))}
          </h2>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-1.png"
                width={40}
                height={40}
                alt="Sachin kumar portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 abel-regular text-zinc-400 text-lg tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400 animate-blink"></span>
              A passionate Web Developer
            </div>
          </div>
          <p className=" max-w-[15ch] abel-regular text-lg  sm:max-w-[20ch] lg:max-w-[550ch] mt-10 mb-8 lg:mb-10">
            You imagine, I develop—let’s bring it to life.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1UM9jRjCtjtIho9-BXPSru0hrq42KZDOD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Download CV
              </span>
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
        <motion.figure
  initial={{ filter: "blur(10px)", opacity: 0 }}
  animate={{ filter: "blur(0px)", opacity: 1 }}
  transition={{ duration: 1 }}
  className="your-image-class"
>
  <img src="/images/hero-banner.png" alt="MD Sabbir Sardar" className="w-full max-w-[480px] ml-auto bg-gradient-to-t
                 from-sky-400 via-25% via-sky-400/40 to-65% rounded-[17px] overflow-hidden"
  />
</motion.figure>



        </div>
      </div>
    </section>
  );
};

export default Hero;
