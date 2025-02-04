const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Sabbir-Sardar",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-sabbir-sardar/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100011912445585",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sm_sabbir98/",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="abel-regular text-lg headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>
            <button
              type="button"
              onClick={() => {
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=personal.smsabbir@gmail.com&su=Project Inquiry&body=Hi, I would like to discuss a new project.",
                  "_blank"
                );
              }}
              className="abel-regular text-lg text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
             focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm 
             px-5 py-2.5 text-center me-2 mb-2"
            >
              Start project
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="abel-regular text-lg  mb-2 reveal-up">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="abel-regular block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Socials</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="abel-regular block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo reveal-up">
            <img src="/images/SmLogo.png" width={40} height={40} alt="Logo" />
          </a>

          <p className="abel-regular text-lg  text-zinc-500 text-sm reveal-up">
            &copy; 2025 <span className="text-zinc-200">SabbirSardar</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
