"use client"

import { useEffect, useState } from "react";

const Culture = () => {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    { label: "Collaborative Workspace", image: "/culture/Office.jpg" },
    { label: "Team Workshop", image: "/culture/Workshop.jpg" },
    { label: "Creative Sessions", image: "/culture/Creative.jpg" },
    { label: "Team Activities", image: "/culture/Team.jpg" },
    { label: "Product Launch", image: "/culture/Launch.jpg" },
    { label: "Client Meetings", image: "/culture/Meeting.jpg" }
  ];



  useEffect(()=>{
    setTimeout(()=>{
        if(activeImage<images.length-1){
        setActiveImage(prev=>prev+1)
      }else{
        setActiveImage(0)
      }
    }, 4000)
  }, [activeImage])

  return (
    <section className="md:py-40 py-12 px-8">
      <div className="max-w-[90rem] mx-auto">
        <div className="mb-24 text-center">
          <p className="text-sm uppercase tracking-widest font-medium text-white/40 mb-6">Our Culture</p>
          <h2 className="text-4xl md:text-8xl font-bold text-white tracking-tighter">
            Behind the scenes
          </h2>
        </div>

        <div className="mb-12">
          <div className="aspect-[16/9] bg-white/5 border border-white/10 relative overflow-hidden">
            {images.map((image, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                  activeImage === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              >
               {/*} <span className="text-8xl font-bold text-white/10">
                  {image.placeholder}
                </span>*/}
                <img src={image.image} alt={image.label} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`px-6 py-3 border transition-all duration-300 ${
                activeImage === idx 
                  ? 'bg-white text-black border-white' 
                  : 'bg-transparent text-white border-white/20 hover:border-white/40'
              }`}
            >
              {image.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Culture