import React from "react";
import { SectionWrapper } from "../hoc";
import { socials } from "../constants";

const date = new Date();
const year=date.getFullYear();

const Socials = () => {
  return (
    <div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
        {socials.map((social) => (
        <div className='w-28 h-28 rounded-lg hover:opacity-50' key={social.name}>
          <a href={social.url}><img className="rounded-full" src={social.icon} alt={social.name}></img></a>
        </div>
      ))}
    </div>
    <p className=" flex relative top-10 justify-center">© {year} Nikhil Maurya</p>
    </div>
  );
};

export default SectionWrapper(Socials, "");