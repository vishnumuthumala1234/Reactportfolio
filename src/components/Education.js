import React from 'react';
import { data1 } from "../data/data1.js";

const Education = () => {
    const project = data1;
  
  return (
    <div name='education' className='w-full md:h-screen text-gray-1000 bg-[#FCFBF4]'>
      <div className='max-w-[1000px] mx-auto p-2 flex flex-col justify-center w-full h-full'>
        <div className='pb-1'>
          <p className='text-4xl font-bold inline border-b-4 text-black-1000 border-yellow-600'>
            Education
          </p>
          <p className='py-6'>Education Profile:</p>
        </div>

<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          
          {project.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-tight ">
        {item.name}
      </span>
      <div className="pt-8 text-center ">
        <a href={item.url} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-orange-700 font-bold text-lg"
          >
            URL
          </button>
        </a>
      </div>
    </div>
  </div>
))}
</div>
      </div>
    </div>
  );
};

export default Education;
