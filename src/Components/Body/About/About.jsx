import React, { useEffect } from 'react'
import './About.css'

const About = () => {
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
    <>
        <div className='reveals w-full h-[auto] p-4 mt-5 mb-8' id='about'>
            <h1 className='underline underline-offset-8 text-[40px] text-sky-950 font-bold'>About</h1>
            <p className='text-justify pt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum aspernatur, vitae asperiores corporis minus pariatur dolorem illo, voluptatum veritatis reiciendis minima aliquid error qui rem consectetur voluptas quidem quod animi.lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, impedit maiores. Nihil repellat eveniet quidem possimus obcaecati enim illum labore odio, saepe, atque, </p>
            <div className="about-box flex flex-wrap mt-5">
                <div className="reveals about-box-img lg:w-2/5 p-2">
                    <img src="https://img.freepik.com/free-photo/portrait-young-man-with-dark-curly-hair_176532-8137.jpg?w=1060&t=st=1704899715~exp=1704900315~hmac=c7a611f95f5012dcdb37bfb007ebbe4ec8e0c4f0438494d8496bc84aa3682b4f" alt="" />
                </div>
                <div className="reveals about-box-para lg:w-3/5">
                <h1 className='text-[24px] text-sky-950 font-bold'>Full Stack developer.</h1>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam similique voluptatem ad hic pariatur repudiandae laboriosam eveniet aspernatur, consectetur at illo.</p>
                <div className="personal-details md:mx-4 my-4">
                    <div className='md:flex justify-between flex-wrap mb-2'>
                        <div className='flex items-center'>
                        <svg className="w-4 h-4 text-gray-800 dark:text-blue-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                        </svg>
                        <span className='font-bold pe-2'>Birthday</span>: 21 july 2001
                        </div>
                        <div className='md:w-1/2 sm:w-full sm:mt-2 flex items-center'>
                        <svg className="w-4 h-4 text-gray-800 dark:text-blue-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                        </svg>
                        <span className='font-bold pe-2'>Website</span>: www.example.com
                        </div>
                    </div>
                    <div className='md:flex justify-between flex-wrap mb-2'>
                    <div className='flex items-center'>
                        <svg className="w-4 h-4 text-gray-800 dark:text-blue-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                        </svg>
                        <span className='font-bold pe-2'>Phone</span>: 9744548738
                        </div>
                        <div className='md:w-1/2 sm:w-full sm:mt-2 flex items-center'>
                        <svg className="w-4 h-4 text-gray-800 dark:text-blue-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                        </svg>
                        <span className='font-bold pe-2'>City</span>: Alappuzha
                        </div>
                    </div>
                    <div className='md:flex justify-between flex-wrap mb-2'>
                    <div className='flex items-center'>
                        <svg className="w-4 h-4 text-gray-800 dark:text-blue-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                        </svg>
                        <span className='font-bold pe-2'>Age</span>: 22
                        </div>
                        <div className='md:w-1/2 sm:w-full sm:mt-2 flex items-center'>
                        <svg className="w-4 h-4 text-gray-800 dark:text-blue-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                        </svg>
                        <span className='font-bold pe-2'>Degree</span>: Economics
                        </div>
                    </div>
                    <div className='md:flex justify-between flex-wrap mb-2'>
                    <div className='flex items-center'>
                        <svg className="w-4 h-4 text-gray-800 dark:text-blue-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                        </svg>
                        <span className='font-bold pe-2'>Email</span>: akhilsabu8702@gmail.com
                        </div>
                        <div className='md:w-1/2 sm:w-full sm:mt-2 flex items-center'>
                        <svg className="w-4 h-4 text-gray-800 dark:text-blue-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                        </svg>
                        <span className='font-bold pe-2'>Freelance</span>: Available
                        </div>
                    </div>
                </div>
                <p className='text-justify'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius totam quod repellendus aliquid, quidem atque nesciunt autem mollitia
                </p>
                </div>
            </div>
        </div>
    </>
  )
}
export default About
