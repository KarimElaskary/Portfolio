import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import me from "../assets/me_hero.jpg";

import Particles from "./Particles";
import DownloadButton from "./DownloadButton";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative h-screen" id="hero">
      <section className="absolute inset-0 z-20 flex items-center justify-center">
        <div
          className="flex flex-col items-center justify-center gap-6 px-4 max-w-4xl mx-auto"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <img
            src={me}
            alt="me"
            className="h-24 w-24 md:h-36 md:w-36 lg:h-48 lg:w-48 rounded-full object-cover"
          />
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-4">
            Hi, I'm Karim Elaskary
          </h1>
          <p className="paragraphing-sm md:paragraphing-lg text-center max-w-2xl">
            Frontend Developer with strong experience building clean,
            responsive, and user‑centric web interfaces. Skilled in JavaScript,
            React.js, and Tailwind CSS, with a focus on performance, component
            architecture, and modern UI/UX practices. Passionate about turning
            ideas into polished digital experiences and continuously improving
            through learning.
          </p>
          <DownloadButton />
        </div>
      </section>
      <Particles
        className="absolute inset-0 z-0"
        particleColors={["#2e6f40", "#5826aaff"]}
        particleCount={200}
        particleSpread={8}
        speed={0.2}
        particleBaseSize={30}
        alphaParticles={false}
        disableRotation={true}
      />
    </div>
  );
};

export default Hero;
