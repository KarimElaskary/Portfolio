import React, { useEffect } from "react";
import Work from "./components/Work";
import eatNsplit from "./assets/eatNsplit.png";
import emages from "./assets/emages.png";
import feastly from "./assets/feastly.png";

const AllProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Data = [
    {
      title: "Feastly",
      description:
        "A responsive, modern restaurant ordering interface built with React.js and Tailwind CSS, featuring dynamic Swiper sliders, reusable components, and a smooth, mobile-optimized menu browsing.",
      image: feastly,
      link: "https://feastly-five.vercel.app/",
    },
    {
      title: "Eat-N-Split",
      description: "Eat-N-Split is a React-based web app that helps users split bills and track shared expenses among friends. It simplifies calculating who owes whom through an intuitive, interactive interface.",
      image: eatNsplit,
      link: "https://eat-n-split-blue-six.vercel.app/",
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
