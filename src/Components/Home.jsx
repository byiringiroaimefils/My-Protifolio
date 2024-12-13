import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import { Profile as data } from "./Basedata";

// Pages.
import AboutMe from './AboutMe'
import Project from './Project'
import Contactme from "./Contact";
import Achivement from "./Achivement.jsx";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa"

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })

  const Users = data.map(item => {
    return (
      <div className='min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 px-4 max-w-7xl mx-auto' key={item.id}>
        <div className='fixed left-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-4 z-50'>
          <a 
            href="https://web.facebook.com/byiringiro.aimefils" 
            className='text-2xl text-gray-600 hover:text-sky-600 transition-colors duration-300'
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a 
            href="https://www.linkedin.com/in/byiringiro-aime-fils-281609296/" 
            className='text-2xl text-gray-600 hover:text-sky-600 transition-colors duration-300'
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a 
            href="https://linkbio.co/byiringiroaimefils" 
            className='text-2xl text-gray-600 hover:text-sky-600 transition-colors duration-300'
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>

        <div className='lg:w-1/2 relative' data-aos="fade-right">
          <div className='absolute inset-4 bg-gradient-to-r from-sky-600 to-indigo-600 rounded-full blur-3xl opacity-30 animate-pulse'></div>
          <img 
            src={item.Image} 
            alt={item.alt} 
            className='relative w-full max-w-lg mx-auto drop-shadow-2xl rounded-2xl'
          />
        </div>

        <div className='lg:w-1/2 text-center lg:text-left' data-aos="fade-left">
          <h2 className='text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent'>
            {item.Greeting}
          </h2>
          <h5 className='text-lg text-gray-600 dark:text-gray-400 mb-4 tracking-wider'>
            {item.Name}
          </h5>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-600 to-indigo-600 rounded-full mx-auto lg:mx-0 mb-6"></div>
          <p 
            className='text-xl text-gray-700 dark:text-gray-300 leading-relaxed' 
            dangerouslySetInnerHTML={{ __html: item.Description }}
          />
          
          <div className='flex gap-4 mt-8 justify-center lg:justify-start'>
            <a 
              href="#contact" 
              className='px-6 py-3 bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-full hover:shadow-lg hover:shadow-sky-600/25 transition-all duration-300'
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className='px-6 py-3 border-2 border-sky-600 text-sky-600 rounded-full hover:bg-sky-600 hover:text-white transition-all duration-300'
            >
              View Projects
            </a>
          </div>

          <div className='flex gap-4 mt-8 justify-center lg:justify-start lg:hidden'>
            <a 
              href="https://web.facebook.com/byiringiro.aimefils" 
              className='text-2xl text-gray-600 hover:text-sky-600 transition-colors duration-300'
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://www.linkedin.com/in/byiringiro-aime-fils-281609296/" 
              className='text-2xl text-gray-600 hover:text-sky-600 transition-colors duration-300'
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="https://linkbio.co/byiringiroaimefils" 
              className='text-2xl text-gray-600 hover:text-sky-600 transition-colors duration-300'
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-white dark:bg-gray-900">
      <div data-aos="fade-up">
        {Users}
      </div>

      <div className='mt-32'>
        <AboutMe />
      </div>

      <div className="mt-32" >
        <Project />
      </div>

      <div className="mt-32" >
        <Achivement />
      </div>

      <div className="mt-32 mb-16" >
        <Contactme />
      </div>
    </div>
  );

}



