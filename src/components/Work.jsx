import React from 'react';

const Work = ({ title, description, image, link }) => {
  return (
    <div className='flex flex-col md:flex-row bg-[#3B3B3B] mb-[40px] p-8 justify-between rounded-3xl mx-[10px] md:mx-0'>
      <div className='flex flex-col items-center md:items-start justify-between order-2 md:order-1'>
        <div className='flex flex-col gap-4 items-center md:items-start'>
          <h3 className='header3 text-center md:text-left'>{title}</h3>
          <p className='paragraphing-sm md:mr-[68px] text-center md:text-left'>{description}</p>
        </div>
        <a href={link} className='btn my-[20px] md:my-0' target='_blank'>
          Try Demo
        </a>
      </div>
      <div className='order-1 md:order-2'>
        <img
          src={image}
          alt='Project pic'
          className='w-[626px] xs:h-[300px] rounded-2xl mb-5 md:mb-0'
        />
      </div>
    </div>
  );
};

export default Work;
