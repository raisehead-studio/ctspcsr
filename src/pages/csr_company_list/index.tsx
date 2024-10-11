import Link from "next/link";

import Breadcrumb from "../../components/Breadcrumb";
import SideMenu from "../../components/SideMenu";

import layout from "../layout.module.scss";
import style from "./styles.module.scss";

const CSRCompanyListPage = () => {
const data = [
  {
    公司名稱: "台灣積體電路製造股份有限公司中科廠",
    所在園區: "台中園區",
    產業別: "積體電路",
    上市櫃狀況: "上市",
    發行年份: "2023",
    公司官網:
      "https://esg.tsmc.com/zh-Hant/resources/ESG-data-hub?tab=reportbuilder",
  },
  {
    公司名稱: "矽品精密工業股份有限公司中科分公司",
    所在園區: "台中園區",
    產業別: "積體電路",
    上市櫃狀況: "X",
    發行年份: "2023",
    公司官網: "https://www.spil.com.tw/zh-TW/Sustainability/Download",
  },
  {
    公司名稱: "華邦電子股份有限公司",
    所在園區: "台中園區",
    產業別: "積體電路",
    上市櫃狀況: "上市",
    發行年份: "2023",
    公司官網: "https://esg.winbond.com/resource/download",
  },
  {
    公司名稱: "台灣應用材料股份有限公司台中分公司",
    所在園區: "台中園區",
    產業別: "積體電路",
    上市櫃狀況: "X",
    發行年份: "2023",
    公司官網:
      "https://www.appliedmaterials.com/us/en/corporate-responsibility.html",
  },
  {
    公司名稱: "帆宣系統科技股份有限公司中科分公司",
    所在園區: "台中園區",
    產業別: "積體電路",
    上市櫃狀況: "上市",
    發行年份: "2023",
    公司官網: "https://www.micb2b.com/responsibility/report/",
  },
  {
    公司名稱: "台灣美光記憶體股份有限公司",
    所在園區: "后里園區",
    產業別: "積體電路",
    上市櫃狀況: "僑外資",
    發行年份: "2023",
    公司官網:
      "https://tw.micron.com/about/environmental-social-governance/sustainability",
  },
  {
    公司名稱: "李長榮化學工業股份有限公司中科創新材料分公司",
    所在園區: "虎尾園區",
    產業別: "積體電路",
    上市櫃狀況: "僑外資",
    發行年份: "2022",
    公司官網: "https://www.lcycic.com/zh/sustainability",
  },
  {
    公司名稱: "鴻海精密工業股份有限公司台中園區分公司",
    所在園區: "台中園區",
    產業別: "精密機械",
    上市櫃狀況: "上市",
    發行年份: "2023",
    公司官網: "https://www.honhai.com/zh-tw/CSR/csr-report",
  },
  {
    公司名稱: "台達電子工業股份有限公司台中分公司",
    所在園區: "台中園區",
    產業別: "精密機械",
    上市櫃狀況: "上市",
    發行年份: "2023",
    公司官網: "https://esg.deltaww.com/CSR-Reports",
  },
  {
    公司名稱: "巨大機械工業股份有限公司",
    所在園區: "台中園區",
    產業別: "精密機械",
    上市櫃狀況: "上市",
    發行年份: "2023",
    公司官網: "https://esg.giantgroup-cycling.com/reportpage",
  },
  // 其餘資料按照此格式繼續...
];


  return (
    <div className={layout.page_layout}>
      <div className={layout.page_sidemenu}>
        <SideMenu />
      </div>
      <div className={layout.page_content}>
        <div className={layout.page_header}>
          <strong>園區廠商CSR</strong>
          <Breadcrumb />
        </div>
        <div>
          <div className={layout.page_description}>
            <div>
              <div className={style.note_container}>
                <p>註:統計至2023年10月</p>
              </div>
              <table className={style.table_container} cellPadding={0}>
                <thead>
                  <tr className={style.head_row}>
                    <td>產業別</td>
                    <td>廠商名稱</td>
                    <td>最新報告書年份</td>
                    <td>公司性質</td>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 !== 0 ? style.odd_row : style.even_row
                      }>
                      <td>{item["產業別"]}</td>
                      <td>
                        <Link
                          href={item["公司官網"] || ""}
                          target="_blank"
                          style={{
                            color: "#3281c1",
                          }}>
                          {item["公司名稱"]}
                        </Link>
                      </td>
                      {/* <td>
                        <Link href={item.link || ""} target="_blank">
                          {item.spc_title}

                          {item.note && (
                            <>
                              <br /> ({item.note})
                            </>
                          )}
                        </Link>
                      </td> */}
                      <td>{item["發行時間(年)"]}</td>
                      <td>{item["上市櫃狀況"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSRCompanyListPage;
