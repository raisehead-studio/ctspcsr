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
          <SideMenu menu={menu_en} />
        </div>
      </div>
    );
  }

  return (
    <div className={layout.page_layout}>
      <div className={layout.page_content}>
        <div className={layout.page_header}>
          <strong>好站相連</strong>
          <Breadcrumb />
        </div>
        <div className={style.links_container}>
          {[
            {
              title: "南科環安網",
              path: "https://stspesh.tw/",
            },

            {
              title: "GRI企業永續發展協會",
              path: "https://www.globalreporting.org/",
            },
            {
              title: "財團法人台灣永續能源研究基金會",
              path: "https://taise.org.tw/",
            },
            {
              title: "聯合國永續發展目標SDGs",
              path: "https://www.un.org/sustainabledevelopment/",
            },
            {
              title: "臺灣永續發展目標",
              path: "https://ncsd.ndc.gov.tw/Fore/AboutSDG",
            },
            {
              title: "ESG(環境、社會、公司治理)",
              path: "https://www.sustainalytics.com/",
            },
            {
              title: "氣候變遷相關財務揭露TCFD",
              path: "https://www.fsb-tcfd.org/",
            },
            {
              title: "可持續發展會計準則委員會SASB",
              path: "https://www.sasb.org/",
            },
            {
              title: "職業安全衛生法",
              path: "https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=N0060001",
            },
            {
              title: "臺南市政府勞工局",
              path: "https://web.tainan.gov.tw/labor/Default.aspx",
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
        <SideMenu menu={menu_zh} />
      </div>
    </div>
  );
}
