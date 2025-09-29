import React, { useState } from "react";
import { motion } from "framer-motion";
import profileImage from "./profile.png";
import { FaLinkedin } from "react-icons/fa";

function ResumeWebsite() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } min-h-screen relative overflow-hidden`}
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header Section */}
      <header className="text-center py-20">
        <div className="flex flex-col items-center space-y-6">
          <img
            src={profileImage}
            alt="Profile"
            className="w-36 h-36 rounded-full border-4 border-teal-500 shadow-lg object-cover"
          />
          <h1 className="text-5xl font-extrabold">Mohammed Alghumuy</h1>
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-700"} text-lg`}>Software Engineer</p>

          <div className="flex space-x-4 mt-4">
            <a
              href="mailto:malghumuy@hotmail.com"
              className={`px-6 py-2 rounded-lg font-medium border transition ${
                isDarkMode
                  ? "bg-white text-teal-700 hover:bg-gray-200 border-white"
                  : "bg-white text-teal-700 hover:bg-teal-100 border-teal-400"
              }`}
            >
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/muhs"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-6 py-2 rounded-lg font-medium border transition ${
                isDarkMode
                  ? "bg-gray-800 text-white hover:bg-gray-700 border-gray-700"
                  : "bg-white text-teal-700 hover:bg-teal-100 border-teal-400"
              }`}
            >
              <FaLinkedin className="text-teal-500 text-lg" />
              <span>LinkedIn</span>
            </a>
          </div>

          <button
            onClick={toggleDarkMode}
            className={`mt-6 px-5 py-2 rounded-lg font-medium border transition ${
              isDarkMode
                ? "bg-white text-gray-900 hover:bg-gray-200 border-white"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300 border-gray-300"
            }`}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="text-center py-16 max-w-3xl mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${isDarkMode ? "text-gray-300" : "text-gray-800"} text-lg leading-relaxed`}
        >
          Result-driven software engineer passionate about building elegant,
          seamless software systems. Skilled in Linux systems, programming,
          automation, and problem-solving with strong teamwork and lifelong
          learning commitment.
        </motion.p>
      </section>

      {/* Work Experience Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">
          Work Experience
        </h2>
        <div className="relative border-l-2 border-teal-500 max-w-3xl mx-auto">
          {[
            {
              title: "Software Engineer",
              company: "NTiS",
              duration: "09/2023 - Present",
              details: [
                "Managed Linux systems, including system services and resource optimization.",
                "Developed desktop applications with Python3 & Bash.",
                "Implemented Git workflows, CI/CD, self-hosted apps.",
                "Administered web servers, virtual machines, and containerized solutions.",
              ],
            },
            {
              title: "System Developer",
              company: "SSCL",
              duration: "05/2023 - 09/2023",
              details: [
                "Conducted data analysis and integrations.",
                "Managed Oracle databases ensuring data integrity.",
              ],
            },
            {
              title: "IT Intern",
              company: "National Water Company (NWC)",
              duration: "06/2022 - 09/2022",
              details: [
                "Assisted in data center and infrastructure management.",
                "Gained practical IT skills in administration & support.",
              ],
            },
          ].map((job, index) => (
            <motion.div
              key={index}
              className="mb-12 ml-6 relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <span
                className={`absolute -left-3 w-5 h-5 rounded-full ring-4 ${
                  isDarkMode ? "bg-teal-500 ring-gray-800" : "bg-teal-500 ring-gray-200"
                }`}
              ></span>
              <div
                className={`p-6 rounded-2xl shadow-md ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <h3 className="text-2xl font-bold text-teal-400">{job.title}</h3>
                <p className={`mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>
                  {job.company} | {job.duration}
                </p>
                <ul className={`mt-3 list-disc list-inside space-y-1 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {job.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">
          Education
        </h2>
        <div className="relative border-l-2 border-teal-500 max-w-2xl mx-auto">
          {[
            {
              degree: "Master's of Computer Networks",
              school: "KFUPM, Saudi Arabia",
              date: "08/2025 - Current",
            },
            {
              degree: "Bachelor of Computer Science",
              school: "Umm Al Qura University, Saudi Arabia",
              date: "10/2018 - 02/2023 | GPA: 3.82/4.0",
            },
          ].map((edu, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-6 relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <span
                className={`absolute -left-3 w-5 h-5 rounded-full ring-4 ${
                  isDarkMode ? "bg-teal-500 ring-gray-800" : "bg-teal-500 ring-gray-200"
                }`}
              ></span>
              <div
                className={`p-6 rounded-2xl shadow-md ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <h3 className="text-2xl font-bold text-teal-400">{edu.degree}</h3>
                <p className={`mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>
                  {edu.school}
                </p>
                <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center ${isDarkMode ? "bg-gray-900" : "bg-gray-200"}`}>
        <p className={`${isDarkMode ? "text-gray-500" : "text-gray-700"} text-sm`}>
          &copy; {new Date().getFullYear()} Mohammed Alghumuy. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default ResumeWebsite;
