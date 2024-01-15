import React from 'react';
import me from '../assets/me.jpg';
import karimelaskary from '../assets/karimelaskary.pdf';

const Hero = () => {
  return (
    <section className='py-[50px] xl:py-[200px] mx-[10%] md:mx-[120px]'>
      <div className='flex flex-col items-center justify-center gap-6 h-full w-full'>
        <img src={me} alt='me' className='h-[200px] rounded-full ' />
        <h1 className='header3 md:header1 text-center mb-4'>
          Hi, I'm Karim Elaskary
        </h1>
        <p className='paragraphing-sm md:paragraphing-lg text-center capitalize'>
          I am a Junior Front-End developer using React Skilled in implementing
          responsive user interfaces, experienced in transforming designs into
          high quality code and optimizing performance. Dedicated to crafting
          user-friendly experiences and making valuable contributions to
          innovative projects
        </p>
        <a
          href={karimelaskary}
          download={'../assets/karimelaskary.pdf'}
          className='bg-gradient-to-r from-[#50CAE4] to-[#9B5CFF] hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
  Keep holding'
        >
          Download My CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
