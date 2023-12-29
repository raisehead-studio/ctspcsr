import Image from "next/image";
import Link from "next/link";

import style from "./style.module.scss";

const CardWithMoreEffect = (props: {
  image_src: string;
  alt: string;
  text: string;
}) => {
  const { image_src, alt, text } = props;
  return (
    <div className={style.card_with_more_effect}>
      <div className={style.more_text}>
        <p>{text}</p>
      </div>
      <div className={style.photo}>
        <Image src={image_src} width={500} height={500} alt={alt} />
      </div>
      <div className={style.photo_mobile}>
        <Image src={image_src} width={500} height={260} alt={alt} />
      </div>
      <div className={style.mask}></div>
    </div>
  );
};

export default CardWithMoreEffect;
