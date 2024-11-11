import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import TabletAndroidIcon from "@mui/icons-material/TabletAndroid";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import IconButton from "@mui/material/IconButton";
import Swal from "sweetalert2";

import Breadcrumb from "../../components/Breadcrumb";
import SideMenu from "../../components/SideMenu";

import layout from "../layout.module.scss";
import style from "./styles.module.scss";

export default function ReportDownload() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<any[]>([]);
  const lang = searchParams.get("lang");

  const handleRedirect = (url: string) => () => {
    Swal.fire({
      confirmButtonColor: "#32b4c2",
      html: lang
        ? "<p style='padding-top:10px'>Please complete the survey before downloading.</p>"
        : "<p style='padding-top:10px'>下載報告書前，請填<a style='color:#32b4c2; text-decoration:underline' href='https://forms.gle/kxzyUP6eUqnRkkr38' target='_blank'>寫利害關係人問卷。</a></p>",
    }).then(() => {
      window.open(url, "_blank");
    });
  };

  useEffect(() => {
    if (lang) {
      setData([
        {
          name: "2023 Sustainability Report",
          image: "2023.png",
          reader_link: "https://ctspcsr.com.tw/ebook2023_en",
          pdf_link: "https://ctspcsr.com.tw/download/2023_en.pdf",
          video_link: "https://ctspcsr.com.tw/ppsx/en/2023.ppsx",
        },
        {
          name: "2021 Sustainability Report",
          image: "2021.png",
          reader_link: "",
          pdf_link: "https://ctspcsr.com.tw/download/2021_en.pdf",
          video_link: "",
        },
        {
          name: "2020 Sustainability Report",
          image: "2020.png",
          reader_link: "",
          pdf_link: "https://ctspcsr.com.tw/download/2020_en.pdf",
          video_link: "",
        },
        {
          name: "2019 Corporate Sustainability Report",
          image: "2019.png",
          reader_link: "",
          pdf_link: "https://ctspcsr.com.tw/download/2019_en.pdf",
          video_link: "",
        },
      ]);
    } else {
      setData([
        {
          name: "2023永續報告書",
          image: "2023.png",
          reader_link: "https://ctspcsr.com.tw/ebook2023",
          pdf_link: "https://ctspcsr.com.tw/download/2023_zh.pdf",
          video_link: "https://ctspcsr.com.tw/ppsx/zh/2023.ppsx",
        },
        {
          name: "2021永續報告書",
          image: "2021.png",
          reader_link: "",
          pdf_link: "https://ctspcsr.com.tw/download/2021_zh.pdf",
          video_link: "",
        },
        {
          name: "2020永續報告書",
          image: "2020.png",
          reader_link: "",
          pdf_link: "https://ctspcsr.com.tw/download/2020_zh.pdf",
          video_link: "",
        },
        {
          name: "2019永續發展社會責任報告書",
          image: "2019.png",
          reader_link: "",
          pdf_link: "https://ctspcsr.com.tw/download/2019_zh.pdf",
          video_link: "",
        },
        {
          name: "2018永續發展社會責任報告書",
          image: "2018.png",
          reader_link: "",
          pdf_link: "https://ctspcsr.com.tw/download/2018_zh.pdf",
          video_link: "",
        },
        {
          name: "2015永續發展社會責任報告書",
          image: "2015.png",
          reader_link: "",
          pdf_link: "https://ctspcsr.com.tw/download/2015_zh.pdf",
          video_link: "",
        },
      ]);
    }
  }, [lang]);

  return (
    <div className={layout.page_layout}>
      <div className={style.page_sidemenu}>
        <SideMenu />
      </div>
      <div className={layout.page_content}>
        <div className={layout.page_header}>
          <strong>{lang ? "Report Download" : "報告書下載"}</strong>
          <Breadcrumb />
        </div>
        <div className={style.download_section}>
          {data.map((i: any) => (
            <div className={style.download_section_item} key={i.name}>
              <div>
                <h3>{i.name}</h3>
              </div>
              <div className={style.download_section_item_inner_container}>
                <div className={style.download_section_item_image_container}>
                  <Image
                    src={`/images/report_download/${lang ? "en" : "zh"}/${
                      i.image
                    }`}
                    fill={true}
                    alt={`${i.name} cover photo`}
                  />
                </div>
                <div className={style.download_section_item_button_container}>
                  {i.reader_link && (
                    <IconButton onClick={handleRedirect(i.pdf_link)}>
                      <Link href={i.reader_link} target="_blank">
                        <div style={{ color: "#32b4c2" }}>
                          <TabletAndroidIcon
                            sx={{
                              fontSize: "40px",
                            }}
                          />
                          <p
                            style={{
                              fontSize: "15px",
                            }}>
                            {lang ? "Online Reader" : "線上閱讀"}
                          </p>
                        </div>
                      </Link>
                    </IconButton>
                  )}
                  {i.pdf_link && (
                    <IconButton onClick={handleRedirect(i.pdf_link)}>
                      <div style={{ color: "#cf4038" }}>
                        <PictureAsPdfIcon
                          sx={{
                            fontSize: "40px",
                          }}
                        />
                        <p
                          style={{
                            fontSize: "15px",
                          }}>
                          PDF
                        </p>
                      </div>
                    </IconButton>
                  )}
                  {i.video_link && (
                    <IconButton onClick={handleRedirect(i.video_link)}>
                      <div style={{ color: "#0f8441" }}>
                        <SmartDisplayIcon
                          sx={{
                            fontSize: "40px",
                          }}
                        />
                        <p
                          style={{
                            fontSize: "15px",
                          }}>
                          {lang ? "PPSX" : "播放檔"}
                        </p>
                      </div>
                    </IconButton>
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
