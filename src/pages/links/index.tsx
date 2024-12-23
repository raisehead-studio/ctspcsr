import { useSearchParams } from "next/navigation";
import Link from "next/link";
import LinkIcon from "@mui/icons-material/Link";

import Breadcrumb from "../../components/Breadcrumb";
import SideMenu from "../../components/SideMenu";

import layout from "../layout.module.scss";
import style from "./styles.module.scss";

export default function Links() {
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
          path: "",
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
        <div className={layout.page_content}>
          <div className={layout.page_header}>
            <strong>Good Links</strong>
            <Breadcrumb />
          </div>
          <div className={style.links_container}>
            {[
              {
                title: "Global Reporting Initiative,GRI",
                path: "https://www.globalreporting.org/",
              },
              {
                title: "UN Sustainable Development Goals (SDGs)",
                path: "https://www.un.org/sustainabledevelopment/",
              },
              {
                title:
                  "Organization for Economic Co-operation and Development (OECD)",
                path: "https://www.oecd.org/",
              },
              {
                title:
                  "World Business Council For Sustainable Development (WBCSD)",
                path: "https://www.wbcsd.org/Programs/People-and-Society/Sustainable-Development-Goals/SDG-Sector-Roadmaps/Resources/SDG-Sector-Roadmaps",
              },
              {
                title: "United Nations Environment Programme (UNEP)",
                path: "https://www.unenvironment.org/",
              },
              {
                title: "International Organization for Standardization (ISO)",
                path: "https://www.iso.org/home.html",
              },
              {
                title: "Global Corporate Sustainability Awards (GCSA)",
                path: "https://globalcsaward.org/",
              },
              {
                title:
                  "Task Force on Climate- Related Financial Disclosure (TCFD)",
                path: "https://www.fsb-tcfd.org/",
              },
              {
                title: "SASB Standards",
                path: "https://www.sasb.org/",
              },
            ].map((i) => (
              <Link
                key={i.title}
                href={i.path}
                target="blank_"
                className={style.links_container_item}>
                <LinkIcon />
                {i.title}
              </Link>
            ))}
          </div>
        </div>
        <div className={style.page_sidemenu}>
          <SideMenu />
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
          <strong>好站相連</strong>
          <Breadcrumb />
        </div>
        <div className={style.links_container}>
          {[
            {
              f_id: "1",
              f_title: "行政院國家永續發展委員會",
              f_url: "https://ncsd.ndc.gov.tw/",
              f_image_path:
                "http://www.ctspcsr.com.tw/user_files/extra_links/01_%E8%A1%8C%E6%94%BF%E9%99%A2%E5%9C%8B%E5%AE%B6%E6%B0%B8%E7%BA%8C%E7%99%BC%E5%B1%95%E5%A7%94%E5%93%A1%E6%9C%83.png",
              f_order_by: "1",
              remark: "",
              create_date: "2017-10-18",
            },
            {
              f_id: "2",
              f_title: "臺灣證券交易所公司治理中心",
              f_url: "https://cgc.twse.com.tw/",
              f_image_path:
                "http://www.ctspcsr.com.tw/user_files/extra_links/02_%E8%87%BA%E7%81%A3%E8%AD%89%E5%88%B8%E4%BA%A4%E6%98%93%E6%89%80%E5%85%AC%E5%8F%B8%E6%B2%BB%E7%90%86%E4%B8%AD%E5%BF%83.png",
              f_order_by: "2",
              remark: "",
              create_date: "2017-10-18",
            },
            {
              f_id: "3",
              f_title: "臺灣永續能源研究基金會",
              f_url: "https://taise.org.tw/",
              f_image_path:
                "http://www.ctspcsr.com.tw/user_files/extra_links/03_%E8%87%BA%E7%81%A3%E6%B0%B8%E7%BA%8C%E8%83%BD%E6%BA%90%E7%A0%94%E7%A9%B6%E5%9F%BA%E9%87%91%E6%9C%83.png",
              f_order_by: "3",
              remark: "",
              create_date: "2017-10-18",
            },
            {
              f_id: "4",
              f_title: "中華民國企業永續發展協會",
              f_url: "http://www.bcsd.org.tw/",
              f_image_path:
                "http://www.ctspcsr.com.tw/user_files/extra_links/04_%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E4%BC%81%E6%A5%AD%E6%B0%B8%E7%BA%8C%E7%99%BC%E5%B1%95%E5%8D%94%E6%9C%83.png",
              f_order_by: "4",
              remark: "",
              create_date: "2017-10-18",
            },
            {
              f_id: "5",
              f_title: "行政院環境部綠色生活資訊網",
              f_url:
                "https://greenliving.moenv.gov.tw/GreenLife/Anonymous/LoginById.aspx",
              f_image_path:
                "http://www.ctspcsr.com.tw/user_files/extra_links/05_%E8%A1%8C%E6%94%BF%E9%99%A2%E7%92%B0%E4%BF%9D%E7%BD%B2%E7%B6%A0%E8%89%B2%E7%94%9F%E6%B4%BB%E8%B3%87%E8%A8%8A%E7%B6%B2.png",
              f_order_by: "5",
              remark: "",
              create_date: "2017-10-18",
            },
            {
              f_id: "6",
              f_title: "Global Reporting Initiative,GRI",
              f_url: "https://www.globalreporting.org/Pages/default.aspx",
              f_image_path:
                "http://www.ctspcsr.com.tw/user_files/extra_links/06_Global-Reporting-Initiative_GRI.png",
              f_order_by: "6",
              remark: "",
              create_date: "2017-10-18",
            },
            {
              f_id: "7",
              f_title: "聯合國永續發展目標_SDGs",
              f_url: "https://www.un.org/sustainabledevelopment/",
              f_image_path:
                "http://www.ctspcsr.com.tw/user_files/extra_links/07_%E8%81%AF%E5%90%88%E5%9C%8B%E6%B0%B8%E7%BA%8C%E7%99%BC%E5%B1%95%E7%9B%AE%E6%A8%99_SDGs.png",
              f_order_by: "7",
              remark: "",
              create_date: "2017-10-18",
            },
            {
              f_id: "8",
              f_title: "氣候變遷相關財務揭露_TCFD",
              f_url: "https://www.fsb-tcfd.org/",
              f_image_path:
                "http://www.ctspcsr.com.tw/user_files/extra_links/08_%E6%B0%A3%E5%80%99%E8%AE%8A%E9%81%B7%E7%9B%B8%E9%97%9C%E8%B2%A1%E5%8B%99%E6%8F%AD%E9%9C%B2_TCFD.png",
              f_order_by: "8",
              remark: "",
              create_date: "2017-10-18",
            },
            {
              f_id: "9",
              f_title: "TCSA 台灣永續獎",
              f_url: "https://tcsaward.org.tw/",
              f_image_path:
                "http://www.ctspcsr.com.tw/user_files/extra_links/09_TCSA.png",
              f_order_by: "9",
              remark: "",
              create_date: "2021-11-22",
            },
            {
              f_id: "10",
              f_title: "SASB Standards",
              f_url: "https://www.sasb.org/",
              f_image_path:
                "http://www.ctspcsr.com.tw/user_files/extra_links/10_SASB.png",
              f_order_by: "10",
              remark: "",
              create_date: "2021-11-22",
            },
          ].map((i) => (
            <Link
              key={i.f_id}
              href={i.f_url}
              target="blank_"
              className={style.links_container_item}>
              <LinkIcon />
              {i.f_title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
