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
  const menu_zh = [
    {
      title: "互動專區",
      sub: [
        {
          title: "影音專區",
          path: "/video",
        },
        {
          title: "報告書下載",
          path: "/report_download",
        },
        {
          title: "小遊戲(維護中)",
          path: "/",
        },
        {
          title: "好站相連",
          path: "/links",
        },
      ],
    },
  ];

  const menu_en = [
    {
      title: "Interactive",
      sub: [
        {
          title: "Video",
          path: "/video",
        },
        {
          title: "Report Download",
          path: "/report_download",
        },
        {
          title: "Game(under maintenance)",
          path: "/",
        },
        {
          title: "Good Links",
          path: "/links",
        },
      ],
    },
  ];

  if (lang === "en") {
    return (
      <div className={layout.page_layout}>
        <div className={style.page_sidemenu}>
          <SideMenu />
        </div>
        <div className={layout.page_content}>
          <div className={layout.page_header}>
            <strong>Report Download</strong>
            <Breadcrumb />
          </div>
          <div className={style.download_section}>
            {[
              {
                name: "2022",
                image: "2022.png",
                reader_link: "",
                pdf_link: "https://www.stspcsr.com.tw/download/2022_en.pdf",
                video_link: "",
              },
              {
                name: "2021",
                image: "2021.png",
                reader_link: "",
                pdf_link: "https://www.stspcsr.com.tw/download/2021_en.pdf",
                video_link: "",
              },
              {
                name: "2020",
                image: "2020.png",
                reader_link: "",
                pdf_link: "https://www.stspcsr.com.tw/download/2020_en.pdf",
                video_link: "",
              },
              {
                name: "2019",
                image: "2019.png",
                reader_link: "",
                pdf_link: "https://www.stspcsr.com.tw/download/2019_en.pdf",
                video_link: "https://www.stspcsr.com.tw/ppsx/en/2019_en.ppsx",
              },
            ].map((i) => (
              <div className={style.download_section_item} key={i.name}>
                <div className={style.download_section_item_image_container}>
                  <Image
                    src={`/images/report_download/en/${i.image}`}
                    fill={true}
                    alt={`${i.name} cover photo`}
                  />
                </div>
                <div>
                  <h3>
                    {i.name === "2022"
                      ? "2022 STSP Voluntary Department Reviews of SDGs"
                      : `${i.name} STSP Corporate Sustainability Report`}
                  </h3>
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
                        <p>PPSX</p>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

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
              name: "2022",
              image: "2022.png",
              reader_link: "https://www.stspcsr.com.tw/ebook2022/",
              pdf_link: "https://www.stspcsr.com.tw/download/2022_zh.pdf",
              video_link: "",
            },
            {
              name: "2021",
              image: "2021.png",
              reader_link: "https://www.stspcsr.com.tw/ebook2021/",
              pdf_link: "https://www.stspcsr.com.tw/download/2021_zh.pdf",
              video_link: "https://www.stspcsr.com.tw/ppsx/zh/2021.ppsx",
            },
            {
              name: "2020",
              image: "2020.png",
              reader_link: "https://www.stspcsr.com.tw/ebook2020/",
              pdf_link: "https://www.stspcsr.com.tw/download/2020_zh.pdf",
              video_link: "https://www.stspcsr.com.tw/ppsx/zh/2020.ppsx",
            },
            {
              name: "2019",
              image: "2019.png",
              reader_link: "https://www.stspcsr.com.tw/ebook2019/",
              pdf_link: "https://www.stspcsr.com.tw/download/2019_zh.pdf",
              video_link: "https://www.stspcsr.com.tw/ppsx/zh/2019.ppsx",
            },
            {
              name: "2018",
              image: "2018.png",
              reader_link: "",
              pdf_link: "https://www.stspcsr.com.tw/download/2018_zh.pdf",
              video_link: "https://www.stspcsr.com.tw/ppsx/zh/2018.ppsx",
            },
            {
              name: "2017",
              image: "2017.png",
              reader_link: "",
              pdf_link: "https://www.stspcsr.com.tw/download/2017_zh.pdf",
              video_link: "",
            },
            {
              name: "2016",
              image: "2016.png",
              reader_link: "",
              pdf_link: "https://www.stspcsr.com.tw/download/2016_zh.pdf",
              video_link: "",
            },
            {
              name: "2015",
              image: "2015.jpg",
              reader_link: "",
              pdf_link: "https://www.stspcsr.com.tw/download/2015_zh.pdf",
              video_link: "",
            },
            {
              name: "2014",
              image: "2014.jpg",
              reader_link: "",
              pdf_link: "https://www.stspcsr.com.tw/download/2014_zh.pdf",
              video_link: "",
            },
            {
              name: "2013",
              image: "2013.jpg",
              reader_link: "",
              pdf_link: "https://www.stspcsr.com.tw/download/2013_zh.pdf",
              video_link: "",
            },
            {
              name: "101",
              image: "101.jpg",
              reader_link: "",
              pdf_link: "https://www.stspcsr.com.tw/download/2012_zh.pdf",
              video_link: "",
            },
            {
              name: "100",
              image: "100.jpg",
              reader_link: "",
              pdf_link: "https://www.stspcsr.com.tw/download/2011_zh.pdf",
              video_link: "",
            },
            {
              name: "99",
              image: "99.jpg",
              reader_link: "",
              pdf_link: "https://www.stspcsr.com.tw/download/99_zh.pdf",
              video_link: "",
            },
            {
              name: "98",
              image: "98.jpg",
              reader_link: "",
              pdf_link: "https://www.stspcsr.com.tw/download/98_zh.pdf",
              video_link: "",
            },
            {
              name: "97",
              image: "97.jpg",
              reader_link: "",
              pdf_link: "https://www.stspcsr.com.tw/download/97_zh.pdf",
              video_link: "",
            },
          ].map((i) => (
            <div className={style.download_section_item} key={i.name}>
              <div className={style.download_section_item_image_container}>
                <Image
                  src={`/images/report_download/zh/${i.image}`}
                  fill={true}
                  alt={`${i.name} cover photo`}
                />
              </div>
              <div>
                <h3>
                  {i.name === "2022"
                    ? "2022 南部科學園區永續發展目標自願檢視報告書"
                    : `${i.name}年科技部南部科學園區管理局永續報告書`}
                </h3>
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
          ))}
        </div>
      </div>
    </div>
  );
}
