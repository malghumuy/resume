import React, { useState } from "react";
import { motion } from "framer-motion";

function ResumeWebsite() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } min-h-screen`}
    >
      {/* Header Section */}
      <header
        className={`${
          isDarkMode
            ? "bg-gradient-to-br from-teal-700 to-blue-900"
            : "bg-gradient-to-br from-teal-300 to-blue-500"
        } text-center py-16`}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold">Mohammed Alghumuy</h1>
          <p className="text-lg mt-4">Software Engineer | Creative Problem Solver</p>
          <div className="flex justify-center mt-6 space-x-4">
            <a
              href="mailto:malghumuy@hotmail.com"
              className={`px-8 py-3 rounded-lg font-medium ${
                isDarkMode
                  ? "bg-white text-teal-700 hover:bg-gray-200"
                  : "bg-teal-600 text-white hover:bg-teal-700"
              } transition`}
            >
              Contact Me
            </a>
            <a
              href="https://github.com/mhmdvoid"
              className={`px-8 py-3 rounded-lg font-medium ${
                isDarkMode
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              } transition`}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </div>
          <button
            onClick={toggleDarkMode}
            className={`mt-8 px-6 py-2 rounded-lg font-medium ${
              isDarkMode
                ? "bg-white text-gray-900 hover:bg-gray-200"
                : "bg-gray-800 text-white hover:bg-gray-700"
            } transition`}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Creative and result-driven software engineer with a passion for
            delivering brilliant solutions and seamless systems integration.
            Skilled in Linux systems, software development, and problem-solving
            with a strong commitment to lifelong learning and team
            collaboration.
          </p>
        </div>
      </section>

      {/* Work Experience Section */}
      <section
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-gray-100"
        } py-16`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
          <div className="flex flex-col items-center space-y-8">
            {[
              {
                title: "Software Engineer",
                company: "NTiS",
                duration: "09/2023 - Present",
                details: [
                  "Managed Linux systems, including system services and resource optimization.",
                  "Developed and maintained desktop applications using Python3 and Bash scripting for automation.",
                  "Implemented Git workflows, CI/CD pipelines, and self-hosted applications.",
                  "Administered web servers (Apache, Nginx) and managed virtual machines and system solutions.",
                  "Utilized Docker for containerized application management.",
                  "Contributed to system engineering, problem solving, and operating system support.",
                ],
              },
              {
                title: "System Developer",
                company: "SSCL",
                duration: "05/2023 - 09/2023",
                details: [
                  "Conducted data analysis and developed integrations between sites and equipment.",
                  "Managed Oracle databases to handle system transactions and ensure data integrity.",
                ],
              },
              {
                title: "IT Intern",
                company: "National Water Company (NWC)",
                duration: "06/2022 - 09/2022",
                details: [
                  "Assisted in managing data centers, infrastructure, and internal ticketing systems.",
                  "Gained practical IT skills in systems administration and customer support.",
                ],
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                className={`w-full max-w-xl p-6 rounded-lg shadow-lg ${
                  isDarkMode ? "bg-gray-900" : "bg-white"
                }`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold text-teal-500">{job.title}</h3>
                <p className="text-gray-400">{job.company} | {job.duration}</p>
                <ul className="list-disc list-inside mt-4 text-left space-y-2">
                  {job.details.map((detail, i) => (
                    <li key={i} className={`${isDarkMode ? "text-gray-300": "text-gray-500"}`}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




      {/* Master's degree Education Section */}
      <section
        className={`${
          isDarkMode ? "bg-gray-700" : "bg-gray-100"
        } py-16`}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Education</h2>
          <motion.div
            className={`w-full max-w-2xl mx-auto p-8 rounded-lg shadow-lg ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-teal-500">
              Master's of Computer Networks
            </h3>
            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              King Fahd University of Petroleum and Minerals (KFUPM) University, Saudi Arabia
            </p>
            <p className={"mt-2"}>08/2025 - Current</p>
          </motion.div>
        </div>
      </section>










      {/* Education Section */}
      <section
        className={`${
          isDarkMode ? "bg-gray-700" : "bg-gray-100"
        } py-16`}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Education</h2>
          <motion.div
            className={`w-full max-w-2xl mx-auto p-8 rounded-lg shadow-lg ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-teal-500">
              Bachelor of Computer Science
            </h3>
            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              Umm Al Qura University, Saudi Arabia
            </p>
            <p className={"mt-2"}>10/2018 - 02/2023 | GPA: 3.82/4.0</p>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer
        className={`${
          isDarkMode ? "bg-gray-900" : "bg-gray-200"
        } py-8 text-center`}
      >
        <p
          className={`${
            isDarkMode ? "text-gray-500" : "text-gray-700"
          } text-sm`}
        >
          &copy; {new Date().getFullYear()} Mohammed Alghumuy. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default ResumeWebsite;
