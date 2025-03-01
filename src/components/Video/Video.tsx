import { FC } from "react";

interface IVideo {
  src: string;
}

const Video: FC<IVideo> = ({ src }) => {
  return (
    <div>
      <video width="auto" height={500} autoPlay loop muted style={styles.video}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  video: {
    position: "absolute",
    top: "0",
    left: "50%",
    width: "100%",
    height: "auto",
    transform: "translateX(-50%)",
    zIndex: "-1",
  },
};

export default Video;
