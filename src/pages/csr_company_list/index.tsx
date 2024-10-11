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
      公司官網: "https://esg.tsmc.com/zh-Hant/resources/ESG-data-hub?tab=reportbuilder",
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
      公司官網: "https://www.appliedmaterials.com/us/en/corporate-responsibility.html",
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
      公司官網: "https://tw.micron.com/about/environmental-social-governance/sustainability",
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
    {
      公司名稱: "和大工業股份有限公司中科分公司",
      所在園區: "台中園區",
      產業別: "精密機械",
      上市櫃狀況: "上市",
      發行年份: "2023",
      公司官網: "https://www.hota.com.tw/sustain-report.html",
    },
    {
      公司名稱: "橋椿金屬股份有限公司中科分公司",
      所在園區: "台中園區",
      產業別: "精密機械",
      上市櫃狀況: "上市",
      發行年份: "2023",
      公司官網: "http://www.sunspring.com.tw/stock.html",
    },
    {
      公司名稱: "程泰機械股份有限公司中科分公司",
      所在園區: "台中園區",
      產業別: "精密機械",
      上市櫃狀況: "上市",
      發行年份: "2022",
      公司官網: "https://www.goodwaycnc.com/exhtml_goodway/goodway_tw/publication/social/report.htm",
    },
    {
      公司名稱: "台灣迪恩士半導體科技股份有限公司台中分公司",
      所在園區: "台中園區",
      產業別: "精密機械",
      上市櫃狀況: "僑外資",
      發行年份: "2023",
      公司官網: "https://www.screen.co.jp/ir/annual",
    },
    {
      公司名稱: "千附精密股份有限公司",
      所在園區: "后里園區",
      產業別: "精密機械",
      上市櫃狀況: "上櫃",
      發行年份: "2023",
      公司官網: "https://www.cfprec.com.tw/Responsibility/CSR",
    },
    {
      公司名稱: "鐿鈦科技股份有限公司中科分公司",
      所在園區: "后里園區",
      產業別: "精密機械",
      上市櫃狀況: "上櫃",
      發行年份: "2023",
      公司官網: "http://ir.intai.com.tw/?act=corporatesocial&cmd=list",
    },
    {
      公司名稱: "瑞士商柏泰有限公司台灣分公司",
      所在園區: "后里園區",
      產業別: "精密機械",
      上市櫃狀況: "僑外資",
      發行年份: "2023",
      公司官網: "https://www.bossard.com/tw-zh-tw/about-us/sustainability/",
    },
    {
      公司名稱: "元翎精密工業股份有限公司",
      所在園區: "虎尾園區",
      產業別: "精密機械",
      上市櫃狀況: "上市",
      發行年份: "2023",
      公司官網: "https://www.twmosa.com/csr",
    },
    {
      公司名稱: "正崴精密工業股份有限公司中科分公司",
      所在園區: "后里園區",
      產業別: "電腦周邊",
      上市櫃狀況: "上市",
      發行年份: "2023",
      公司官網: "https://www.foxlink.com/web/%E4%BC%81%E6%A5%AD%E7%A4%BE%E6%9C%83%E8%B2%AC%E4%BB%BB/",
    },
    {
      公司名稱: "富喬工業股份有限公司雲林分公司",
      所在園區: "虎尾園區",
      產業別: "電腦周邊",
      上市櫃狀況: "上櫃",
      發行年份: "2023",
      公司官網: "http://www.ffg.com.tw/company9.asp",
    },
    {
      公司名稱: "三福氣體股份有限公司中科分公司",
      所在園區: "台中園區",
      產業別: "園區事業",
      上市櫃狀況: "僑外資",
      發行年份: "2023",
      公司官網: "https://www.sfchem.com.tw/zh-hant/page/10010461",
    },
    {
      公司名稱: "長春石油化學股份有限公司中科分公司",
      所在園區: "台中園區",
      產業別: "園區事業",
      上市櫃狀況: "公開發行",
      發行年份: "2023",
      公司官網: "https://www.ccp.com.tw/ccpweb.nsf/ProfileTW?OpenAgent&ProfileName=CSR",
    },
    {
      公司名稱: "佳能半導體設備股份有限公司中科分公司",
      所在園區: "台中園區",
      產業別: "園區事業",
      上市櫃狀況: "僑外資",
      發行年份: "2023",
      公司官網: "https://www.abilitycorp.com.tw/c/about_esg.php",
    },
    {
      公司名稱: "佳邦科技股份有限公司台中分公司",
      所在園區: "台中園區",
      產業別: "通訊",
      上市櫃狀況: "上櫃",
      發行年份: "2021",
      公司官網: "https://www.inpaq.com.tw/report.php",
    },
    {
      公司名稱: "達興材料股份有限公司",
      所在園區: "台中園區",
      產業別: "光電",
      上市櫃狀況: "上市",
      發行年份: "2023",
      公司官網: "https://www.daxinmat.com/?sn=1042&lang=zh-TW",
    },
    {
      公司名稱: "永勝光學股份有限公司",
      所在園區: "台中園區",
      產業別: "光電",
      上市櫃狀況: "僑外資",
      發行年份: "2023",
      公司官網: "https://esg.ginko.com.tw/",
    },
    {
      公司名稱: "台灣日東光學股份有限公司",
      所在園區: "台中園區",
      產業別: "光電",
      上市櫃狀況: "僑外資",
      發行年份: "2023",
      公司官網: "https://www.nitto.com/tw/en/sustainability/report/",
    },
    {
      公司名稱: "優貝克材料股份有限公司",
      所在園區: "台中園區",
      產業別: "光電",
      上市櫃狀況: "僑外資",
      發行年份: "2023",
      公司官網: "https://www.ulvac.co.jp/sustainability/report/",
    },
    {
      公司名稱: "台灣康寧顯示玻璃股份有限公司",
      所在園區: "台中園區",
      產業別: "光電",
      上市櫃狀況: "僑外資",
      發行年份: "2023",
      公司官網: "https://www.corning.com/tw/zh_tw/about-us/sustainability.html",
    },
    {
      公司名稱: "達運精密工業股份有限公司台中分公司",
      所在園區: "台中園區",
      產業別: "光電",
      上市櫃狀況: "上市",
      發行年份: "2023",
      公司官網: "https://www.darwinprecisions.com/zh-tw/responsibility.php",
    },
    {
      公司名稱: "友達晶材股份有限公司",
      所在園區: "后里園區",
      產業別: "光電",
      上市櫃狀況: "僑外資",
      發行年份: "",
      公司官網: "https://csr.auo.com/tw/download",
    },
    {
      公司名稱: "台灣小原光學材料股份有限公司",
      所在園區: "虎尾園區",
      產業別: "光電",
      上市櫃狀況: "僑外資",
      發行年份: "2023",
      公司官網: "https://www.ohara-inc.co.jp/cn/company/#report",
    },
    {
      公司名稱: "正瀚生技股份有限公司",
      所在園區: "中興園區",
      產業別: "生物科技",
      上市櫃狀況: "上市",
      發行年份: "2023",
      公司官網: "https://www.chbio.com.tw/csrreport/",
    },
    {
      公司名稱: "藥華醫藥股份有限公司台中分公司",
      所在園區: "台中園區",
      產業別: "生物科技",
      上市櫃狀況: "上市",
      發行年份: "2023",
      公司官網: "https://www.pharmaessentia-esg.com/tw/download/detail#section-1",
    },
    {
      公司名稱: "綠茵生技股份有限公司",
      所在園區: "台中園區",
      產業別: "生物科技",
      上市櫃狀況: "X",
      發行年份: "2023",
      公司官網: "https://www.greenynbio.com/esgreport/",
    }
  ]



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
