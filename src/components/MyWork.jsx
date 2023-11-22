import React from 'react';
import Work from './Work';
import todo from '../assets/todo.png';
import hydra from '../assets/hydra.png';
import emages from '../assets/emages.png';

const MyWork = () => {
  return (
    <div className='py-[50px] mx-[10px] md:mx-[120px]'>
      <div className='flex flex-col gap-4'>
        <h1 className='header3 md:header2 text-center md:text-start' id='my-work'>
          My Work
        </h1>
        <p className='paragraphing-sm md:paragraphing-lg mb-[56px] text-center md:text-start capitalize'>
          Here's a glimpse of some of my recent and exciting projects. Each of
          them reflects my focus on user-centered design and my commitment to
          excellence in user experience.
        </p>
        <div>
          <Work
            title={'To-Do'}
            description={'Organize Your Tasks With My To-Do'}
            link={'https://todo-nine-flame.vercel.app/'}
            image={todo}
          />
          <Work
            title={'HydraVR'}
            description={'Responive Design For HydraVR'}
            link={'https://hydra-vr.vercel.app/'}
            image={hydra}
          />
          <Work
            title={'Emages'}
            description={'Download High Quality Images'}
            link={'https://emages.vercel.app/'}
            image={emages}
          />
        </div>
      </div>
    </div>
  );
};

export default MyWork;
