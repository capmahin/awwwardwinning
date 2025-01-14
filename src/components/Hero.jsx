const Hero = () => {
  return (
    <div className="relative w-screen overflow-x-hidden h-dvh">
      <div
        id="video-frame"
        className="relative z-10 w-screen overflow-hidden rounded-lg h-dvh bg-blue-75"
      >
        <div>
          <div className="mask-clip-path"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
