import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import TabletAndroidIcon from "@mui/icons-material/TabletAndroid";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";

import Breadcrumb from "../../components/Breadcrumb";
import SideMenu from "../../components/SideMenu";

import layout from "../layout.module.scss";
import style from "./styles.module.scss";

export default function ReportDownload() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  return (
    <div className={layout.page_layout}>
      <div className={style.page_sidemenu}>
        <SideMenu />
      </div>
      <div className={layout.page_content}>
        <div className={layout.page_header}>
          <strong>報告書下載</strong>
          <Breadcrumb />
        </div>
        <div className={style.download_section}>
          {[
            {
              name: "2020",
              image: "2020.png",
              reader_link: "",
              pdf_link: "https://www.ctspcsr.com.tw/download/2020_zh.pdf",
              video_link: "",
            },
            {
              name: "2019",
              image: "2019.png",
              reader_link: "",
              pdf_link: "https://www.ctspcsr.com.tw/download/2019_zh.pdf",
              video_link: "",
            },
            {
              name: "2018",
              image: "2018.png",
              reader_link: "",
              pdf_link: "https://www.ctspcsr.com.tw/download/2018_zh.pdf",
              video_link: "",
            },
            {
              name: "2015",
              image: "2015.png",
              reader_link: "",
              pdf_link: "https://www.ctspcsr.com.tw/download/2015_zh.pdf",
              video_link: "",
            },
          ].map((i) => (
            <div className={style.download_section_item} key={i.name}>
              <div>
                <h3>
                  {i.name === "2022"
                    ? "2022 中部科學園區永續發展目標自願檢視報告書"
                    : `${i.name}年科技部中部科學園區管理局永續報告書`}
                </h3>
              </div>
              <div className={style.download_section_item_inner_container}>
                <div className={style.download_section_item_image_container}>
                  <Image
                    src={`/images/report_download/zh/${i.image}`}
                    fill={true}
                    alt={`${i.name} cover photo`}
                  />
                </div>
                <div className={style.download_section_item_button_container}>
                  {i.reader_link && (
                    <Link href={i.reader_link} target="_blank">
                      <div style={{ color: "#32b4c2" }}>
                        <TabletAndroidIcon />
                        <p>線上閱讀</p>
                      </div>
                    </Link>
                  )}
                  {i.pdf_link && (
                    <Link href={i.pdf_link} target="_blank">
                      <div style={{ color: "#cf4038" }}>
                        <PictureAsPdfIcon />
                        <p>PDF</p>
                      </div>
                    </Link>
                  )}
                  {i.video_link && (
                    <Link href={i.video_link} target="_blank">
                      <div style={{ color: "#0f8441" }}>
                        <SmartDisplayIcon />
                        <p>播放檔</p>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
