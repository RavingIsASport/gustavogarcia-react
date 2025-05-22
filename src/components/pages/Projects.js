import ProjectsData from "../../assets/projectsImgs/index";

export default function Projects() {
  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-red-50 py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="w-20 h-1 bg-red-500 mb-4 rounded"></div>
        <h2 className="text-3xl md:text-4xl font-NovaSquare text-gray-800 font-bold mb-4">
          Projects
        </h2>
        <p className="text-gray-600 mb-12 font-Jost text-lg">
          Creative and full-featured projects built using modern full stack
          technologies.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {ProjectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
            >
              <img
                src={project.project}
                alt={project.name}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-xl text-red-600 font-semibold font-Jost mb-1">
                  {project.name}
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 font-medium hover:underline"
                  >
                    Deployed
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
