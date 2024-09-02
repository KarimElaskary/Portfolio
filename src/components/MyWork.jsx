import Work from './Work'
import todo from '../assets/todo.png'
import selhono from '../assets/selhono.png'
import emages from '../assets/emages.png'
import Chatting from '../assets/Chatting.png'

const MyWork = () => {
  const Data = [
    {
      title: 'Chatting',
      description: 'Live chat application with your frineds built with ReactJS and Firebase to implement auth',
      image: Chatting,
      link: 'https://react-firebase-chat-olive.vercel.app//',
    },
    {
      title: 'To-Do',
      description: 'Organize Your Tasks With My To-Do',
      image: todo,
      link: 'https://todo-nine-flame.vercel.app/',
    },
    {
      title: 'Emages',
      description: 'Download High Quality Images',
      image: emages,
      link: 'https://emages.vercel.app/',
    },
    {
      title: 'Selhono',
      description: 'Responive Design For Selhono',
      image: selhono,
      link: 'https://selhono-green.vercel.app/',
    },
  ]

  return (
    <div className='py-[50px] mx-[10%] md:mx-[120px]'>
      <div className='flex flex-col gap-4'>
        <h1
          className='header3 md:header2 text-center md:text-start'
          id='my-work'
        >
          My Work
        </h1>
        <p className='paragraphing-sm md:paragraphing-lg mb-[56px] text-center md:text-start capitalize'>
          Here's a glimpse of some of my recent and exciting projects. Each of
          them reflects my focus on user-centered design and my commitment to
          excellence in user experience.
        </p>
        <div>
          {Data.map((project) => (
            <Work
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyWork
