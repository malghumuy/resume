import React from 'react';

function ResumeWebsite() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-purple-600 to-indigo-800 text-center py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">Mohammed Alghumuy</h1>
          <p className="text-lg mt-4">Software Engineer | Creative Problem Solver</p>
          <div className="flex justify-center mt-6 space-x-4">
            <a
              href="mailto:malghumuy@hotmail.com"
              className="bg-white text-purple-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/mhmdvoid"
              className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Creative and result-driven software engineer with a passion for delivering brilliant solutions and seamless systems
            integration. Skilled in Linux systems, software development, and problem-solving with a strong commitment to lifelong
            learning and team collaboration.
          </p>
        </div>
      </section>

      {/* Work Experience */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-700 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Work Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-purple-500">Software Engineer</h3>
              <p className="text-gray-400">NTiS | 09/2023 - Present</p>
              <ul className="list-disc list-inside mt-4 text-gray-300">
                <li>Managed Linux systems, including system services and resource optimization.</li>
                <li>Developed and maintained desktop applications using Python3 and Bash scripting.</li>
                <li>Implemented Git workflows, CI/CD pipelines, and self-hosted applications.</li>
                <li>Administered web servers (Apache, Nginx) and managed virtual machines.</li>
                <li>Utilized Docker for containerized application management.</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-purple-500">System Developer</h3>
              <p className="text-gray-400">SSCL | 05/2023 - 09/2023</p>
              <ul className="list-disc list-inside mt-4 text-gray-300">
                <li>Conducted data analysis and developed integrations between sites and equipment.</li>
                <li>Managed Oracle databases to handle system transactions and ensure data integrity.</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-purple-500">IT Intern</h3>
              <p className="text-gray-400">National Water Company (NWC) | 06/2022 - 09/2022</p>
              <ul className="list-disc list-inside mt-4 text-gray-300">
                <li>Assisted in managing data centers, infrastructure, and internal ticketing systems.</li>
                <li>Gained practical IT skills in systems administration and customer support.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-purple-500">Master of Computer Networks</h3>
              <p className="text-gray-400">King Fahd University of Petroleum and Minerals</p>
              <p className="text-gray-300 mt-2">08/2025 - 04/2027</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-purple-500">Bachelor of Computer Science</h3>
              <p className="text-gray-400">Umm Al Qura University, Saudi Arabia</p>
              <p className="text-gray-300 mt-2">10/2018 - 02/2023 | GPA: 3.82/4.0</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-gradient-to-b from-gray-700 to-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Systems Engineering",
              "Software Development",
              "Problem Solving",
              "Data Management",
              "DevOps",
              "Git",
              "Python3",
              "Docker",
              "Bash Scripting",
              "AI & Algorithms",
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-purple-700 text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-8">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Mohammed Alghumuy. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default ResumeWebsite;
