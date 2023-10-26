import { useSearchParams } from "next/navigation";
import Image from "next/image";

import Breadcrumb from "../../components/Breadcrumb";
import SideMenu from "../../components/SideMenu";

import layout from "../layout.module.scss";

const Governance3 = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  const menu_en = [
    {
      title: "CSR Learning",
      sub: [
        {
          title: "ESG Learning",
          sub: [
            {
              title: "Guide to Writing Report Documents",
              path: "/report_writing",
            },
            {
              title: "GRI Principle 2021",
              path: "/gri_2021",
            },
            // {
            //   title:
            //     "Corporate Governance 3.0: A Blueprint for Sustainable Development",
            //   path: "/governance_3",
            // },
          ],
        },
      ],
    },
  ];

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

  if (lang === "en") {
    return (
      <div className={layout.page_layout}>
        <div className={layout.page_content}>
          <div className={layout.page_header}>
            <strong>GRI Universal Standards 2021</strong>
            <Breadcrumb />
          </div>
          <div className={layout.page_description}>
            <p>
              In October 2021, the Global Reporting Initiative (GRI) released
              the new GRI Universal Standards 2021, which will take effect on
              January 1, 2023, to strengthen sustainability disclosure
              standards. The following will provide information on the
              revisions.
            </p>
            <div
              className={layout.page_photo_container}
              style={{ width: "130px", padding: "5px 0px" }}>
              <Image src="/images/gri2021/zh/1.png" fill={true} alt="1" />
            </div>
            <p>
              The current Universal Standards GRI 101, GRI 102, and GRI 103 are
              renamed GRI 1, GRI 2, and GRI 3.
            </p>
            <div
              className={layout.page_photo_container}
              style={{ width: "170px", padding: "5px 0px" }}>
              <Image src="/images/gri2021/zh/2.png" fill={true} alt="2" />
            </div>
            <p>
              The current Standards GRI 103：Management Approach are renamed GRI
              3：Material Topics. Universal
            </p>
            <div
              className={layout.page_photo_container}
              style={{ width: "350px", padding: "5px 0px" }}>
              <Image src="/images/gri2021/zh/3.png" fill={true} alt="3" />
            </div>
            <p>
              Develop disclosure guidelines for specific industries to reflect
              the significant environmental, social and economic impacts of an
              organization’s operations. Prioritized industries include 40
              industries including Oil and Gas, Coal, Agriculture, Aquaculture
              and Fishing Sectors.
            </p>
            <div className={layout.page_photo_container}>
              <Image src="/images/gri2021/en/9.png" fill={true} alt="9" />
            </div>
            <div
              className={layout.page_photo_container}
              style={{ width: "220px", padding: "5px 0px" }}>
              <Image src="/images/gri2021/zh/4.png" fill={true} alt="4" />
            </div>
            <p>
              Human rights and due diligence incorporated into the new GRI 2:
              General Disclosures.
            </p>
            <div
              className={layout.page_photo_container}
              style={{ width: "300px", padding: "5px 0px" }}>
              <Image src="/images/gri2021/zh/5.png" fill={true} alt="5" />
            </div>
            <p>
              The new Universal Standards 2021 will no longer distinguish
              between core or comprehensive options. The ESG Report prepared in
              accordance with the GRI Standards must disclose all items in GRI
              2: General Disclosures.
            </p>

            <div
              className={layout.page_photo_container}
              style={{ width: "80%", padding: "5px 0px" }}>
              <Image src="/images/gri2021/en/7.png" fill={true} alt="7" />
            </div>
            <div
              className={layout.page_photo_container}
              style={{ width: "220px", padding: "5px 0px" }}>
              <Image src="/images/gri2021/zh/6.png" fill={true} alt="6" />
            </div>
            <p>
              The 4 reporting principles that defined the content of the report
              and the 6 reporting principles that defined the quality of the
              report were consolidated into 8 reporting principles in the new
              GRI Universal Standards 2021.
            </p>
            <div
              className={layout.page_photo_container}
              style={{ width: "80%", padding: "5px 0px" }}>
              <Image src="/images/gri2021/en/8.png" fill={true} alt="8" />
            </div>
          </div>
        </div>
        <div className={layout.page_sidemenu}>
          <SideMenu menu={menu_en} />
        </div>
      </div>
    );
  }

  return (
    <div className={layout.page_layout}>
      <div className={layout.page_content}>
        <div className={layout.page_header}>
          <strong>公司治理3.0-永續發展藍圖</strong>
          <Breadcrumb />
        </div>
        <div className={layout.page_description}>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;為持續深化我國公司治理，提升企業永續發展，並營造健全永續發展(ESG)生態體系，強化我國資本市場國際競爭力，金管會宣布「公司治理3.0-永續發展藍圖」正式啟動。以3年為期，每年將依藍圖計畫實施情形進行滾動式修正，並引進國際規範與標準。
          </p>
          <div className={layout.page_photo_container}>
            <Image src="/images/governance_3/zh/1.png" fill={true} alt="1" />
          </div>
          <div className={layout.page_photo_container}>
            <Image src="/images/governance_3/zh/2.png" fill={true} alt="2" />
          </div>
          <div className={layout.page_photo_container}>
            <Image src="/images/governance_3/zh/3.png" fill={true} alt="3" />
          </div>
        </div>
      </div>
      <div className={layout.page_sidemenu}>
        <SideMenu menu={menu_zh} />
      </div>
    </div>
  );
};

export default Governance3;
