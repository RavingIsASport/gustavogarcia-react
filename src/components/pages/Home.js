import picture from "../../assets/gusGarcia.jpg";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiHandlebarsdotjs,
  SiAmazonaws,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { LiaNode } from "react-icons/lia";
import { FaLaptopCode } from "react-icons/fa";

// Example projects array (add your real projects)
const projects = [
  {
    name: "My Portfolio Site",
    description: "Personal website showcasing my work and skills.",
    tech: "React, Tailwind, Netlify",
    live: "https://yourportfolio.com",
    github: "https://github.com/RavingIsASport/portfolio",
    image: "/images/portfolio.png",
  },
  {
    name: "E-commerce Demo",
    description: "A full-stack demo e-commerce web app.",
    tech: "React, Express, MongoDB",
    live: "https://myecommerce.com",
    github: "https://github.com/RavingIsASport/ecommerce-demo",
    image: "/images/ecommerce.png",
  },
];

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black via-gray-900 to-red-950 py-20 text-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">
          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-NovaSquare text-5xl md:text-7xl text-red-500 mb-3 leading-tight drop-shadow">
              Gustavo
              <br />
              Garcia
            </h1>
            <h2 className="font-Jost text-2xl md:text-3xl text-gray-200 mb-6 font-semibold tracking-wide">
              Full Stack Web Developer
            </h2>
            <p className="font-Jost text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Certified Full Stack Web Developer from Dallas, TX.
              <br />
              Passionate about crafting functional, elegant, and user-focused
              web experiences.
            </p>
            <a
              href={`${process.env.PUBLIC_URL}/resume/GustavoGarResume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-lg font-Asap text-lg font-semibold shadow-md transition duration-200"
            >
              View Resume
            </a>
          </div>

          {/* Right: Icon Avatar */}
          <div className="w-40 md:w-56 h-40 md:h-56 flex items-center justify-center rounded-full bg-neutral-900 border-4 border-red-500 shadow-red-500/30 shadow-xl text-red-500 text-6xl">
            <FaLaptopCode />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-NovaSquare font-bold text-red-500 mb-10">
            Featured Projects
          </h3>
          <div className="grid gap-8 sm:grid-cols-2">
            {projects.map((proj) => (
              <div
                key={proj.name}
                className="backdrop-blur bg-white/10 border border-red-900/30 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition transform p-5 flex flex-col"
              >
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="rounded-lg mb-4 h-40 object-cover border border-gray-700"
                />
                <h4 className="text-xl font-semibold text-red-400 mb-1">
                  {proj.name}
                </h4>
                <p className="text-gray-200 mb-2">{proj.description}</p>
                <p className="text-sm text-gray-400 mb-4">{proj.tech}</p>
                <div className="mt-auto flex gap-4">
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 font-medium hover:underline"
                  >
                    Live
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 font-medium hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        {/* Accent Bar */}
        <div className="w-16 h-1 bg-red-500 rounded mb-4"></div>
        <h3 className="text-3xl font-NovaSquare font-bold mb-2 text-black tracking-tight">
          Skills
        </h3>
        <p className="text-gray-500 mb-10 font-Jost text-lg">
          Modern Full Stack technologies I use every day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Front End Card */}
          <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-black/80 border border-red-900/20 rounded-2xl shadow-md p-8 hover:shadow-red-800/40 hover:shadow-lg transition">
            <h4 className="text-xl text-red-400 font-bold mb-4 tracking-wide">
              Front End
            </h4>
            <div className="grid grid-cols-4 gap-6 place-items-center text-4xl md:text-5xl text-gray-100">
              <span className="hover:scale-125 transition">
                <SiJavascript className="text-yellow-400" title="JavaScript" />
              </span>
              <span className="hover:scale-125 transition">
                <SiHtml5 className="text-orange-500" title="HTML5" />
              </span>
              <span className="hover:scale-125 transition">
                <SiCss3 className="text-blue-500" title="CSS3" />
              </span>
              <span className="hover:scale-125 transition">
                <SiBootstrap className="text-purple-600" title="Bootstrap" />
              </span>
              <span className="hover:scale-125 transition">
                <SiReact className="text-cyan-400" title="React" />
              </span>
              <span className="hover:scale-125 transition">
                <SiNextdotjs className="text-white" title="Next.js" />
              </span>
              <span className="hover:scale-125 transition">
                <SiTailwindcss className="text-teal-400" title="Tailwind CSS" />
              </span>
            </div>
          </div>

          {/* Back End Card */}
          <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-black/80 border border-red-900/20 rounded-2xl shadow-md p-8 hover:shadow-red-800/40 hover:shadow-lg transition">
            <h4 className="text-xl text-red-400 font-bold mb-4 tracking-wide">
              Back End
            </h4>
            <div className="grid grid-cols-4 gap-6 place-items-center text-4xl md:text-5xl text-gray-100">
              <span className="hover:scale-125 transition">
                <LiaNode className="text-green-500" title="Node.js" />
              </span>
              <span className="hover:scale-125 transition">
                <SiExpress className="text-gray-300" title="Express.js" />
              </span>
              <span className="hover:scale-125 transition">
                <SiHandlebarsdotjs
                  className="text-orange-400"
                  title="Handlebars.js"
                />
              </span>
              <span className="hover:scale-125 transition">
                <SiPython className="text-blue-600" title="Python" />
              </span>
              <span className="hover:scale-125 transition">
                <SiMongodb className="text-green-600" title="MongoDB" />
              </span>
              <span className="hover:scale-125 transition">
                <SiMysql className="text-blue-500" title="MySQL" />
              </span>
              <span className="hover:scale-125 transition">
                <SiAmazonaws className="text-orange-300" title="Amazon AWS" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-gray-800 to-neutral-950 py-20">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image - Glassmorphic Dark Card */}
          <div className="backdrop-blur bg-white/10 border border-red-900/30 rounded-2xl shadow-md p-4 flex-shrink-0 mb-6 md:mb-0">
            <img
              src={picture}
              className="w-40 md:w-56 rounded-full shadow-lg border-4 border-red-500 object-cover"
              alt="Gustavo Garcia"
            />
          </div>

          {/* About Content */}
          <div>
            <h3 className="text-red-500 font-NovaSquare text-3xl font-bold mb-4 tracking-tight">
              About Me
            </h3>
            <p className="text-lg md:text-xl font-Jost text-gray-300 leading-relaxed tracking-tight">
              <span className="block mb-3">
                Dedicated and accomplished{" "}
                <span className="font-bold text-red-400">
                  Full Stack Web Developer
                </span>{" "}
                with certification from the esteemed{" "}
                <span className="font-bold text-red-400">
                  SMU Coding Bootcamp
                </span>
                . My journey in programming commenced in 2020, and since then, I
                have honed my skills and fostered a deep passion for the art and
                science of coding.
              </span>
              <span className="block mb-3">
                Proficiency in{" "}
                <span className="font-bold text-yellow-400">JavaScript</span>,
                my primary language of choice, is complemented by active
                practice in{" "}
                <span className="font-bold text-blue-400">Python</span>. My
                commitment to excellence extends beyond the realm of coding.
              </span>
              <span className="block mb-3">
                When I'm not immersed in the world of programming, I find joy in
                various pursuits: delving into the intricacies of{" "}
                <span className="font-bold text-green-400">gaming</span>,
                maintaining a healthy lifestyle through regular{" "}
                <span className="font-bold text-red-400">workouts</span>, or
                channeling my creativity into{" "}
                <span className="font-bold text-indigo-400">
                  music production
                </span>
                .
              </span>
              <span className="block">
                As a professional who thrives on challenges and embraces
                learning, I am poised to contribute my skills and passion to
                innovative projects. With a solid foundation in Full Stack
                development, a dynamic skill set, and a commitment to staying at
                the forefront of industry trends, I am prepared to bring value
                to any team or project.
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
