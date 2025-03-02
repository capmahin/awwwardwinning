import React from "react";
import AnimatedTitle from "./AnimatedTitle";

const Story = () => {
  return (
    <section id="story" className="w-screen bg-black min-h-dvh text-blue-50">
      <div className="flex flex-col items-center py-10 pb-20 size-full">
        <p className="font-general text-sm uppercase md:text-[10px]">
          the multiversal ip world
        </p>
        <div className="relative size-full ">
          <AnimatedTitle
            title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none
            mix-blend-differnce relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
