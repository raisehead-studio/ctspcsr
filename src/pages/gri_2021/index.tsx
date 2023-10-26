import { useSearchParams } from "next/navigation";
import Image from "next/image";

import Breadcrumb from "../../components/Breadcrumb";
import SideMenu from "../../components/SideMenu";

import layout from "../layout.module.scss";

const Gri2021 = () => {
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
              style={{ width: "200px", padding: "5px 0px" }}>
              <Image src="/images/gri2021/en/1.png" fill={true} alt="1" />
            </div>
            <p>
              The current Universal Standards GRI 101, GRI 102, and GRI 103 are
              renamed GRI 1, GRI 2, and GRI 3.
            </p>
            <div
              className={layout.page_photo_container}
              style={{ width: "200px", padding: "5px 0px" }}>
              <Image src="/images/gri2021/en/2.png" fill={true} alt="2" />
            </div>
            <p>
              The current Standards GRI 103：Management Approach are renamed GRI
              3：Material Topics. Universal
            </p>
            <div
              className={layout.page_photo_container}
              style={{ width: "220px", padding: "5px 0px" }}>
              <Image src="/images/gri2021/en/3.png" fill={true} alt="3" />
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
              style={{ width: "320px", padding: "5px 0px" }}>
              <Image src="/images/gri2021/en/4.png" fill={true} alt="4" />
            </div>
            <p>
              Human rights and due diligence incorporated into the new GRI 2:
              General Disclosures.
            </p>
            <div
              className={layout.page_photo_container}
              style={{ width: "450px", padding: "5px 0px" }}>
              <Image src="/images/gri2021/en/5.png" fill={true} alt="5" />
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
              style={{ width: "320px", padding: "5px 0px" }}>
              <Image src="/images/gri2021/en/6.png" fill={true} alt="6" />
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
          <strong>GRI準則2021改版</strong>
          <Breadcrumb />
        </div>
        <div className={layout.page_description}>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;為強化永續資訊揭露標準，2021年10月全球永續性報告協會(Global
            Reporting Initiative – GRI)發布新通用準則2021(GRI Universal
            Standards 2021)
            ，並將於2023年1月1日生效。以下將會針對改版資訊進行介紹：
          </p>
          <div
            className={layout.page_photo_container}
            style={{ width: "130px", padding: "5px 0px" }}>
            <Image src="/images/gri2021/zh/1.png" fill={true} alt="1" />
          </div>
          <p>
            現行通用準則GRI 101、GRI 102、GRI 103，皆更名為GRI 1、GRI 2、GRI 3。
          </p>
          <div
            className={layout.page_photo_container}
            style={{ width: "170px", padding: "5px 0px" }}>
            <Image src="/images/gri2021/zh/2.png" fill={true} alt="2" />
          </div>
          <p>
            由原本GRI 103：管理方針(Management Approach) 更名為GRI
            3：重大主題(Material Topics)。
          </p>
          <div
            className={layout.page_photo_container}
            style={{ width: "350px", padding: "5px 0px" }}>
            <Image src="/images/gri2021/zh/3.png" fill={true} alt="3" />
          </div>
          <p>
            針對特定行業制定揭露準則，反映組織營運對環境、社會和經濟的重大影響，優先考量的行業別包括石油和天然氣、煤炭、農業、水產養殖和漁業等40個行業別。
          </p>
          <div className={layout.page_photo_container}>
            <Image src="/images/gri2021/zh/9.png" fill={true} alt="9" />
          </div>
          <div
            className={layout.page_photo_container}
            style={{ width: "220px", padding: "5px 0px" }}>
            <Image src="/images/gri2021/zh/4.png" fill={true} alt="4" />
          </div>
          <p>將人權與盡職調查納入新版GRI 2：一般揭露。</p>
          <div
            className={layout.page_photo_container}
            style={{ width: "300px", padding: "5px 0px" }}>
            <Image src="/images/gri2021/zh/5.png" fill={true} alt="5" />
          </div>
          <p>
            新通用準則 2021
            ，不再區分核心選項或全面選項，凡遵循GRI準則編制永續報告書者，將須揭露GRI
            2：一般揭露中的所有項目。
          </p>

          <div
            className={layout.page_photo_container}
            style={{ width: "80%", padding: "5px 0px" }}>
            <Image src="/images/gri2021/zh/7.png" fill={true} alt="7" />
          </div>
          <div
            className={layout.page_photo_container}
            style={{ width: "220px", padding: "5px 0px" }}>
            <Image src="/images/gri2021/zh/6.png" fill={true} alt="6" />
          </div>
          <p>
            原先定義報告書內容的4項報導原則與定義報告書品質的6項報導原則，於新版GRI
            通用準則：2021整併成僅8項的報導原則。
          </p>
          <div
            className={layout.page_photo_container}
            style={{ width: "80%", padding: "5px 0px" }}>
            <Image src="/images/gri2021/zh/8.png" fill={true} alt="8" />
          </div>
        </div>
      </div>
      <div className={layout.page_sidemenu}>
        <SideMenu menu={menu_zh} />
      </div>
    </div>
  );
};

export default Gri2021;
