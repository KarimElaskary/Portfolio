import Work from "./Work";
import eatNsplit from "../assets/eatNsplit.png";
import emages from "../assets/emages.png";
import feastly from "../assets/feastly.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MyWork = () => {
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
    <div className="py-[50px] mx-[10%] md:mx-[120px]" id="work">
      <div className="flex flex-col gap-4">
        <h1 className="header3 md:header2 text-center md:text-start">
          Projects
        </h1>
        <p className="paragraphing-sm md:paragraphing-lg mb-[56px] text-center md:text-start">
          Here's a glimpse of some of my recent and exciting projects. Each of
          them reflects my focus on user-centered design and my commitment to
          excellence in user experience.
        </p>

        {/* Swiper Slider */}
        <div className="w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            className="mySwiper w-full pb-10"
          >
            {Data.map((project, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="w-full flex justify-center">
                  <Work
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    image={project.image}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Show All Projects Button */}
        <div className="flex justify-center mt-10">
          <Link
            to="/all-projects"
            className="btn text-white px-8 py-4 hover:bg-[#2e6f40] transition-colors duration-300"
          >
            Show All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
