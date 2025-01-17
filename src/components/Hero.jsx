import { useRef } from "react";
import { useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex(upcomingVideoIndex);
  };

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  return (
    <div className="relative w-screen overflow-x-hidden h-dvh">
      <div
        id="video-frame"
        className="relative z-10 w-screen overflow-hidden rounded-lg h-dvh bg-blue-75"
      >
        <div>
          <div className="absolute z-50 overflow-hidden rounded-lg cursor-pointer mask-clip-path absolute-center size-64">
            <div
              onClick={handleMiniVdClick}
              className="transition-all duration-500 ease-in origin-center scale-50 opacity-0 hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                id="current-video"
                className="object-cover object-center origin-center scale-150 size-64"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute z-20 invisible object-cover object-center absolute-center size-64"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 object-cover object-center size-full"
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className="absolute special-font hero-heading bottom-5 right-5 text-blue-75">
          G<b>a</b>ming
        </h1>
        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="px-5 mt-25 sm:px-10">
            <h1 className="text-blue-100 special-font hero-heading">
              redefi<b>n</b>e
            </h1>
            <div className="absolute top-0 left-0 z-40 size-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
