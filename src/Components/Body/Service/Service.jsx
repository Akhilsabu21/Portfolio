import React, { useEffect } from 'react'
import './Service.css'

const Service = () => {
    useEffect(()=>{
        function reveal() {
            let reveals = document.querySelectorAll(".reveals");
    
            reveals.forEach((element) => {
                let windowHeight = window.innerHeight;
                let elementTop = element.getBoundingClientRect().top;
                let elementVisible = 100;
    
                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add("aosanimate");
                    // reveals[i].style.transform = "translateZ(0)";
                } else {
                    element.classList.remove("aosanimate");
                }
            });
        }
        document.querySelector("#scroll-body").addEventListener("scroll", reveal);
    
        return () => {
            document.querySelector("#scroll-body").removeEventListener("scroll", reveal);
        };
    },[])
  return (
    <div className='reveals w-full h-[auto] p-4 mt-5 mb-8' id='sevice'>
        <h1 className='underline underline-offset-8 text-[40px] text-sky-950 font-bold'>Services</h1>
        <p className='text-justify pt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum aspernatur, vitae asperiores corporis minus pariatur dolorem illo, voluptatum veritatis reiciendis minima aliquid error qui rem consectetur voluptas quidem quod animi. </p>
        <div className="skill-box-body">
            <div className="skill-box lg:flex flex-wrap gap-2 ">
                <div className='skillBox h-auto md:w-full flex justify-between p-4 sm:w-[100%] md:mt-3 lg:w-[49%]  service-box-left reveals'>
                <div className='w-[fit-content] h-[fit-content] p-2  skill-border'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="rgb(18, 18, 62)" className="w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>
                </div>
                <div className='w-4/5 p-2'>
                    <h1 className='text-[1.3rem] font-bold'>Web Developer</h1>
                    <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                </div>
                <div className='skillBox h-auto md:w-full flex justify-between p-4 sm:w-[100%] md:mt-3 lg:w-[49%]  service-box-right reveals'>
                <div className='w-[fit-content] h-[fit-content] p-2  skill-border'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="rgb(18, 18, 62)" className="w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>
                </div>
                <div className='w-4/5 p-2'>
                    <h1 className='text-[1.3rem] font-bold'>Web Design</h1>
                    <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                </div>
            </div>
            <div className="skill-box lg:flex flex-wrap gap-2 ">
                <div className='skillBox h-auto md:w-full flex justify-between p-4 sm:w-[100%] md:mt-3 lg:w-[49%]  service-box-left reveals'>
                <div className='w-[fit-content] h-[fit-content] p-2 skill-border'>
                <svg className="w-14 h-14 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                    <path stroke="rgb(18, 18, 62)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 14h12M1 4h12M6.5 16.5h1M2 1h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"/>
                </svg>
                </div>
                <div className='w-4/5 p-2'>
                    <h1 className='text-[1.3rem] font-bold'>App Developer</h1>
                    <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                </div>
                <div className='skillBox h-auto md:w-full flex justify-between p-4 sm:w-[100%] md:mt-3 lg:w-[49%] service-box-right reveals'>
                <div className='w-[fit-content] h-[fit-content] p-2  skill-border '>
                <svg className="w-14 h-14 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                    <path stroke="rgb(18, 18, 62)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 14h12M1 4h12M6.5 16.5h1M2 1h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"/>
                </svg>
                </div>
                <div className='w-4/5 p-2'>
                    <h1 className='text-[1.3rem] font-bold'>App Design</h1>
                    <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service
