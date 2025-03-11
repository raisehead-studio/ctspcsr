"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import FaxIcon from "@mui/icons-material/Fax";
import { useSearchParams } from "next/navigation";

import style from "./styles.module.scss";

export default function Header() {
  const ref = useRef(null);
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  return (
    <footer className={style.footer}>
      <div className={style.container1}>
        <div className={style.container_header}>
          <h5>{lang ? "Facebook" : "中部科學園區 FB粉專"}</h5>
        </div>
        <div className={style.qrcode_container}>
          <Link
            href="https://www.facebook.com/CentralTaiwanSciencePark/?locale=zh_TW"
            target="_blank">
            <Image
              width="80"
              height="80"
              src="/images/footer/facebook_logo.png"
              alt=""
            />
            <div>
              <p>悠遊中科</p>
              <p>Facebook</p>
            </div>
          </Link>
          <Link
            href="https://www.facebook.com/groups/ctspnews/"
            target="_blank">
            <Image
              width="80"
              height="80"
              src="/images/footer/facebook_logo.png"
              alt=""
            />
            <div>
              <p>中科新鮮事</p>
              <p>Facebook</p>
            </div>
          </Link>
        </div>
      </div>
      <div className={style.container2}>
        <div className={style.container_header}>
          <h5>{lang ? "Links" : "網站相關"}</h5>
        </div>
        <div>
          <ul>
            <li>
              <Link href={"/interactive_art/"}>
                {lang ? "Interactive Art" : "互動藝術"}
              </Link>
            </li>
            <li>
              <Link
                href={
                  "https://www.ctsp.gov.tw/chinese/05-Publication/05-mv.aspx?v=1&fr=1105&no=1110"
                }
                target="_blank">
                {lang ? "Video" : "影音專區"}
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href={
                  "https://www.ctsp.gov.tw/chinese/05publication/03epaper_view_1.aspx?v=1&fr=1105&no=1108"
                }>
                {lang ? "Q&A" : "中科簡訊"}
              </Link>
            </li>
            <li>
              <Link href={"/links"}>{lang ? "Links" : "好站連結"}</Link>
            </li>
            <li>
              <Link
                target="_blank"
                href={"https://web2.ctsp.gov.tw/CtspMisc/Letters/Create"}>
                {lang ? "Feedback" : "意見回饋"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.container3}>
        <div className={style.container_header}>
          <h5>{lang ? "Central Science Park" : "中部科學園區管理局"}</h5>
        </div>
        <div className={style.info}>
          <div className={style.key}>
            <LocationOnIcon
              sx={{
                fontSize: "20px",
              }}
            />
            <p>{lang ? "Address" : "地址"}</p>
          </div>
          <div className={style.value}>
            <p>
              {lang
                ? "No.2, Jhongke Rd., Situn District, Taichung City 407726, Taiwan (R.O.C.)"
                : "40763 臺中市西屯區中科路2號"}
            </p>
          </div>
        </div>
        <div className={style.info}>
          <div className={style.key}>
            <CallIcon
              sx={{
                fontSize: "20px",
              }}
            />
            <p>{lang ? "Tel" : "聯絡電話"}</p>
          </div>
          <div className={style.value}>
            <p>(04)2565-8588</p>
          </div>
        </div>
        <div className={style.info}>
          <div className={style.key}>
            <FaxIcon
              sx={{
                fontSize: "20px",
              }}
            />
            <p>{lang ? "Fax" : "傳真"}</p>
          </div>
          <div className={style.value}>
            <p>(04)2565-8588</p>
          </div>
        </div>
      </div>
      <div className={style.container4}>
        <div className={style.container_header}>
          <h5>{lang ? "Location" : "中科管理局位置"}</h5>
        </div>
        <div>
          <Image
            width="250"
            height="180"
            src="/images/footer/zh/fakemap.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={style.container5}>
        <h4>
          {lang
            ? "2020 © Central Taiwan Science Park."
            : "2020 © 中部科學園區管理局 Central Taiwan Science Park."}
        </h4>
        <h4>{lang ? "visitor 35237" : "訪客人數 35237"}</h4>
      </div>
    </footer>
  );
}
