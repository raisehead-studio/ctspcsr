import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Breadcrumb from "../../components/Breadcrumb";
import SideMenu from "../../components/SideMenu";

import layout from "../layout.module.scss";
import style from "./styles.module.scss";

export default function CSRCompanyListPage() {
  const menu_zh = [
    {
      title: "ESG學習專區",
      sub: [
        {
          title: "如何撰寫報告書",
          path: "/report_writing",
        },
        {
          title: "GRI準則2021改版",
          path: "/gri_2021",
        },
        {
          title: "公司治理3.0-永續發展藍圖",
          path: "/governance_3",
        },
        {
          title: "上市櫃公司永續發展行動方案",
          path: "/practical_plan",
        },
      ],
    },
  ];

  return (
    <div className={layout.page_layout}>
      <div className={layout.page_content}>
        <div className={layout.page_header}>
          <strong>上市櫃公司永續發展行動方案</strong>
          <Breadcrumb />
        </div>
        <div>
          <div className={layout.page_description}>
            <p>
              配合國家2050淨零碳排路徑，金管會業於2022年3月3日發布「上市櫃公司永續發展路徑圖」。於公司治理藍圖與永續發展路徑圖所建構的基礎下，以「治理」、「透明」、「數位」、「創新」四大主軸，建構五大面向，協助上市櫃公司達成永續發展目標，提升國際競爭力。
            </p>
          </div>
          <div className={layout.page_photo_container}>
            <Image
              src={"/images/practical_plan/zh/photo1.png"}
              fill={true}
              alt="photo1"
            />
          </div>
          <div className={style.practical_plan_content}>
            <div className={`${layout.page_description} ${style.section1}`}>
              <Image
                src={"/images/practical_plan/zh/photo3.png"}
                width={150}
                height={42}
                alt="photo3"
              />
              <ul>
                <li>推動上市櫃公司設定減碳目標、策略及具體行動計畫</li>
                <li>協助建置溫室氣體減量額度交易機制</li>
                <li>鼓勵企業揭露溫室氣體範疇三資訊</li>
                <li>鼓勵企業發行綠色債券及可持續發展連結債券等永續發展債券</li>
              </ul>
            </div>
            <div className={`${layout.page_description} ${style.section2}`}>
              <Image
                src={"/images/practical_plan/zh/photo4.png"}
                width={190}
                height={43}
                alt="photo4"
              />
              <ul>
                <li>強化獨立董事 及審計委員會職能</li>
                <li>推動上市櫃公司董事性別多元化</li>
                <li>推動興櫃公司採候選人提名制</li>
                <li>推動薪酬合理化</li>
                <li>推動上市櫃公司設置永續委員會</li>
              </ul>
            </div>
            <div className={`${layout.page_description} ${style.section3}`}>
              <Image
                src={"/images/practical_plan/zh/photo5.png"}
                width={195}
                height={35}
                alt="photo5"
              />
              <ul>
                <li>擴大永續資訊</li>
                <li>提升永續資訊品質</li>
                <li>研議推動ISSB永續準則</li>
              </ul>
            </div>
            <div className={`${layout.page_description} ${style.section4}`}>
              <Image
                src={"/images/practical_plan/zh/photo6.png"}
                width={190}
                height={35}
                alt="photo6"
              />
              <ul>
                <li>提前上傳股東會議事手冊及年報</li>
                <li>強化大量持股資訊揭露</li>
                <li>精進投資人關係平台</li>
                <li>引導機構投資人進行共同議合</li>
                <li>研議設立投票顧問機構</li>
                <li>研議鼓勵公司備置實質受益人資料</li>
              </ul>
            </div>
            <div className={`${layout.page_description} ${style.section5}`}>
              <Image
                src={"/images/practical_plan/zh/photo7.png"}
                width={220}
                height={35}
                alt="photo7"
              />
              <ul>
                <li>建置永續報告書數位平台</li>
                <li>精進ESG資料庫</li>
                <li>研議建置ESG評鑑</li>
                <li>編製ESG相關指數</li>
                <li>建置ESG商品資訊</li>
                <li>建置宣導專區</li>
              </ul>
            </div>
          </div>
          <div
            className={layout.page_photo_container}
            style={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "flex-start",
              alignItems: "flex-start",
            }}>
            <Image
              src={"/images/practical_plan/zh/photo8.png"}
              width={220}
              height={30}
              alt="photo8"
              style={{ width: "100px" }}
            />
            <Image
              src={"/images/practical_plan/zh/photo2.png"}
              fill={true}
              alt="photo2"
            />
          </div>
        </div>
      </div>
      <div className={layout.page_sidemenu}>
        <SideMenu />
      </div>
    </div>
  );
}
