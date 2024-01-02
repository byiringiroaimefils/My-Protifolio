import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import Project from './Components/Project'

import { FaMoon, FaBars } from "react-icons/fa";



function App() {
  const[bgcolor,Setbgcolor]=useState("black")
  const [openLink, SetopenLink] = useState(false);
  return (

    <div>
      <BrowserRouter>
        <header className="Header h-12 sticky top-0" >
          <div className="flex justify-between ml-8 ">
            <div className="logo ml-6 translate-y-4  translate-x-2">
              <h4>aime9088</h4>
            </div>

            <nav className="ml-9 translate-y-2  translate-x-2 transition-all duration-300">
              <ul className={openLink ? "open" : ""} >
                <Link className=" hover:text-sky-700 transition-colors duration-300 text-xs font-semibold " to="/">
                  HOME
                </Link>
                <Link className="hover:text-sky-700 transition-colors duration-300 text-xs font-semibold" to="AboutMe">
                  ABOUTME
                </Link>
                <Link className="hover:text-sky-700 transition-colors duration-300 text-xs font-semibold " to="Project">
                  PROJECT
                </Link>

              </ul>
            </nav>
            <div className="None  flex  mr-20">
              <button className='button bg-sky-700 p-1 text-sm translate-y-3 pb-3-3 rounded-sm'>Contact me</button>
              <div className='translate-y-4 ml-5'>
                <FaMoon  className='cursor-pointer hover:text-sky-700' onClick={()=>{Setbgcolor ? "white":"black"}} />
              </div>
            </div>
            <  FaBars className="FaBars lg:hidden  mt-3 ml-6 mr-7 white cursor-pointer" onClick={() => {
              SetopenLink(!openLink);
            }} />
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="AboutMe" element={<AboutMe />} />
            <Route path="Project" element={<Project />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App
