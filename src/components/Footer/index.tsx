"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import FaxIcon from "@mui/icons-material/Fax";
import { useSearchParams } from "next/navigation";
import Swal from "sweetalert2";

import style from "./styles.module.scss";

export default function Header() {
  const ref = useRef(null);
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  const handleOpenUnderConstruction = (e: any) => {
    e.preventDefault();

    Swal.fire({
      title: "頁面正在維修中。",
    }).then(() => {
      return;
    });
  };

  if (lang === "en") {
    return (
      <footer ref={ref} className={style.footer}>
        <div className={style.container1}>
          <Image
            width={100}
            height={100}
            src="/images/stslogo.png"
            alt="stslogo"
          />
        </div>
        <div className={style.container2}>
          <div>
            <LocationOnIcon
              sx={{
                color: "#005752",
                fontSize: "40px",
              }}
            />
          </div>
          <div>
            <div>
              <p className={style.name}>Tainan Science Park</p>
            </div>
            <div>
              <p className={style.address}>
                No. 22, Nanke 3rd Rd.,Xinshi Dist.,Tainan City
                744-094,Taiwan,R.O.C
              </p>
            </div>
            <div>
              <p>Tel : +886-505-1001</p>
            </div>
            <div>
              <p>Fax : +886-505-0470</p>
            </div>
          </div>
        </div>
        <div className={style.container3}>
          <div>
            <LocationOnIcon
              sx={{
                color: "#005752",
                fontSize: "40px",
              }}
            />
          </div>
          <div>
            <div>
              <p className={style.name}>Kaohsiung Science Park</p>
            </div>
            <div>
              <p className={style.address}>
                No.23, Luke 5th Rd., Luzhu Dist.,Kaohsiung City 821-011, Taiwan
                (R.O.C.)（Traffic）
              </p>
            </div>
            <div>
              <p>Tel : (07)607-5545</p>
            </div>
            <div>
              <p>Fax : (07)607-5549</p>
            </div>
          </div>
        </div>
        <div className={style.container4}>
          <ul>
            <li>
              <Link
                href={
                  "https://www.stsp.gov.tw/web/WEB/Jsp/Page/cindex.jsp?frontTarget=DEFAULT&thisRootID=85"
                }>
                Newsletter
              </Link>
            </li>
            <li>
              <Link href={"https://www.facebook.com/stsp543/?ref=ts&fref=ts"}>
                STSP 543
              </Link>
            </li>
            <li>
              <Link
                href={
                  "https://www.stsp.gov.tw/feedback/?opg=Y&frontTarget=DEFAULT"
                }>
                Feedback
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href={
                  "https://www.stsp.gov.tw/web/indexGroups?frontTarget=DEFAULT"
                }>
                STSP GOV
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.container5}>
          <h4>2022 © 南部科學園區 Southern Taiwan Science Park.</h4>
        </div>
      </footer>
    );
  }

  return (
    <footer className={style.footer}>
      <div className={style.container1}>
        <div className={style.container_header}>
          <h5>中部科學園區 FB粉專</h5>
        </div>
        <div className={style.qrcode_container}>
          <Image
            width="120"
            height="180"
            src="/images/footer/zh/qr1.png"
            alt=""
          />
          <Image
            width="120"
            height="180"
            src="/images/footer/zh/qr2.png"
            alt=""
          />
        </div>
      </div>
      <div className={style.container2}>
        <div className={style.container_header}>
          <h5>網站相關</h5>
        </div>
        <div>
          <ul>
            <li>
              <Link
                onClick={handleOpenUnderConstruction}
                href={
                  "https://www.stsp.gov.tw/web/WEB/Jsp/Page/cindex.jsp?frontTarget=DEFAULT&thisRootID=85"
                }>
                互動藝術
              </Link>
            </li>
            <li>
              <Link
                onClick={handleOpenUnderConstruction}
                href={"https://www.facebook.com/stsp543/?ref=ts&fref=ts"}>
                影音專區
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href={
                  "https://www.stsp.gov.tw/feedback/?opg=Y&frontTarget=DEFAULT"
                }>
                中科簡訊
              </Link>
            </li>
            <li>
              <Link href={"/links"}>好站連結</Link>
            </li>
            <li>
              <Link
                target="_blank"
                href={"https://web2.ctsp.gov.tw/CtspMisc/Letters/Create"}>
                意見回饋
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.container3}>
        <div className={style.container_header}>
          <h5>中部科學園區管理局</h5>
        </div>
        <div className={style.info}>
          <div className={style.key}>
            <LocationOnIcon
              sx={{
                fontSize: "20px",
              }}
            />
            <p>地址</p>
          </div>
          <div className={style.value}>
            <p>40763 臺中市西屯區中科路2段</p>
          </div>
        </div>
        <div className={style.info}>
          <div className={style.key}>
            <CallIcon
              sx={{
                fontSize: "20px",
              }}
            />
            <p>聯絡電話</p>
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
            <p>傳真</p>
          </div>
          <div className={style.value}>
            <p>(04)2565-8588</p>
          </div>
        </div>
      </div>
      <div className={style.container4}>
        <div className={style.container_header}>
          <h5>中科管理局位置</h5>
        </div>
        <div>
          <Image
            width="250"
            height="180"
            src="/images/footer/zh/fakemap.png"
            alt=""
          />
        </div>
      </div>
      <div className={style.container5}>
        <h4>2020 © 中部科學園區管理局 Central Taiwan Science Park.</h4>
        <h4>訪客人數 35237</h4>
      </div>
    </footer>
  );
}
