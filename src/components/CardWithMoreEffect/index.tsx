import Image from "next/image";
import Link from "next/link";

import style from "./style.module.scss";

const CardWithMoreEffect = (props: {
  height: string;
  image_src: string;
  alt: string;
  small: boolean;
  link: string;
}) => {
  const { height, image_src, alt, small, link } =
    props;
  return (
    <div
      className={style.card_with_more_effect}
      style={{
        width: `${small && "calc(50% - 15px)"}`,
        height: `${height}px`,
      }}>
      <div className={style.more_text}>
        <Link href={link}>More...</Link>
      </div>
      <div className={style.photo}>
        <Image src={image_src} fill={true} alt={alt} />
      </div>
      <div className={style.mask}></div>
    </div>
  );
};

export default CardWithMoreEffect;
