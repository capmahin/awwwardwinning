import React, { useRef } from "react";

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);
  return (
    <div ref={containerRef} className={`"animated-title ${containerClass}`}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-wrap max-w-full gap-2 px-10 flex-center md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
