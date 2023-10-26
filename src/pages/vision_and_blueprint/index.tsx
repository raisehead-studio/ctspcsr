import { useSearchParams } from "next/navigation";
import Image from "next/image";

import Breadcrumb from "../../components/Breadcrumb";
import SideMenu from "../../components/SideMenu";

import layout from "../layout.module.scss";
import style from "./styles.module.scss";

export default function VisionAndBlueprint() {
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
            <strong>Vision and Roadmap</strong>
            <Breadcrumb />
          </div>
          <div>
            <div className={layout.page_description}>
              <h4>Vision(Establishment Purpose)</h4>
              <p>
                The purpose of the establishment of the science park is to
                establish a good development base for high-tech industry,
                balance regional development, and promote industrial upgrading.
                STSPB regards “Promoting the high-tech industrial cluster in
                Southern Taiwan for the construction of a Center-Satellite
                System” as its mission, and further expands its influence
                outward, striving to promote the balanced development of
                different aspects of the society. The vision of sustainable
                development of STSP is “Generating the kinetic energy in the
                park, Expanding the industrial cluster, Lean and high-quality
                services to ensure sustainable operation, Creating a friendly
                environment and Attaching importance to the value of Production,
                Living, Ecology, and Life”, and stepping toward the goal of Net
                Zero Emissions by 2050, constructing innovative, inclusive, and
                sustainable technological visions.
              </p>
            </div>
            <div className={layout.page_description}>
              <h4>
                Process and Results of T-SDGs Material Core Goal Identification
              </h4>
              <p>
                To be in line with the spirit of universal participation and
                inclusiveness in 2030 Agenda for Sustainable Development, STSP
                Bureau distributed questionnaire to its stakeholders for the
                collection of opinions, combined with the views of the internal
                management, the STSP Bureau’s T-SDGs material core goals were
                identified in a systematic analysis mode.
              </p>
            </div>
            <div className={layout.page_photo_container}>
              <Image
                src={"/images/vision_and_blueprint/en/photo1.png"}
                fill={true}
                alt="photo1"
              />
              <Image
                src={"/images/vision_and_blueprint/en/photo5.png"}
                fill={true}
                alt="photo5"
              />
            </div>
            <div className={layout.page_photo_container}>
              <Image
                src={"/images/vision_and_blueprint/en/photo2.png"}
                fill={true}
                alt="photo1"
              />
            </div>
            <div className={layout.page_photo_container}>
              <Image
                src={"/images/vision_and_blueprint/en/photo3.png"}
                fill={true}
                alt="photo3"
              />
              <Image
                src={"/images/vision_and_blueprint/en/photo6.png"}
                fill={true}
                alt="photo6"
              />
            </div>
            <div className={layout.page_description}>
              <h4>Administration</h4>
              <p>
                The major contributions of STSP Bureau to T-SDGs are cultivation
                resources, economic development, environmental management,
                renewable energy, urban and rural development, and climate
                action, which corresponded to the core goals of 1, 4, 8, 17, 6,
                12, 7, 11, and 13. Based on the specific policy content that
                corresponded to the goals, the 5 major promotion directions of
                “industrial upgrading”, “resources linkage”, “safe employment”,
                “carbon cap”, and “ecological community” were developed.
              </p>
            </div>
            <div className={layout.page_photo_container}>
              <Image
                src={"/images/vision_and_blueprint/en/photo4.png"}
                fill={true}
                alt="photo1"
              />
            </div>
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
          <strong>願景與藍圖</strong>
          <Breadcrumb />
        </div>
        <div>
          <div className={layout.page_description}>
            <h4>願景</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;科學園區設立的宗旨為建立良好的高科技產業發展基地，平衡區域發展，促進產業升級，南科管理局以「推動南部地區高科技產業聚落，建構高科技中衛體系」為使命，更進一步將自身影響力向外擴散，戮力促進社會各面相平衡發展，並以「開創園區動能，壯大產業聚落、精實優質服務，確保永續營運、營造友善環境，重視四生價值」作為永續發展願景，並邁向2050淨零，建構創新、包容及永續的科技願景。
            </p>
          </div>
          <div className={layout.page_description}>
            <h4>T-SDGs重大核心目標鑑別流程及結果</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;為符合聯合國2030年永續發展議程之「普遍參與性及包容性」精神，南科管理局採取向利害關係人發放問卷的方式收集各方意見，並結合內部管理階層之觀點，以系統化的分析模式鑑別出南科管理局之臺灣永續發展目標(T-SDGs)重大核心目標。
            </p>
          </div>
          <div className={layout.page_photo_container}>
            <Image
              src={"/images/vision_and_blueprint/zh/photo1.png"}
              fill={true}
              alt="photo1"
            />
          </div>
          <div className={layout.page_photo_container}>
            <Image
              src={"/images/vision_and_blueprint/zh/photo2.png"}
              fill={true}
              alt="photo1"
            />
          </div>
          <div className={layout.page_photo_container}>
            <Image
              src={"/images/vision_and_blueprint/zh/photo3.png"}
              fill={true}
              alt="photo1"
            />
            <Image
              src={"/images/vision_and_blueprint/zh/photo5.png"}
              fill={true}
              alt="photo1"
            />
          </div>
          <div className={layout.page_description}>
            <h4>施政主軸</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局對於臺灣永續發展目標之主要貢獻為培育資源、經濟發展、環境管理、再生能源、城鄉發展、氣候行動等方面，主要涉及之核心目標為1、4、8、17、6、12、7、11、13，並以其項下所對應之具體政策內容，據以擬定「產業升級」、「資源串聯」、「安心就業」、「總量管制」、「生態社區」等5大推動方向。
            </p>
          </div>
          <div className={layout.page_photo_container}>
            <Image
              src={"/images/vision_and_blueprint/zh/photo4.png"}
              fill={true}
              alt="photo1"
            />
          </div>
        </div>
      </div>
      <div className={style.page_sidemenu}>
        <SideMenu menu={menu_zh} />
      </div>
    </div>
  );
}
