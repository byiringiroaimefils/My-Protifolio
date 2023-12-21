import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import Project from './Components/Project'

import { FaMoon, FaBars } from "react-icons/fa";



function App() {
  return (
    <div>
     <BrowserRouter>
        <header className=" m-4 ml-8" >
          <div className="flex justify-between ">
            <div className="logo ml-6 translate-y-1">
              <h4>aime9088</h4>
            </div>

            <nav className="ml-9">
              <ul>
                <Link className="hover:text-sky-700 text-xs font-semibold " to="/">
                  HOME
                </Link>
                <Link className="hover:text-sky-700  text-xs font-semibold" to="AboutMe">
                  ABOUTME
                </Link>
                <Link className="hover:text-sky-700  text-xs font-semibold " to="Project">
                  PROJECT
                </Link>

              </ul>
            </nav>
            <div className="None  flex  mr-20">
              <button className='bg-sky-700 p-1 text-sm translate-y-1 pb-3-3 rounded-sm'>contact me</button>
              <div className='translate-y-2 ml-5'>
                <FaMoon />
              </div>
            </div>
            <  FaBars className=" lg:hidden  mt-2 ml-6 white "/>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="AboutMe" element={<AboutMe/>} />
            <Route path="Project" element={<Project />} />
          </Routes>
        </main>
      </BrowserRouter> 
    </div>
  );
}

export default App
