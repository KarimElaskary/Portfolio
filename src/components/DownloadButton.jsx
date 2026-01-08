import React from "react";
import KarimElaskaryCV from "../assets/KarimElaskaryCV.pdf";
import { IoDownloadOutline } from "react-icons/io5";

const DownloadButton = () => {
  return (
    <a
      href={KarimElaskaryCV}
      download={"KarimElaskaryCV.pdf"}
      className="bg-emerald-950 text-emerald-400 border border-emerald-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-5"
    >
      <span class="bg-emerald-400 shadow-emerald-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
      <span className="flex flex-row gap-2 items-center justify-center">
        <IoDownloadOutline className="text-3xl"/>
        <p className="text-2xl">Download CV</p>
      </span>
    </a>
  );
};

export default DownloadButton;
