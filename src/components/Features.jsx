import React from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute top-0 left-0 object-cover object-center size-full"
      />
      <div className="relative z-10 flex flex-col justify-between p-5 size-full text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 text-xs max-w-64 md:text-base">{description}</p>
          )}
        </div>
      </div>
      {title}
    </div>
  );
};
const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container px-3 mx-auto md:px-10">
        <div className="px-5 py-32">
          <p className="text-lg font-circular-web text-blue-50">
            Into the Metagame Layer
          </p>

          <p className="max-w-md text-lg opacity-50 font-circular-web text-blue-50">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>

        <div
          className="border-hsla relative mb-7 h-96 w-full
          overflow-hidden rounded-md md:h-[65vh]"
        >
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radi<b>n</b>t
              </>
            }
            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
          />
        </div>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <div className="row-span-1 bento-tilt_1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </div>
          <div className="row-span-1 bento-tilt_1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            />
          </div>
          <div className=" bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            />
          </div>
          <div className="bento-tilt_2">
            <div className="flex flex-col justify-between p-5 size-full bg-violet-300">
              <h1 className="text-black bento-title special-font max-w-64">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
              </h1>

              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
