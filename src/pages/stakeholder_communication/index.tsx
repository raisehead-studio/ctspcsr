import { useSearchParams } from "next/navigation";
import Image from "next/image";

import Breadcrumb from "../../components/Breadcrumb";
import SideMenu from "../../components/SideMenu";

import layout from "../layout.module.scss";
import style from "./styles.module.scss";

export default function StakeholdersCommunication() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  const menu_en = [
    {
      title: "Message from the Director-General",
      path: "/message_director",
    },
    {
      title: "Introduction to STSP",
      path: "/about_stsp",
    },
    {
      title: "Vision and Roadmap",
      path: "/vision_and_blueprint",
    },
    {
      title: "Communication with Stakeholders",
      path: "/stakeholder_communication",
    },
    {
      title: "2022 Sustainability Management Performance",
      path: "/performance",
    },
  ];

  const menu_zh = [
    {
      title: "局長的話",
      path: "/message_director",
    },
    {
      title: "南科管理局簡介",
      path: "/about_stsp",
    },
    {
      title: "願景與藍圖",
      path: "/vision_and_blueprint",
    },
    {
      title: "利害關係人溝通",
      path: "/stakeholder_communication",
    },
    {
      title: "2022永續管理績效",
      path: "/performance",
    },
  ];

  if (lang) {
    return (
      <div className={layout.page_layout}>
        <div className={layout.page_content}>
          <div className={layout.page_header}>
            <strong>Communication with Stakeholders</strong>
            <Breadcrumb />
          </div>
          <div>
            <div className={layout.page_description}>
              <p>
                The seven major categories of stakeholders of STSP Bureau
                include Employees of the Bureau, Park Businesses, Trade
                Associations, Local Governments/Community Residents, Academic
                Institutions/Non-profit Organizations, Suppliers and Media.
                Corresponding and smooth communication channels and platforms
                have been established in accordance with the attributes and
                needs of each stakeholder to understand their needs and
                expectations for the development of STSP, so as to plan a
                sustainability policy of the overall park.
              </p>
            </div>
            <div className={layout.page_photo_container}>
              <Image
                src={"/images/stakeholder_communication/en/photo1.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className={layout.page_photo_container}>
              <Image
                src={"/images/stakeholder_communication/en/photo2.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className={layout.page_photo_container}>
              <Image
                src={"/images/stakeholder_communication/en/photo3.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className={layout.page_photo_container}>
              <Image
                src={"/images/stakeholder_communication/en/photo4.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className={layout.page_photo_container}>
              <Image
                src={"/images/stakeholder_communication/en/photo5.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className={layout.page_photo_container}>
              <Image
                src={"/images/stakeholder_communication/en/photo6.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className={layout.page_description}>
              <p>
                STSP Bureau attaches great importance to the communication with
                its stakeholders. Through the establishment of various websites,
                major information and news on the Southern Taiwan Science Park
                Official Website is released on both regular and irregular
                basis, providing related publications for the stakeholders to
                download and read. Through the use of charts and simple texts,
                readers can understand more easily the expectations, efforts,
                and performance in terms of sustainable management while
                providing real-time as well as correct information of the
                science park to the stakeholders. In addition, the English
                version of the VDR is also published for international exposure.
              </p>
            </div>
            <div className={layout.page_photo_container}>
              <Image
                src={"/images/stakeholder_communication/en/photo7.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className={layout.page_description}>
              <h4>Satisfaction Survey of the STSP</h4>
              <p>
                STSP Bureau conducts a satisfaction survey on park manufacturers
                every year. The content mainly focuses on 6 aspects, including
                the park image, park development resources, park service
                quality, overall satisfaction, compliant handling, and loyalty
                and trust. According to the 2022 survey results, the overall
                satisfaction of STSP scored 84.53 points, an increase compared
                with 83.74 points in 2021. Among all the aspects, park image
                scored the highest at 86.11 points. Indicators with significant
                drop in the scores compared with 2021 are the industrial and
                commercial service functions and the stability of power supply
                quality. The reason for the score drop in industrial and
                commercial service functions was mainly because of the lack of
                catering services in Kaohsiung Science Park, and convenience
                stores, cafes, compound restaurants have been successively
                introduced. For the indicator of the stability of power supply
                quality, the survey was conducted during the power outage
                incident in Taipower Xingda Power Plant on March 3, 2022. In
                this regard, STSP Bureau has held a major power incident meeting
                with Taiwan Power Company and the Allied Association for Science
                Park Industries. For the human error part, Taiwan Power Company
                has reviewed and improved the management, system and operation
                aspects to strengthen the quality of power supply and avoid
                accidents from reoccurrence. In addition, STSP Bureau has also
                established a LINE@ group, which will inform park manufacturers
                of the power supply status in a timely manner. In addition, the
                electrical equipment maintenance and the publicity of
                strengthening the high and low voltage testing were conducted at
                the same time. Overall, STSP Bureau has discussed the feedback
                of park manufacturer, set up improvement policies, continued to
                pay attention to the needs of the stakeholders and provided them
                with assistance and services.
              </p>
            </div>
            <div className={layout.page_description}>
              <h4>Grievance Channels</h4>
              <p>
                To listen to the voices of the stakeholders, the Bureau has
                established grievance channels. Among them, the
                Director-General’s mailbox is the one most people used for
                complaints, accounting for nearly 80% among all. When a
                complaint is received, classification is immediately made, and
                based on different business scope, the corresponding units have
                to respond to and handle it. All the letters from the public
                will be responded by the corresponding unit within three days,
                and the handling situation has to be reported to the first-level
                executives every month. In accordance with the prescriptions
                stipulated in the “Major Points of the Executive Yuan and its
                Subordinate Organs for Handling People’s Petition Cases”, when
                it requires interviews, hearings or investigations in the
                handling of general petition cases, it shall not take more than
                30 days. According to the statistics between January and
                December in 2022, there were a total of 406 petition cases,
                among which, 372 cases were handled through the
                Director-General’s mailbox while 34 were through external
                complaint letters. All of the complaints were fully responded
                and solved.
              </p>
              <ul className={style.skateholder_contact}>
                <li>
                  <p>
                    Tel: +886-6-5051-001 (Tainan Science Park);
                    +886-7-607-5545(Kaohsiung Science Park)
                  </p>
                </li>
                <li>
                  <p>Director’s email: service@stsp.gov.tw</p>
                </li>
                <li>
                  <p>
                    Director of Personnel Office complaints hotline :
                    +886-6-505-0848
                  </p>
                </li>
                <li>
                  <p>
                    STSP Bureau Address: No. 22, Nanke 3rd Rd., Xinshi Dist.,
                    Tainan City；No.23, Luke 5th Rd., Luzhu Dist., Kaohsiung
                    City
                  </p>
                </li>
                <li>
                  <p>
                    Accessible environment complaint hotline: +886-7-607-5545,
                    ext:7123; Contact person: Wen-Chien Chang
                  </p>
                </li>
              </ul>
            </div>
            <div className={layout.page_description}>
              <h4>Report of Public Integrity Incidents</h4>
              <ul className={style.skateholder_contact}>
                <li>
                  <p>
                    Tel：+886-6-5051001#3005、3002 (Civil Service Ethics Office)
                  </p>
                </li>
                <li>
                  <p>Email: ethics@stsp.gov.tw</p>
                </li>
              </ul>
            </div>
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
      <div className={layout.page_content}>
        <div className={layout.page_header}>
          <strong>利害關係人溝通</strong>
          <Breadcrumb />
        </div>
        <div>
          <div className={layout.page_description}>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局之七大利害關係人主要包括局內同仁、園區事業、同業公會、地方政府/社區居民、學術機構/非營利組織、供應商、媒體，依各利害關係人屬性及需求，建立對應且暢通的溝通管道與平台，以瞭解其需求及對南科園區發展的期許，以擘劃整體園區之永續政策。
            </p>
          </div>
          <div className={layout.page_description}>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局十分重視與利害關係人的溝通，通過架設各式網站，定期、不定期於「南部科學園區全球資訊網」發布重大訊息或各項新聞，提供文宣及刊物下載，使用圖表及簡單的文字呈現，讓閱讀者容易明瞭園區在永續經營的期望、努力與績效，同時將園區資訊即時、正確的傳達給利害關係人，並發行英文版永續發展目標自願檢視報告書，以期能展望國際。
            </p>
          </div>
          <div className={layout.page_photo_container}>
            <Image
              src={"/images/stakeholder_communication/zh/photo1.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className={layout.page_photo_container}>
            <Image
              src={"/images/stakeholder_communication/zh/photo2.png"}
              fill={true}
              alt="profile photo"
            />
            <Image
              src={"/images/stakeholder_communication/zh/photo4.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className={layout.page_description}>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局十分重視與利害關係人的溝通，通過架設各式網站，定期、不定期於「南部科學園區全球資訊網」發布重大訊息或各項新聞，提供文宣及刊物下載，使用圖表及簡單的文字呈現，讓閱讀者容易明瞭園區在永續經營的期望、努力與績效，同時將園區資訊即時、正確的傳達給利害關係人，並發行英文版永續發展目標自願檢視報告書，以期能展望國際。
            </p>
          </div>
          <div className={layout.page_photo_container}>
            <Image
              src={"/images/stakeholder_communication/zh/photo3.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className={layout.page_description}>
            <h4>園區滿意度調查</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局每年針對園區廠商進行滿意度調查，內容主要針對園區形象、園區發展資源、園區服務品質、整體滿意度、抱怨處理、忠誠信任，六大構面進行分析調查，2022年調查結果，南科整體滿意度為84.53分，較2021年83.74分成長，所有構面中以「園區形象」構面分數最高，達86.11分。分數較2021年顯著下降之指標為工商服務機能及供電品質穩定性，工商服務機能分數下降主因係高雄園區較缺乏餐飲服務，後續已陸續引進7-11、咖啡廳及複合式餐飲、智販機等；供電品質主要係調查期間適逢2022年3月3日台電興達發電廠停機事故，對此管理局已與台電公司及園區公會召開重大電力事故會議，針對人為操作疏失部分，台電公司已就管理面、制度面及操作面進行檢討及改善，以強化電力供應品質及避免事故再次發生，此外管理局亦已成立LINE@群組，將及時告知廠商供電狀況，同時辦理電氣設備保養及加強高低壓檢測宣導會。綜上，本局已探討園區廠商之滿意度回饋意見，訂定園區改善政策，持續關切利害關係人之需求並提供協助與服務。
            </p>
          </div>
          <div className={layout.page_description}>
            <h4>陳情管道</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局為傾聽利害關係人之聲音，廣設陳情管道，申訴管道中以局長信箱為最大宗，接獲陳情事件占總量近91.6%。當接獲申訴案件，即進行分類，針對不同業務，由各組室回應與處理。民眾來信皆依據陳情內容分由相關業務組室於三天內回覆，並固定每月將處理情形呈報一層長官瞭解。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局依據「行政院暨所屬各機關處理人民陳情案件要點」之規定，處理一般陳情案件，需要面談、聽證或調查時，期限以不超過三十日為原則，統計2022年1月至12月底共406件陳情案，局長信箱共計處理372件，外部申訴信函(人民陳情案件)50件，且所有案件均充份回應與解決。
            </p>
            <ul className={style.skateholder_contact}>
              <li>
                <p>
                  電話：+886-6-5051-001(臺南園區)；+886-7-607-5545(高雄園區)
                </p>
              </li>
              <li>
                <p>局長電子信箱：service@stsp.gov.tw</p>
              </li>
              <li>
                <p>人事室主任辦公室申訴專線：+886-6-505-0848</p>
              </li>
              <li>
                <p>
                  親赴南科管理局：臺南市新市區南科三路22號；高雄市路竹區路科五路23號
                </p>
              </li>
              <li>
                <p>
                  無障礙環境申訴專線：+886-7-607-5545ext:7123；承辦人：常文騫
                </p>
              </li>
            </ul>
          </div>
          <div className={layout.page_description}>
            <h4>民眾廉政事件通報</h4>
            <ul className={style.skateholder_contact}>
              <li>
                <p>電話：+886-6-5051001#3005、3002(政風室)</p>
              </li>
              <li>
                <p>電子郵件：ethics@stsp.gov.tw</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.page_sidemenu}>
        <SideMenu />
      </div>
    </div>
  );
}
