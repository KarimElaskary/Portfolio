import React from 'react';

const Work = ({ title, description, image, link }) => {
  return (
    <div className='flex flex-col md:flex-row bg-[#3B3B3B] mb-[40px] p-8 justify-between rounded-3xl mx-[10%] md:mx-0'>
      <div className='flex flex-col items-center md:items-start justify-between'>
        <div className='flex flex-col gap-4 items-center md:items-start'>
          <h3 className='header3 text-center md:text-left'>{title}</h3>
          <p className='paragraphing-sm md:mr-[68px] text-center md:text-left'>{description}</p>
        </div>
        <a href={link} className='btn my-[70px] md:my-0' target='_blank'>
          Try Demo
        </a>
      </div>
      <div>
        <img
          src={image}
          alt='Project pic'
          className='w-[626px] xs:h-[300px] rounded-2xl'
        />
      </div>
    </div>
  );
};

export default Work;
