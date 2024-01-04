import { useState } from "react";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";

import style from "./style.module.scss";

const CardWithMoreEffect = (props: {
  image_src: string;
  alt: string;
  text: string;
}) => {
  const { image_src, alt, text } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={style.card_with_more_effect} onClick={handleOpen}>
        <div className={style.more_text}>
          <p>{text}</p>
        </div>
        <div className={style.photo}>
          <Image src={image_src} width={500} height={320} alt={alt} />
        </div>
        <div className={style.photo_mobile}>
          <Image src={image_src} width={300} height={160} alt={alt} />
        </div>
        <div className={style.mask}></div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={open}>
          <Box
            sx={{
              width: "90vw",
              minHeight: "90vh",
              backgroundColor: "#fff",
              zIndex: "9999",
              position: "absolute",
              padding: "15px",
              left: "5vw",
              top: "5vh",
            }}>
            <Image src={image_src} fill={true} alt={alt} />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default CardWithMoreEffect;
