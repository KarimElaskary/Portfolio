import React, { useEffect } from "react";
import Work from "./components/Work";
import todo from "./assets/todo.png";
import emages from "./assets/emages.png";
import Chatting from "./assets/Chatting.png";

const AllProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Data = [
    {
      title: "Chatting",
      description:
        "Live chat application with your frineds built with ReactJS and Firebase to implement auth",
      image: Chatting,
      link: "https://react-firebase-chat-olive.vercel.app//",
    },
    {
      title: "To-Do",
      description: "Organize Your Tasks With My To-Do",
      image: todo,
      link: "https://todo-nine-flame.vercel.app/",
    },
    {
      title: "Emages",
      description: "Download High Quality Images",
      image: emages,
      link: "https://emages.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-center text-3xl font-bold">All Projects</h1>
          <p className="text-center text-[18px] mx-10 md:mx-40 text-[#B3B3B3]">
            Here is a complete collection of my work, showcasing various
            technologies and design approaches.
          </p>
        </div>

        <div className="container mx-auto flex flex-wrap gap-6 justify-center pb-20">
          {Data.map((project, index) => (
            <Work
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
