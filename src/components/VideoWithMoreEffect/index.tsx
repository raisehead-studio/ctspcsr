import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Link from "next/link";
import Image from "next/image";

import style from "./style.module.scss";

const VideoWithMoreEffect = (props: {
  link: string;
  youtubeId?: string;
  image_link: string;
  title: string;
}) => {
  const { link, youtubeId, image_link, title } = props;

  if (!youtubeId) {
    <div className={style.video_with_more_effect_container}>
      <div className={style.video_with_more_effect}>
        <div className={style.more_text}>
          <Link href={link} target="_blank">
            <PlayCircleOutlineIcon sx={{ fontSize: "40px" }} />
          </Link>
        </div>
        <Image src={image_link} alt={`${youtubeId} cover`} fill={true} />
        <div className={style.mask}></div>
      </div>
      <div>
        <h3>{title}</h3>
      </div>
    </div>;
  }

  return (
    <div className={style.video_with_more_effect_container}>
      <div className={style.video_with_more_effect}>
        <div className={style.more_text}>
          <Link href={link} target="_blank">
            <PlayCircleOutlineIcon sx={{ fontSize: "40px" }} />
          </Link>
        </div>
        <Image src={image_link} alt={`${youtubeId} cover`} fill={true} />
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}></iframe>
        <div className={style.mask}></div>
      </div>
      <div>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default VideoWithMoreEffect;
