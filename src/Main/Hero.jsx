import React from 'react'
import { Spotlight } from '../components/Spotlight'
import { Animatedtooltip } from '../components/Animatedtooltip'
import { ContainerScroll } from '../components/ContainerScroll'
import Button from '../components/Button';  

function Hero() {
    const people = [
       
        {
          id: 1,
          name: "Robert Johnson",
          designation: "Product Manager",
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 2,
            name: "Buddhadev Maity",
            designation: "React.js Developer",
            image:
              "https://media.licdn.com/dms/image/v2/D4D03AQFWby-88q9M2w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1692926330433?e=2147483647&v=beta&t=SstSuDOvSCfqZYls_w1I1QUqib9AJ9daejyRxVLIt9I",
          },
        {
          id: 3,
          name: "Jane Smith",
          designation: "Data Scientist",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 4,
          name: "Emily Davis",
          designation: "UX Designer",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 5,
          name: "Tyler Durden",
          designation: "Soap Developer",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
        },
        {
          id: 6,
          name: "Dora",
          designation: "The Explorer",
          image:
            "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
        },
      ];
  return (
    <div >
    <section className="h-[40rem] w-full  flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Spotlight <br /> is the new trend.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Hi, this is Buddhadev. The Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
        <p className='mt-4 font-bold text-base text-neutral-300 max-w-lg text-center mx-auto'>Used by thousand, and counting</p>
        <div className="mt-4 flex flex-row items-center justify-center mb-10 w-full">
      <Animatedtooltip items={people} />
    </div>
    <div className='flex md:flex-col items-center justify-center gap-4'>
    <Button />
    <a href="#" className="hover:underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block md:text-red-500 lg:text-green-500">Visit our Github</a>
    </div>
      </div>
    </section>


   
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`https://placeholder.com/1400x720?text=Buddhadev`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top font-bold"
          draggable={false}
        />
      </ContainerScroll>
    </div>


    </div>
  )
}

export default Hero