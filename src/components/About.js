import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#FCFBF4] text-black-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Vishnu Reddy, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am a diligent individual who recently completed my Bachelors degree in Computer Science from KL University, India, in 2022. Following my undergraduate studies, I embarked on a professional journey as a Software Engineer at ValueMomentum in Hyderabad, where I dedicated one and a half years to contributing my skills and expertise to various projects. Currently, I am pursuing my Masters degree at Saint Louis University, where I am eager to further enhance my knowledge and capabilities in Computer Science.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
