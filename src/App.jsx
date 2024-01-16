import { useState } from 'react'
import './App.css'
import About from './Components/Body/About/About'
import Contact from './Components/Body/Contact/Contact'
import Home from './Components/Body/Home/Home'
import Service from './Components/Body/Service/Service'
import Skill from './Components/Body/Skill/Skill'
import SideNav from './Components/SideNav/SideNav'
import SmallSideBar from './Components/SmallSideBar/SmallSideBar'


function App() {

  const [display, setDisplay] = useState(false)
  
  return (
    <div className='flex'>
      <div className='lg:w-1/5 lg:h-[100vh] bg-[#001524] lg:inline hidden'>
        <SideNav />
      </div>
      <div className={`${display ? "w-[250px]" : "hidden"} ${display ? "h-[100vh]" : "hidden"} small lg:hidden h-[100vh]  `}>
        <SmallSideBar setDisplay={setDisplay} display={display} />
      </div>
      <div className='lg:w-4/5 md:w-full h-[100vh] overflow-y-auto' id='scroll-body'>
        <div className='relative parallax' id='home'>
          <Home />
        </div>
        <button className='lg:hidden text-black x-1 absolute top-4 right-4' onClick={() => setDisplay(!display)}>
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="#001524" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h14M1 6h14M1 11h7" />
          </svg>
        </button>
        <About />
        <Skill />
        <Service />
        <Contact />
      </div>
    </div>
  )
}

export default App
