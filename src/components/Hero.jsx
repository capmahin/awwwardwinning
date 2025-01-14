import { useRef } from "react";
import { useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVdRef = useRef(null);

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex((prevIndex) => prevIndex + 1);
  };
  return (
    <div className="relative w-screen overflow-x-hidden h-dvh">
      <div
        id="video-frame"
        className="relative z-10 w-screen overflow-hidden rounded-lg h-dvh bg-blue-75"
      >
        <div>
          <div
            onClick={handleMiniVdClick}
            className="absolute z-50 overflow-hidden rounded-lg cursor-pointer mask-clip-path absolute-center size-64"
          >
            <div>MiniVideoPlayer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
