import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import myImage from '../assets/projects/myimg.png'; // Replace with the actual path to your image

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#FCFBF4]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-4 flex flex-col lg:flex-row justify-center items-center h-full'>
        
        <div className='lg:w-1/2 mb-4 lg:mb-0'>
          <br></br><br></br>
          <br></br><img src={myImage} alt='My Image' className='rounded-full w-80 h-85 max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 ' />
       

        </div>
        <div className='lg:w-1/2 lg:ml-8'>
          <br></br>
          <br></br>
          <p className='text-yellow-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-6xl font-bold text-[#000000]'>
            VISHNU REDDY
          </h1>
          <h2 className='text-4xl sm:text-4xl font-bold text-[#808080]'>
            I am a Web Designer
          </h2>
          <p className='text-[#000000] py-4 max-w-[600px]'>
            As a web designer, I specialize in crafting visually engaging and
            user-friendly digital experiences. With a keen eye for aesthetics
            and a passion for creating seamless user journeys, I bring a
            combination of creativity and technical expertise to each project.
          </p>
          <div>
            <Link to='contact' smooth={true} duration={500}>
              <button className='text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                Contact
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
