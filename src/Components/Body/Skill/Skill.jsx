import React, { useEffect } from 'react'
import './Skill.css'
const Skill = () => {
    useEffect(()=>{
        function reveal() {
            let reveals = document.querySelectorAll(".reveals");
    
            reveals.forEach((element) => {
                let windowHeight = window.innerHeight;
                let elementTop = element.getBoundingClientRect().top;
                let elementVisible = 150;
    
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
    <div className='reveals w-full h-[auto] p-4 mt-5 mb-10' id='skill'>
        <h1 className='underline underline-offset-8 text-[40px] text-sky-950 font-bold'>Skill</h1>
        <p className='text-justify pt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum aspernatur, vitae asperiores corporis minus pariatur dolorem illo, voluptatum veritatis reiciendis minima aliquid error qui rem consectetur voluptas quidem quod animi. </p>
        <div className="skill-box-body">
            <div className="skill-box lg:flex flex-wrap gap-2 ">
                <div className=' h-auto md:w-full sm:w-[100%] md:mt-3 lg:w-[49%]'>
                    <div className='flex justify-between'>
                        <p>HTML</p>
                        <p>100%</p>
                    </div>
                    <div className='w-full h-3 border-[1px] overflow-hidden border-gray-300'>
                    <div className='w-full h-3 bg-blue-950'></div>
                    </div>
                </div>
                <div className=' h-auto md:w-full sm:w-[100%] md:mt-3 lg:w-[49%]'>
                <div className='flex justify-between'>
                        <p>CSS</p>
                        <p>100%</p>
                    </div>
                    <div className='w-full h-3 border-[1px] overflow-hidden border-gray-300'>
                    <div className='w-[100%] h-3 bg-blue-950'></div></div>
                </div>
            </div>
            <div className="skill-box lg:flex flex-wrap gap-2 ">
                <div className=' h-auto md:w-full sm:w-[100%] md:mt-3 lg:w-[49%]'>
                    <div className='flex justify-between'>
                        <p>JAVASCRIPT</p>
                        <p>90%</p>
                    </div>
                    <div className='w-full h-3 border-[1px] overflow-hidden border-gray-300'>
                    <div className='w-[90%] h-3 bg-blue-950'></div>
                    </div>
                </div>
                <div className=' h-auto md:w-full sm:w-[100%] md:mt-3 lg:w-[49%]'>
                <div className='flex justify-between'>
                        <p>REACT</p>
                        <p>85%</p>
                    </div>
                    <div className='w-full h-3 border-[1px] overflow-hidden border-gray-300'>
                    <div className='w-[85%] h-3 bg-blue-950'></div></div>
                </div>
            </div>
            <div className="skill-box lg:flex flex-wrap gap-2 ">
                <div className=' h-auto md:w-full sm:w-[100%] md:mt-3 lg:w-[49%]'>
                    <div className='flex justify-between'>
                        <p>BOOTSTRAP</p>
                        <p>95%</p>
                    </div>
                    <div className='w-full h-3 border-[1px] overflow-hidden border-gray-300'>
                    <div className='w-[95%] h-3 bg-blue-950'></div>
                    </div>
                </div>
                <div className=' h-auto md:w-full sm:w-[100%] md:mt-3 lg:w-[49%]'>
                <div className='flex justify-between'>
                        <p>TAILWIND</p>
                        <p>95%</p>
                    </div>
                    <div className='w-full h-3 border-[1px] overflow-hidden border-gray-300'>
                    <div className='w-[95%] h-3 bg-blue-950'></div></div>
                </div>
            </div>
            <div className="skill-box lg:flex flex-wrap gap-2 ">
                <div className=' h-auto md:w-full sm:w-[100%] md:mt-3 lg:w-[49%]'>
                    <div className='flex justify-between'>
                        <p>NODE JS</p>
                        <p>90%</p>
                    </div>
                    <div className='w-full h-3 border-[1px] overflow-hidden border-gray-300'>
                    <div className='w-[90%] h-3 bg-blue-950'></div>
                    </div>
                </div>
                <div className=' h-auto md:w-full sm:w-[100%] md:mt-3 lg:w-[49%]'>
                <div className='flex justify-between'>
                        <p>EXPRESS JS</p>
                        <p>95%</p>
                    </div>
                    <div className='w-full h-3 border-[1px] overflow-hidden border-gray-300'>
                    <div className='w-[95%] h-3 bg-blue-950'></div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill
