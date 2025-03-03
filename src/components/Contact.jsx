import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-screen px-10 my-20 min-h-96">
      <div className="relative py-24 bg-black rounded-lg text-blue-50 sm:overflow-hidden">
        <div className="absolute top-0 hidden h-full overflow-hidden -left-20 w-72 sm:block lg:left-20 lg:w-96">
          <div className="contact-clip-path-1">
            <img src="img/contact-1.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
