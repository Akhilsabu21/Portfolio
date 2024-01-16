import React, { useState } from 'react'
import './SideNav.css'

const SideNav = () => {
    const [menu,setMenu]=useState('home')
    return (
        <>
            <div className='hidden lg:flex flex-col itmes-center'>
                <div className='md:w-[150px] md:h-[150px] sm:w-[auto] sm:h-[auto]  md:mx-auto flex  justify-center rounded-full overflow-hidden mt-5'>
                    <img src="https://img.freepik.com/free-photo/portrait-young-man-with-dark-curly-hair_176532-8137.jpg?w=1060&t=st=1704899715~exp=1704900315~hmac=c7a611f95f5012dcdb37bfb007ebbe4ec8e0c4f0438494d8496bc84aa3682b4f" className='object-cover hover:scale-110 transition duration-700' alt="profile" />
                </div>
                <div className='mx-auto'>
                    <h1 className='text-white mt-2 font-black text-2xl'>AKHIL SABU</h1>
                </div>
                <div className='mx-auto mt-2  flex flex-wrap gap-3 items-baseline'>
                    <a href='' className=' rounded-full overflow-hidden'>
                        <svg className="w-8 h-8 text-gray-800 hover:bg-blue-400 hover:text-gray-800 hover:rotate-[360deg] transition duration-1000 delay-200 p-2 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a href='' className='rounded-full overflow-hidden'>
                        <svg className="w-8 h-8 text-gray-800 hover:bg-blue-400 hover:text-gray-800 hover:rotate-[360deg] transition duration-1000 delay-200 p-2 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                            <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a href='' className=' rounded-full overflow-hidden'>
                        <svg className="w-8 h-8 text-gray-800 hover:bg-blue-400 hover:text-gray-800 hover:rotate-[360deg] transition duration-1000 delay-200 p-2 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path fill="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z" />
                        </svg>
                    </a>
                    <a href='' className=' rounded-full overflow-hidden'>
                        <svg className="w-8 h-8 text-gray-800 hover:bg-blue-400 hover:text-gray-800 hover:rotate-[360deg] transition duration-1000 delay-200 p-2 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                            <path fillRule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd" />
                            <path d="M3 5.012H0V15h3V5.012Z" />
                        </svg>

                    </a>
                </div>
                <div onClick={()=>setMenu('home')} className='side-link w-[80%] mx-auto mt-5 mb-3 flex gap-5'>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke={`${menu=='home'?'aqua':'currentColor'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"/>
                </svg>
                    <a href='#home'  className={`${menu=='home'?'text-[aqua]':'text-white'} font-bold text-start`}>Home</a>
                </div>
                <div onClick={()=>setMenu('about')} className='side-link w-[80%] mx-auto mt-5 mb-3 flex gap-5'>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 18">
                    <path stroke={`${menu=='about'?'aqua':'currentColor'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/>
                </svg>
                    <a href='#about' className={`${menu=='about'?'text-[aqua]':'text-white'} font-bold text-start`}>About</a>
                </div>
                <div onClick={()=>setMenu('skill')} className='side-link w-[80%] mx-auto mt-5 mb-3 flex gap-5'>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                        <path stroke={`${menu=='skill'?'aqua':'currentColor'}`}  strokeLinejoin="round" strokeWidth="2" d="M6 1v4a1 1 0 0 1-1 1H1m14-4v16a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2Z"/>
                    </svg>
                    <a href='#skill' className={`${menu=='skill'?'text-[aqua]':'text-white'} font-bold text-start`}>Skill</a>
                </div>
                <div onClick={()=>setMenu('service')} className='side-link w-[80%] mx-auto mt-5 mb-3 flex gap-5'>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke={`${menu=='service'?'aqua':'currentColor'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 10h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H17M1 10v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M1 10l2-9h12l2 9M6 4h6M5 7h8"/>
                </svg>
                    <a href='#sevice' className={`${menu=='service'?'text-[aqua]':'text-white'} font-bold text-start`}>Service</a>
                </div>
                <div onClick={()=>setMenu('contact')} className='side-link w-[80%] mx-auto mt-5 mb-3 flex gap-5'>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke={`${menu=='contact'?'aqua':'currentColor'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"/>
                </svg>
                    <a href='#contact' className={`${menu=='contact'?'text-[aqua]':'text-white'} font-bold text-start`}>Contact</a>
                </div>
            </div>
        </>
    )
}

export default SideNav