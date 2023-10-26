import { useSearchParams } from "next/navigation";
import Image from "next/image";

import Breadcrumb from "../../components/Breadcrumb";
import SideMenu from "../../components/SideMenu";

import layout from "../layout.module.scss";
import style from "./styles.module.scss";

const ReportWriting = () => {
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
          title: "上市櫃公司永續發展行動方案(維護中)",
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
            <strong>How to write a corporate sustainability report?</strong>
            <Breadcrumb />
          </div>
          <div className={layout.page_description}>
            <p>
              {`Corporate Sustainability Reports (CSR) are the information
              disclosures that companies respond to the issues concerned by
              stakeholders and fulfills its responsibilities, and implements the
              concept of sustainable management for the company, so as to
              demonstrate the commitment, performance and results of social
              responsibility, environmental protection and sustainable
              management. Environmental, Social, and Governance (ESG)proposes
              the principles of how to practice CSR, and evaluates the
              sustainable development indicators of enterprises from the
              perspective of environment, social and governance.`}
            </p>
            <p>
              {`The report, Corporate Social Responsibility Report and Corporate
              Sustainability Report alike, is a tool for an enterprise to
              communicate with its stakeholders, and it puts into consideration
              the corporation’s operation in economic, environmental, social and
              cultural aspects to enable long-term corporate development by
              formulating strategies and through employee development in a
              transparent and proper manner. Appropriate contents report should
              fully and transparent disclose of information.`}
            </p>
            <ul>
              <li>
                {`The framework, policy, and action plans for the implementation
                of the corporate social responsibility.`}
              </li>
              <li>
                {`Major stakeholders, topics of their concern and the boundaries
                of the topics.`}
              </li>
              <li>
                {`Results of performance and reviews of the corporation’s
                implementation of company governance, development of sustainable
                environment and the maintenance of social welfare.`}
              </li>
              <li>
                {`Directions, goals and management approaches for the future.`}
              </li>
            </ul>
            <div className={style.report_writing_photo_container}>
              {Array.from(Array(6).keys()).map((_, index) => (
                <Image
                  key={index}
                  src={`/images/report_writing/zh/${index + 1}.png`}
                  width={180}
                  height={60}
                  alt={`report_writing_photo_${index + 1}`}
                />
              ))}
            </div>
            <h4>{`1. Select guidelines for disclosure reference`}</h4>
            <p>
              {`There are fixed guidelines for the content and structure of
              sustainability reports for reference. The GRI Standards
              established by Global Reporting Initiative (GRI) is currently the
              most widely used global standard for corporate sustainability
              reporting. The content of corporate reports must at least include
              Information on the nature of the organization, material themes,
              and related shocks and how to manage them.`}
            </p>
            <div className={layout.page_photo_container}>
              <Image
                src="/images/report_writing/zh/7.png"
                fill={true}
                alt="7"
              />
            </div>
            <p>
              {`In 2021, GRI will release a new General Universal Standard 2021,
              which compared to GRI Standards, enhances the disclosure of
              information related to an organization's operations and the
              progress of an organization's transition to a low-carbon
              economy. The key points of this revision include the adjustment of
              the number and name, the revision of the Management Approach to
              the Material Topics, and the revision of the reporting principle
              to integrate the content of the current report with the quality
              principle, and the addition of sector standards guidelines to
              provide recommended disclosure standards.`}
            </p>
            <div className={layout.page_photo_container}>
              <Image
                src="/images/report_writing/zh/8.png"
                fill={true}
                alt="9"
              />
            </div>
            <h4>{`2. Identification and communication of stakeholders`}</h4>
            <p>
              {`Stakeholders refer to entities or individuals that are impacted by
              the corporate activities, products or services, and whose actions
              would also affect the company’s strategies or ability to achieve
              goals.`}
            </p>
            <p>
              {`Establish a complete list of stakeholders, then summarize the
              categories of stakeholders, evaluate their importance, and
              identify the most important stakeholders in the company's
              communication, and communicate through questionnaires, interviews,
              shareholder meetings, seminars or supplier audits, etc. Master its
              concerns.`}
            </p>
            <div className={layout.page_photo_container}>
              <Image
                src="/images/report_writing/zh/9.png"
                fill={true}
                alt="9"
              />
            </div>
            <h4>
              {`3. Identification of material topics and the setting of boundaries`}
            </h4>
            <p>
              {`Material topics refer to the topics valued by stakeholders and can
              have high degree of impact on the corporate operation and
              development. Companies can identify material topics based on their
              impact on economy, environment and society to evaluate the
              appropriateness of the current strategies and goals of sustainable
              development promotion. They can also incorporate the performance
              indicators related to the materials topics into the corporate
              performance management system to improve the communication
              efficiency of the report, enabling better credibility of the
              contents concerning organizational strategy and information, so as
              to reach the goal of continuous improvement and reaching the
              expectations of the stakeholders.`}
            </p>
            <div className={layout.page_photo_container}>
              <Image
                src="/images/report_writing/zh/10.png"
                fill={true}
                alt="10"
              />
            </div>
            <p>
              {`In GRI Standards, in addition to the complete identification of
              material topics and boundaries, they also reflect the
              organization’s significant impact on economic, environmental and
              social aspects, and report on the organization’s performance
              during the reporting period for the stakeholders to evaluate the
              organization. GRI Universal Standards 2021 considers various
              themes in sector standards and their impact, cross-references
              material topics with sector standards, and produces material
              topics in the report.`}
            </p>
            <div className={layout.page_photo_container}>
              <Image
                src="/images/report_writing/zh/11.png"
                fill={true}
                alt="11"
              />
            </div>
            <h4>4. Selection of disclosure indicators</h4>
            <p>
              {` GRI 102:2016 provides two levels of disclosure for "core" or
              "comprehensive" "option-based" reports, which organizations can
              choose according to their own circumstances. In the future GRI
              General Standard 2021 will consolidate, fine-tune, and streamline
              the number of items in the general disclosure framework, and no
              longer distinguish between core and comprehensive options, and all
              items in GRI 2: General Disclosure must be disclosed when
              compiling reports in compliance with the GRI standard.`}
            </p>
            <div className={layout.page_photo_container}>
              <Image
                src="/images/report_writing/zh/12.png"
                fill={true}
                alt="12"
              />
            </div>
            <h4>{`5. Data collection and content compilation`}</h4>
            <p>
              {`In addition to the disclosure in accordance with the GRI
              Standards, the sustainability report must also consider the
              reporting principles. The 4 reporting principles that defined the
              content of the report and the 6 reporting principles that defined
              the quality of the report were consolidated into 8 reporting
              principles in the new GRI Universal Standards 2021.`}
            </p>
            <div className={layout.page_photo_container}>
              <Image
                src="/images/report_writing/zh/13.png"
                fill={true}
                alt="13"
              />
              <span>
                {`A.Collection of internal and external issues of the organization`}
              </span>
            </div>
            <div className={layout.page_photo_container}>
              <Image
                src="/images/report_writing/zh/14.png"
                fill={true}
                alt="14"
              />
              <span>
                {`B.Collection of required information for disclosure from
                departments associated with the topics`}
              </span>
            </div>
            <div className={layout.page_photo_container}>
              <Image
                src="/images/report_writing/zh/15.png"
                fill={true}
                alt="15"
              />
              <span>
                {`C.Establishment of a report structure based on the annual axis
                of the organization`}
              </span>
            </div>
            <div className={layout.page_photo_container}>
              <Image
                src="/images/report_writing/zh/16.png"
                fill={true}
                alt="16"
              />
            </div>
            <h4>{`6. Internal and external verification of the report`}</h4>
            <p>
              {`The advantage of getting the verification from an impartial third
              party lies in the establishment of trust. A responsible company
              has to accurately communicate its strategies. Through the
              improvement of transparency of the report, the company shows its
              integrity and commitment to policy, impact and sustainable
              development to its stakeholders, which would be helpful in
              attracting investment and improving employee participation and
              customer confidence.`}
            </p>
            <div className={layout.page_photo_container}>
              <Image
                src="/images/report_writing/zh/17.png"
                fill={true}
                alt="17"
              />
            </div>
            <p>
              {`The British Standards Institution AccountAbility’s AA1000
              Assurance Standard (AA1000AS) was published in 2008, which is the
              only assurance standard that covers social responsibility and
              stakeholder participation and also the most commonly used standard
              for third-party verification of CSR Report among domestic
              companies. This standard requires assurance practitioners to
              evaluate the reporting party in accordance with the 4 principles
              of accountability, namely the inclusivity, materiality,
              responsiveness and Impact, focusing on the perspectives of social
              responsibility and stakeholder participation to ensure the
              performance quality of the organization’s corporate social
              responsibility report and related processes, systems as well as
              capabilities.`}
            </p>
            <div className={layout.page_photo_container}>
              <Image
                src="/images/report_writing/zh/18.png"
                fill={true}
                alt="18"
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

  return (
    <div className={layout.page_layout}>
      <div className={layout.page_content}>
        <div className={layout.page_header}>
          <strong>如何撰寫永續報告書</strong>
          <Breadcrumb />
        </div>
        <div className={layout.page_description}>
          <p>
            永續報告書(Corporate Sustainability Reports,
            CSR)，意旨企業回應與責任履行利害相關人所關切之議題，為企業進行永續經營的理念，以展現善盡社會責任、環境保護與永續經營之承諾、績效及成果所進行之資訊揭露。ESG為E(environmental)、S(social)、G(governance)，則提出如何實踐CSR的原則，從環境、社會、治理評估企業的永續發展指標。
          </p>
          <p>
            不論是企業社會責任報告書或永續報告書，皆是企業與利害相關者進行溝通之工具，考量企業在經濟、環境、社會中各面向的運營，制定策略並藉由透明與正當的員工發展方式使企業長期經營。一份適當的報告書應充分且透明的揭露資訊。
          </p>
          <ul>
            <li>實施企業社會責任之制度架構、政策與行動方案。</li>
            <li>主要利害關係人及其關注之主題與主題邊界。</li>
            <li>
              公司於推動公司治理、發展永續環境及維護社會公益之執行績效與檢討。
            </li>
            <li>未來之改進方向、目標與管理方針。</li>
          </ul>
          <div className={style.report_writing_photo_container}>
            {Array.from(Array(6).keys()).map((_, index) => (
              <Image
                key={index}
                src={`/images/report_writing/zh/${index + 1}.png`}
                width={180}
                height={60}
                alt={`report_writing_photo_${index + 1}`}
              />
            ))}
          </div>
          <h4>1. 選擇報告書揭露依循</h4>
          <p>
            永續報告書之內容與架構已有固定之指引可供參考，由全球報告倡議組織(Global
            Reporting Initiative, GRI)所制定之GRI
            Standards，為目前使用最廣泛的永續性報導的全球標準，要求企業報告書內容至少須包含組織性質、重大主題、及其相關衝擊與如何管理衝擊等相關資訊。
          </p>
          <div className={layout.page_photo_container}>
            <Image src="/images/report_writing/zh/7.png" fill={true} alt="7" />
          </div>
          <p>
            GRI於2021年發布新通用準則2021(GRI Universal Standards
            2021)，相較於GRI
            Standards，該準則增強與組織營運有關的資訊揭露，以及組織邁向低碳經濟轉型的進度。本次改版重點包含對編號及名稱進行調整，由管理方針修改為重大主題，並修正報導原則將現行報告書內容與品質原則整併，及新增行業準則以提供建議揭露的標準。
          </p>
          <div className={layout.page_photo_container}>
            <Image src="/images/report_writing/zh/8.png" fill={true} alt="9" />
          </div>
          <h4>2. 利害關係人鑑別與溝通</h4>
          <p>
            利害關係人是指對企業或企業營運、產品、服務，具有實際或潛在影響的實體或個人，其行動亦會影響企業推行策略與達成目標的能力。
          </p>
          <p>
            建立完整利害關係人清單，再歸納利害關係人類別，評估其重要性，以鑑別企業最主要溝通的利害關係人，透過問卷調查、訪談、股東會議、研討會或供應商稽核等方式進行溝通，掌握其關注議題。
          </p>
          <div className={layout.page_photo_container}>
            <Image src="/images/report_writing/zh/9.png" fill={true} alt="9" />
          </div>
          <h4>3. 重大主題鑑別與邊界設定</h4>
          <p>
            重大主題指受利害關係人重視，且對企業營運發展具有高度影響力的主題。企業可根據組織在經濟、環境和社會的影響，鑑別出重大主題，評估現行永續發展推動策略與目標的適切性，並將與重大主題相關的績效指標納入企業績效管理系統中，提升報告書的溝通效益，使報告書更能展現組織策略性和資訊的可信度，以達到持續改進並滿足利害關係人期待的目標。
          </p>
          <div className={layout.page_photo_container}>
            <Image
              src="/images/report_writing/zh/10.png"
              fill={true}
              alt="10"
            />
          </div>
          <p>
            GRI
            Standards除完整鑑別重大主題及其邊界外，應足以反映組織顯著的經濟、環境、及社會衝擊，並報導組織在報導期間的績效，使利害關係人得以評估。而GRI
            Universal Standards
            2021考量行業準則中的各項主題及其衝擊，將鑑別出的重大主題與行業準則交叉比對，產出報告書的重大主題。
          </p>
          <div className={layout.page_photo_container}>
            <Image
              src="/images/report_writing/zh/11.png"
              fill={true}
              alt="11"
            />
          </div>
          <h4>4. 選定揭露指標</h4>
          <p>
            GRI
            102：2016提供「核心」或「全面」兩種「依循選項」編撰報告的揭露程度，組織可視自身情況選擇。未來GRI通用準則2021，將一般揭露架構整併、微調及精簡項目數，不再區分核心選項或全面選項，遵循GRI準則編制報告書，須揭露GRI
            2：一般揭露中的所有項目。
          </p>
          <div className={layout.page_photo_container}>
            <Image
              src="/images/report_writing/zh/12.png"
              fill={true}
              alt="12"
            />
          </div>
          <h4>5. 資訊蒐集與報告書內容撰寫</h4>
          <p>
            永續報告書除依循GRI
            Standards揭露外，還須考量報告書的報導原則。新GRI通用準則2021將原先定義報告書內容的4項報導原則與品質的6項報導原則整併成僅8項的報導原則。
          </p>
          <div className={layout.page_photo_container}>
            <Image
              src="/images/report_writing/zh/13.png"
              fill={true}
              alt="13"
            />
            <span>A.蒐集組織內外部議題</span>
          </div>
          <div className={layout.page_photo_container}>
            <Image
              src="/images/report_writing/zh/14.png"
              fill={true}
              alt="14"
            />
            <span>B.向各主題所關聯之部門，蒐集報告書揭露所需資訊</span>
          </div>
          <div className={layout.page_photo_container}>
            <Image
              src="/images/report_writing/zh/15.png"
              fill={true}
              alt="15"
            />
            <span>C.依組織年度主軸建立報告書架構</span>
          </div>
          <div className={layout.page_photo_container}>
            <Image
              src="/images/report_writing/zh/16.png"
              fill={true}
              alt="16"
            />
          </div>
          <h4>6. 報告書內部或外部確認</h4>
          <p>
            經第三者公正單位查證的優勢在於建立信任，作為負責任的公司必須準確的溝通其策略，透過提高報告書的透明度，展現企業向利害關係人對於政策、衝擊及永續發展做出承諾之誠信，無論對於吸引投資、員工參與或客戶信心度提升都有助益。
          </p>
          <div className={layout.page_photo_container}>
            <Image
              src="/images/report_writing/zh/17.png"
              fill={true}
              alt="17"
            />
          </div>
          <p>
            由英國AccountAbility組織公布的AA
            1000:2018保證標準，為涵蓋社會責任與利害關係人參與部分之應用標準，亦為國內企業間最普遍應用之CSR報告書第三者查證標準，此標準要求查證人員針對報告方展現當責性原則標準的四大原則，即包容性、重大性、回應性與衝擊性進行評估，著重於社會責任與利害關係人參與觀點出發，以確保組織企業社會責任報告書及相關流程、系統及能力之績效品質。
          </p>
          <div className={layout.page_photo_container}>
            <Image
              src="/images/report_writing/zh/18.png"
              fill={true}
              alt="18"
            />
          </div>
        </div>
      </div>
      <div className={layout.page_sidemenu}>
        <SideMenu />
      </div>
    </div>
  );
};

export default ReportWriting;
