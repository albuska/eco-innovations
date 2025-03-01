"use client";

import { useRef } from "react";
// import ReactPlayer from "react-player/lazy";
import style from "./style.module.css";
import { Video } from "../Video";

const HeroSection = () => {
  const playerRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!playerRef.current) return;

  //     const rect = playerRef.current.getBoundingClientRect();
  //     const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

  //     setIsPlaying(isVisible);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <section ref={playerRef} className={style.hero_container}>
      <Video src="videos/hero-video.mp4" />
      {/* <div className={style.video_wrapper}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=6r5j0aT8ke0"
          playing={isPlaying}
          muted
          loop
          width="100vw"
          height="100vh"
          controls={false}
          config={{
            youtube: {
              playerVars: {
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                disablekb: 1,
                iv_load_policy: 3,
                playlist: "6r5j0aT8ke0", // Додаємо ID відео в плейлист
              },
            },
          }}
          // style={{ position: "absolute", top: 0, left: 0, objectFit: "cover" }}
        />
      </div> */}
    </section>
  );
};

export default HeroSection;
