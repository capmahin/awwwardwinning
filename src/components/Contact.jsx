import React, { useRef } from "react";
import Button from "./Button";
import gsap from "gsap";
import AnimatedTitle from "./AnimatedTitle";

const Contact = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.out"
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.in"
      });
    }
  };
  const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
      <img
        src={src}
        ref={frameRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseLeave}
        onMouseEnter={handleMouseLeave}
      />
    </div>
  );
  return (
    <div id="contact" className="w-screen px-10 my-20 min-h-96">
      <div className="relative py-24 bg-black rounded-lg text-blue-50 sm:overflow-hidden">
        <div className="absolute top-0 hidden h-full overflow-hidden -left-20 w-72 sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            clipClass="contact-clip-path-1"
            src="img/contact-1.webp"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>
        <div className="absolute top-0 hidden h-full overflow-hidden -right-5 w-72 sm:block lg:right-5 lg:w-96">
          <ImageClipBox
            clipClass="contact-clip-path-1"
            src="img/swordman.jpg"
          />
        </div>
        {/* <div className="absolute hidden h-full overflow-hidden -left-20 w-72 sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            clipClass="contact-clip-path-1"
            src="img/contact-2.webp"
          />
        </div> */}
        {/* <div className="absolute top-0 hidden left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-10 lg:w-70">
          <ImageClipBox
            clipClass="absolute md:scale-125"
            src="img/swordman.jpg"
          />
          <ImageClipBox
            clipClass="sword-man-clip-path md:scale-125 "
            src="img/swordman.jpg"
          />
        </div> */}
        <div className="flex flex-col items-center text-center">
          <p
            className="special-font mt-10 w-full font-zentry 
          text-5xl leading-[0.9] md:text-[2rem]"
          >
            Join <b>a</b>ss<b>a</b>ssin'<b>s</b>
          </p>
          <AnimatedTitle
            sectionId="#story"
            containerClass="mt-5 pointer-events-none
            mix-blend-difference relative z-10"
            title="Let's b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming 🎮🕹️
            t<b>o</b>gether"
          />

          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
