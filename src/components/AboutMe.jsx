import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import me from "../assets/me.jpg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
// import ts from "../assets/typescript.png";
import tailwind from "../assets/tailwindcss.png";
import react from "../assets/react.png";
import git from "../assets/git.png";
import github from "../assets/github2.png";
import redux from "../assets/redux.png";
import antd from "../assets/antd.png";
// import nextjs from "../assets/nextjs.png";

const AboutMe = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="2000"
      className="py-[50px] mx-[10%] md:mx-[120px]"
      id="about"
    >
      <h2 className="header2 text-center md:text-start mb-[30px] md:mb-0">
        About Me
      </h2>
      <div>
        <div className="flex items-center flex-col md:flex-row justify-center">
          <p className="paragraphing-sm md:paragraphing-lg text-center md:text-left text-white md:mr-[85px] mb-[40px] md:mb-0">
            I am a Junior Front-End developer using React Skilled in
            implementing responsive user interfaces, experienced in transforming
            designs into high quality code and optimizing performance. Dedicated
            to crafting user-friendly experiences and making valuable
            contributions to innovative projects
          </p>
          <img
            src={me}
            alt="me"
            className="h-[300px] rounded-3xl mb-[40px] md:mb-0"
          />
        </div>
        <h3 className="header3 text-center md:text-left">My Skills</h3>
        <div className="flex flex-wrap justify-center md:justify-center gap-10 mt-[60px] mb-[23.5px]">
          {[
            { img: html, name: "HTML" },
            { img: css, name: "CSS" },
            { img: js, name: "JavaScript" },
            // { img: ts, name: "TypeScript" },
            { img: tailwind, name: "Tailwind CSS" },
            { img: antd, name: "Ant Design" },
            { img: react, name: "React" },
            // { img: nextjs, name: "Next.js" },
            { img: git, name: "Git" },
            { img: github, name: "GitHub" },
            { img: redux, name: "Redux Toolkit / RTK Query" },
          ].map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <img src={skill.img} alt={skill.name} />
              <p className="paragraphing text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
