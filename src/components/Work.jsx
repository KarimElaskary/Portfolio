import React from "react";

const Work = ({ title, description, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-4 w-[350px] md:w-[600px] p-4 bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-[#2e6f40]/20 h-[50vh]"
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col gap-2 px-2">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-white group-hover:text-[#2e6f40] transition-colors duration-300">
            {title}
          </h3>
          <span className="text-white/50 group-hover:text-white transition-colors duration-300">
            Visit ↗
          </span>
        </div>
        <p className="text-[#B3B3B3] line-clamp-3">{description}</p>
      </div>
    </a>
  );
};
export default Work;
