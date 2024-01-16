import React, { useEffect } from 'react'
import './Contact.css'

const Contact = () => {
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
    <div id='contact' className='reveals w-full h-[auto] p-4 mt-5 mb-8'>
        <h1 className='underline underline-offset-8 text-[40px] text-sky-950 font-bold'>Contact</h1>
        <p className='text-justify pt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum aspernatur, vitae asperiores corporis minus pariatur dolorem illo, voluptatum veritatis reiciendis minima aliquid error qui rem consectetur voluptas quidem quod animi. </p>
        {/* <div className='lg:flex h-full'>
            <div className='lg:w-2/5 w-full border-4 h-[80vh] m-2 bg-gray-200'></div>
            <div className='lg:w-3/5 w-full border-4 h-[80vh] m-2 bg-gray-200'></div>
        </div> */}
        

        
        <section className="text-gray-600 body-font relative">
  <div className="absolute inset-0 bg-gray-300">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4016584.092792871!2d76.13836675!3d10.544276349999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1705256614710!5m2!1sen!2sin" width="100%" className='map' height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" ></iframe>
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Send Message</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Do you need any help or would you like to talk about anything</p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <p className="text-xs text-gray-500 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae non, soluta voluptatem sunt</p>
    </div>
  </div>
</section>


    </div>
  )
}

export default Contact
