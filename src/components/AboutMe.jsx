import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import me from "../assets/me.jpg";

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
          <p className="paragraphing-sm md:paragraphing-lg text-center md:text-left text-white md:mr-[85px] capitalize mb-[40px] md:mb-0">
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
        <div className="flex mt-[60px] mb-[23.5px] gap-[120px]">
          <div className="flex flex-col gap-3">
            <p className="paragraphing-lg">HTML 5</p>
            <p className="paragraphing-lg">CSS 3</p>
            <p className="paragraphing-lg">Tailwind CSS</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="paragraphing-lg">Java Script</p>
            <p className="paragraphing-lg">ReactJS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
