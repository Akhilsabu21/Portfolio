import React, { useEffect, useState } from 'react'
import './Home.css'

const Home = () => {
    const [post, setPost] = useState('Developer');

    async function setData() {
        const arr = ['Developer', 'Freelancer', 'FrontEnd Developer', 'Fullstack Developer','BackEnd Developer'];
      
        for(let i=1;i<=arr.length;i++)
        {
            setPost(()=>arr[i-1])
            console.log(arr[i-1]);
            await new Promise((res)=>setTimeout(res,5000))
        }
        setData()
    }
    useEffect(()=>{
        setData()
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
        <div className='home reveals absolute top-[40%] left-[10%] text-white ' >
            <h2 className='text-[40px] font-bold drop-shadow-2xl'>AKHIL SABU</h2>
            <span className='text-[20px] flex typing drop-shadow-2xl'>I'm {post} </span>
        </div>
    </>
  )
}

export default Home
