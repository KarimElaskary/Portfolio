import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import left from "../assets/left.png";
import right from "../assets/right.png";
import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
import whatsapp from "../assets/whatsapp.png";
import github from "../assets/github.png";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="py-[50px] mx-[10%] md:mx-[120px]" id="contact">
      <div
        data-aos="fade-down"
        data-aos-duration="1500"
        className="flex flex-col items-center justify-center bg-[#121212] rounded-3xl"
      >
        <img src={left} alt="left" className="h-16 self-start" />
        <h3 className="header3 mt-[50px]">Let's Talk!</h3>
        <p className="text-center mt-5 mb-12 paragraphing-md mx-[70px] md:mx-[120px] capitalize">
          Interested in working together or have a question? Feel free to reach
          out. I'm here to help you turn your ideas into amazing digital
          realities. Looking forward to hearing from you soon!
        </p>
        <div className="flex gap-4 mb-[50px] flex-wrap md:flex-row justify-center items-center">
          <div className="flex flex-col md:flex-row gap-5">
            <div>
              <a href="mailto:karimelaskary1@gmail.com">
                <img src={gmail} alt="gmail" className="h-[30px] md:h-[48px]" />
              </a>
            </div>
            <div className="flex gap-8 items-center justify-center">
              <a
                href="https://www.linkedin.com/in/karim-elaskary-428301237/"
                target="_blank"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="h-[30px] md:h-[48px]"
                />
              </a>
              <a href="https://wa.me/+201040597698" target="_blank">
                <img
                  src={whatsapp}
                  alt="whatsapp"
                  className="h-[30px] md:h-[48px]"
                />
              </a>
              <a href="https://github.com/KarimElaskary/" target="_blank">
                <img
                  src={github}
                  alt="gmail"
                  className="h-[30px] md:h-[48px]"
                />
              </a>
            </div>
          </div>
        </div>
        <img src={right} alt="right" className="h-16 self-end" />
      </div>
    </footer>
  );
};

export default Footer;
