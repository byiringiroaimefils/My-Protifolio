import { useEffect } from 'react';
import Photo from "../assets/DashBoard.jpeg";
// import Photo1 from "../assets/Nike.png";
import Photo2 from "../assets/Profile.png";
import Photo3 from "../assets/age.png";
// import Photo4 from "../assets/Kirclinic.png";

import Aos from "aos";
import "aos/dist/aos.css"

import { FaGithub } from "react-icons/fa6";

export default function Project() {
  useEffect(() => {
    Aos.init({ duration: 2000, debounceDelay: 2000 })
  })

  return (
    <div>
      <div></div>
      <div className="text-center">
        <h3 className='text-2xl font-bold mb-2'>My Projects</h3>
        <div className="w-24 h-1 bg-sky-600 mx-auto rounded-full"></div>
        <p className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out if you'd like to connect!
        </p> <br />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto'>
        <div className='group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2' data-aos="fade-up">
          <div className="relative overflow-hidden">
            <img src={Photo} alt="" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="p-6">
            <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">STOCK MANAGEMENT</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Full stack Development of Saint Anne. A comprehensive stock management system developed within one month.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">HTML</span>
              <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">CSS</span>
              <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">JS</span>
              <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">MySQL</span>
              <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">PHP</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors">
                <span>View Project</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className='group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2' data-aos="fade-up" data-aos-delay="100">
          <div className="relative overflow-hidden">
            <img src={Photo3} alt="" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="p-6">
            <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">IsoMere</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Beautiful web application where children can improve their art of reading.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">MongoDB</span>
              <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">Express</span>
              <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">Node.js</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors">
                <span>View Project</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className='group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2' data-aos="fade-up" data-aos-delay="200">
          <div className="relative overflow-hidden">
            <img src={Photo2} alt="" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="p-6">
            <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">My Portifolio</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">My professional profile showcasing all my information and achievements.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">React.js</span>
              <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/byiringiroaimefils/My-Protifolio" className="flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors">
                <span>View Project</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a href="https://github.com/byiringiroaimefils/My-Protifolio" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

         <div className='group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2' data-aos="fade-up" data-aos-delay="300">
          <div className="relative overflow-hidden">
            <img src={Photo1} alt="" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="p-6">
            <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">NIKE SHOES COLLECTION</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Frontend website showcasing different Nike shoes collections.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">React.js</span>
              <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">CSS5</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/byiringiroaimefils/NikeShoes" className="flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors">
                <span>View Project</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a href="https://github.com/byiringiroaimefils/NikeShoes" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>


        <div className='group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2' data-aos="fade-up" data-aos-delay="400">
          <div className="relative overflow-hidden">
            <img src={Photo4} alt="" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="p-6">
            <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Star War Unevirsal </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Star War unevirsel UX/UI design Challenge</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">HTML</span>
              <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">CSS</span>
              <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">JavaScript</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors">
                <span>View Project</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div> 


      </div>
    </div>
  )
}
