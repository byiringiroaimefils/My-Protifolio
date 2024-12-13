import { useEffect } from 'react';
import { About as Datas } from './Basedata';
import Aos from "aos";
import "aos/dist/aos.css";
import CV from "../assets/Profile.pdf";
import { FaDownload, FaCode, FaLaptopCode, FaServer, FaPalette } from 'react-icons/fa';

export default function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);

  const skills = [
    { name: 'Frontend Development', icon: <FaCode />, description: 'React.js, HTML5, CSS3, Tailwind CSS' },
    { name: 'Backend Development', icon: <FaServer />, description: 'Node.js, Express.js, MongoDB' },
    { name: 'Full Stack', icon: <FaLaptopCode />, description: 'MERN Stack, RESTful APIs' },
    { name: 'Design', icon: <FaPalette />, description: 'Figma, Adobe Photoshop, Illustrator' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-16" id="about">
      {Datas.map(terms => (
        <div key={terms.id} className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold mb-2">
              About Me
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-600 to-indigo-600 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate MERN Stack developer with a focus on creating beautiful and functional web applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1" data-aos="fade-right">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {terms.Greeting}
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: terms.aboutMe }} />
                  <p className="text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: terms.aboutMe2 }} />
                  <p className="text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: terms.aboutMe3 }} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {skills.map((skill, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="text-sky-600 text-xl mb-4">
                        {skill.icon}
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href={CV}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-full hover:shadow-lg hover:shadow-sky-600/25 transition-all duration-300 mt-8"
                >
                  <FaDownload />
                  <span>Download CV</span>
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2" data-aos="fade-left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-600 to-indigo-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <img
                  src={terms.Image2}
                  alt={terms.alt}
                  className="relative w-full max-w-md mx-auto drop-shadow-2xl rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
