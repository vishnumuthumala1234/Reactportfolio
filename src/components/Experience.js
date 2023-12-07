import React, { useState } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && (
      <div name='valuemomentum' className='w-full md:h-screen text-black-1000 bg-[#FCFBF4]'>
      <div className='max-w-[1000px] mx-auto p-2 flex flex-col justify-center w-full h-full'>
      <h1 className="text-2xl font-bold mb-8">My Experience in ValueMomentum (2022-2023)</h1>
      
      <p>
      In my professional journey, I have had the privilege of spending the last one and a half years at ValueMomentum, a company at the forefront of cutting-edge technology. Specializing in front-end development, I have been actively involved in diverse projects that have not only enriched my technical skills but also provided me with a holistic understanding of the industry. Joining ValueMomentum after completing my undergraduate studies was a pivotal step, and the experience has been nothing short of transformative. Working alongside talented team members has not only exposed me to innovative solutions and industry best practices but has also fostered a collaborative and growth-oriented environment. The guidance and mentorship from my colleagues have played a crucial role in shaping my professional journey, and I am excited about the continuous learning and challenges that lie ahead in my career at ValueMomentum.
      {/* <img
          src="https://example.com/your-image-url.jpg"
          alt="My Workspace"
          className="mt-4"
        /> */}
      </p>
      <br></br>
      <div className='max-w-[1000px] mx-auto p-2 flex flex-col justify-center w-full h-full'>
      <h1 className="text-2xl font-bold mb-8">My Experience in MSIT Solutions (10 DEC 2021 - 13 MAR 2022)</h1>
      
      <p>
During my tenure at MSIT Solutions from December 10, 2021, to March 13, 2022, I had the invaluable opportunity to immerse myself in the dynamic realm of front-end technology. As a dedicated member of the team, I actively contributed to various projects, drawing upon my academic background and leveraging the wealth of knowledge bestowed upon me during my undergraduate studies. The supportive environment and guidance from my experienced teammates played a pivotal role in shaping my professional journey, providing me with a rich learning experience. This stint at MSIT not only honed my technical skills but also instilled in me a deep appreciation for collaborative teamwork and innovative problem-solving. I am immensely grateful for the chance to have been part of such a forward-thinking company and to have learned and grown under the mentorship of my talented colleagues.      {/* <img
          src="https://example.com/your-image-url.jpg"
          alt="My Workspace"
          className="mt-4"
        /> */}
      </p>
    </div>
    </div>
    </div>
   
  )}
<div className='bg-[#FCFBF4] text-black border-2 hover:bg-[#FCFBF4] hover:border-black-1000 px-4 py-3 my-8 mx-auto flex items-center justify-center'>
  <button
    onClick={toggleVisibility}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded"
  >
    {isVisible ? 'Hide Experience' : 'My Experience'}
  </button>
</div>



  </div>
  
  );
  
};


export default Experience;


