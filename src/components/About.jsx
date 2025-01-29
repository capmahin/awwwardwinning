import React from "react";

const About = () => {
  return (
    <div id="about" className="w-screen min-h-screen">
      <div className="relative flex flex-col items-center gap-5 mb-8 mt-36">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </h2>
        <div
          className="mt-5 text-center text-4xl uppercase 
        leading-[0.8] md:text-[6rem]"
        >
          Disc<b>o</b>ver the world&apos;s <br /> largest shared <b>a</b>
          dventure
        </div>
      </div>
    </div>
  );
};

export default About;
