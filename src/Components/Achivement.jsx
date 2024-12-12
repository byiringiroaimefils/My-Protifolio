import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';
import achivementData from "./AchivementData";

export default function Achievement() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 py-16" id="achievements">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-2 ">
            Achievements & Certifications
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-600 to-indigo-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing my journey through various certifications and achievements in the tech world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achivementData.map(item => (
            <div
              key={item.id}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={item.id * 100}
            >
              <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={item.Image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FaTrophy className="text-yellow-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Achievement {item.id}</span>
                </div>

                <p className="text-gray-800 dark:text-gray-200 mb-4 line-clamp-2">
                  {item.alt}
                </p>

                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => window.open(item.Image, '_blank')}
                    className="flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors duration-300"
                  >
                    <span>View Certificate</span>
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://photos.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-full hover:shadow-lg hover:shadow-sky-600/25 transition-all duration-300"
          >
            <span>View More Achievements</span>
            <FaExternalLinkAlt className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
