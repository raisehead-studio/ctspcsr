import { useSearchParams } from "next/navigation";

import RunningNumbers from "../../components/RunningNumbers";
import Breadcrumb from "../../components/Breadcrumb";
import SideMenu from "../../components/SideMenu";

import layout from "../layout.module.scss";
import style from "./styles.module.scss";

export default function Performance() {
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

  return (
    <div className={layout.page_layout}>
      <div className={layout.page_content}>
        <div className={layout.page_header}>
          <strong>2022永續管理績效</strong>
          <Breadcrumb />
        </div>
        <div className={style.performance_table}>
          <div className={style.performance_table_grid_env}>
            <div className={style.p_header}>
              <strong>環境</strong>
            </div>
            <div className={`${style.p_container}   ${style.p_container_1}`}>
              <RunningNumbers
                n={93.19}
                c={"%"}
                to_fixed={2}
                is_currency={true}
                is_table={true}
              />
              <span>全園區事業廢棄物再利用率</span>
            </div>
            <div className={`${style.p_container}   ${style.p_container_2}`}>
              <div className={style.inner_row}>
                <RunningNumbers
                  n={6}
                  c_ahead={"節能"}
                  c={"家"}
                  to_fixed={0}
                  is_currency={true}
                  is_table={true}
                />
                、
                <RunningNumbers
                  n={6}
                  c_ahead={"節水"}
                  c={"家"}
                  to_fixed={0}
                  is_currency={true}
                  is_table={true}
                />
              </div>
              <span>園區事業輔導</span>
            </div>
            <div className={`${style.p_container}   ${style.p_container_3}`}>
              <RunningNumbers
                n={1828.09}
                c={"百萬公升"}
                to_fixed={2}
                is_currency={true}
                is_table={true}
              />
              <span>全園區回收水量</span>
            </div>
            <div className={`${style.p_container}   ${style.p_container_4}`}>
              <RunningNumbers
                n={100}
                c={"%"}
                to_fixed={0}
                is_currency={true}
                is_table={true}
              />
              <span>排放水質符合「放流水標準」</span>
            </div>
            <div className={`${style.p_container}    ${style.p_container_5}`}>
              <RunningNumbers
                n={4.29}
                c_ahead={"達"}
                c={"MW"}
                to_fixed={2}
                is_currency={true}
                is_table={true}
              />
              <span>裝設太陽能發電系統</span>
            </div>
            <div className={`${style.p_container}    ${style.p_container_6}`}>
              <div className={style.inner_row}>
                <RunningNumbers
                  n={14}
                  c={"場次"}
                  to_fixed={0}
                  is_currency={true}
                  is_table={true}
                />
                、
                <RunningNumbers
                  n={405}
                  c={"人次參與"}
                  to_fixed={0}
                  is_currency={true}
                  is_table={true}
                />
              </div>
              <span>辦理環境教育課程</span>
            </div>
            <div className={`${style.p_container}   ${style.p_container_7}`}>
              <div>
                <p
                  style={{
                    margin: "0px",
                    fontSize: "22px",
                    transform: "translateY(10px)",
                    fontWeight: "bold",
                  }}>
                  綠建築標章「鑽石級」最高等級
                </p>
              </div>
              <span>高雄園區取得生態社區標章續用認證</span>
            </div>
            <div className={`${style.p_container}   ${style.p_container_8}`}>
              <div className={style.inner_row}>
                <RunningNumbers
                  n={7}
                  c_ahead={"臺南園區共"}
                  c={"種"}
                  to_fixed={0}
                  is_currency={true}
                  is_table={true}
                />
                、
                <RunningNumbers
                  n={8}
                  c_ahead={"高雄園區共"}
                  c={"種"}
                  to_fixed={0}
                  is_currency={true}
                  is_table={true}
                />
              </div>
              <span>觀測到農委會公告之保育鳥類</span>
            </div>
          </div>
          <div className={style.performance_table_grid_social}>
            <div className={style.p_header}>
              <strong>社會</strong>
            </div>
            <div className={`${style.p_container}   ${style.p_container_1}`}>
              <div className={style.inner_row}>
                <RunningNumbers
                  n={48}
                  c_ahead={"共"}
                  c={"團"}
                  to_fixed={0}
                  is_currency={true}
                  is_table={true}
                />
                、
                <RunningNumbers
                  n={951}
                  c={"人次"}
                  to_fixed={0}
                  is_currency={true}
                  is_table={true}
                />
              </div>
              <span>國內外訪客到訪南科</span>
            </div>
            <div className={`${style.p_container}   ${style.p_container_2}`}>
              <RunningNumbers
                n={7}
                c={"場"}
                to_fixed={0}
                is_currency={true}
                is_table={true}
              />
              <span>南科新港社地方文化館舉辦展演</span>
            </div>
            <div className={`${style.p_container}   ${style.p_container_3}`}>
              <RunningNumbers
                n={100}
                c={"%"}
                to_fixed={0}
                is_currency={true}
                is_table={true}
              />
              <span>南科所屬園區之整體健康服務率</span>
            </div>
            <div className={`${style.p_container}   ${style.p_container_4}`}>
              <RunningNumbers
                n={80}
                c={"場次"}
                to_fixed={0}
                is_currency={true}
                is_table={true}
              />
              <span>推動「職場安全衛生臨場輔導」</span>
            </div>
            <div className={`${style.p_container}    ${style.p_container_5}`}>
              <RunningNumbers
                n={986}
                c={"場次"}
                to_fixed={0}
                is_currency={true}
                is_table={true}
              />
              <span>辦理勞動檢查(含職業安全衛生檢查及勞動條件檢查)</span>
            </div>
            <div className={`${style.p_container}    ${style.p_container_6}`}>
              <div className={style.inner_row}>
                <RunningNumbers
                  n={77}
                  c={"場次"}
                  to_fixed={0}
                  is_currency={true}
                  is_table={true}
                />
                、
                <RunningNumbers
                  n={1583}
                  c={"人次"}
                  c_ahead="累計受訓"
                  to_fixed={0}
                  is_currency={true}
                  is_table={true}
                />
              </div>
              <span>辦理職業災害模擬教育訓練</span>
            </div>
            <div className={`${style.p_container}   ${style.p_container_7}`}>
              <div className={style.inner_row}>
                <RunningNumbers
                  n={2}
                  c={"場次"}
                  to_fixed={0}
                  is_currency={true}
                  is_table={true}
                />
                、
                <RunningNumbers
                  n={46}
                  c={"家廠商參加"}
                  c_ahead="合計"
                  to_fixed={0}
                  is_currency={true}
                  is_table={true}
                />
              </div>
              <span>辦理「職場平權暨性騷擾防治研習會」</span>
            </div>
          </div>
          <div className={style.performance_table_grid_governance}>
            <div className={style.p_header}>
              <strong>治理</strong>
            </div>
            <div className={`${style.p_container}   ${style.p_container_1}`}>
              <div
                className={style.inner_row}
                style={{ flexDirection: "column", alignItems: "center" }}>
                <RunningNumbers
                  n={4833.74}
                  c_ahead={"達"}
                  c={"億元 ,"}
                  to_fixed={2}
                  is_currency={true}
                  is_table={true}
                  is_trillion={true}
                />

                <RunningNumbers
                  n={35.48}
                  c={"人次"}
                  c_ahead="成長"
                  to_fixed={2}
                  is_currency={true}
                  is_table={true}
                />
              </div>
              <span>全年營業額</span>
            </div>
            <div className={`${style.p_container}   ${style.p_container_2}`}>
              <RunningNumbers
                n={272}
                c_ahead="達"
                c={"家"}
                to_fixed={0}
                is_currency={true}
                is_table={true}
              />
              <span>累計有效核准廠商</span>
            </div>
            <div className={`${style.p_container}   ${style.p_container_3}`}>
              <div className={style.inner_row}>
                <RunningNumbers
                  n={30}
                  c_ahead="引進"
                  c={"家"}
                  to_fixed={0}
                  is_currency={true}
                  is_table={true}
                />
                、
                <RunningNumbers
                  n={558.07}
                  c={"億元"}
                  to_fixed={2}
                  is_currency={true}
                  is_table={true}
                />
              </div>
              <span>新廠商、投資金額</span>
            </div>
            <div className={`${style.p_container}   ${style.p_container_4}`}>
              <p
                style={{
                  margin: "0px",
                  fontSize: "22px",
                  transform: "translateY(10px)",
                  fontWeight: "bold",
                }}>
                高雄園區管1新商圈開幕
              </p>
              <span>提升園區從業人員生活便利性</span>
            </div>
            <div className={`${style.p_container}    ${style.p_container_5}`}>
              <div className={style.inner_row}>
                <RunningNumbers
                  n={1}
                  c={"場"}
                  to_fixed={0}
                  is_currency={true}
                  is_table={true}
                />
                ,
                <RunningNumbers
                  n={100}
                  c={"人次以上"}
                  c_ahead="參與人數"
                  to_fixed={0}
                  is_currency={true}
                  is_table={true}
                />
              </div>

              <span>辦理反貪活動廉政宣導</span>
            </div>
            <div className={`${style.p_container}    ${style.p_container_6}`}>
              <div className={style.inner_row}>
                <RunningNumbers
                  n={6864}
                  c={"小時"}
                  to_fixed={0}
                  is_currency={true}
                  is_table={true}
                />
                、
                <RunningNumbers
                  n={42}
                  c={"小時/人"}
                  c_ahead="平均"
                  to_fixed={0}
                  is_currency={true}
                  is_table={true}
                />
              </div>
              <span>南科管理局人員總訓練時數</span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.page_sidemenu}>
        <SideMenu />
      </div>
    </div>
  );
}
