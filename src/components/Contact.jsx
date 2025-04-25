import React from "react";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
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
        {/* <div className="absolute hidden h-full overflow-hidden -left-20 w-72 sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            clipClass="contact-clip-path-1"
            src="img/contact-2.webp"
          />
        </div> */}
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-10 lg:w-70">
          {/* <ImageClipBox
            clipClass="absolute md:scale-125"
            src="img/swordman.jpg"
          /> */}
          <ImageClipBox
            clipClass="sword-man-clip-path md:scale-125"
            src="img/swordman.jpg"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase">Join assassin's</p>
          <p
            className="special-font mt-10 w-full font-zentry 
          text-5xl leading-[0.9] md:text-[6rem]"
          >
            Let's b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t
            <b>o</b>gether
          </p>

          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
