import Link from "next/link";

import Breadcrumb from "../../components/Breadcrumb";
import SideMenu from "../../components/SideMenu";

import layout from "../layout.module.scss";
import style from "./styles.module.scss";

const CSRCompanyListPage = () => {
  const data = [
    {
      公司名稱: "橋椿金屬股份有限公司",
      所在園區: "台中園區",
      產業別: "精密機械",
      上市櫃狀況: "上市",
      發行年份: "2024",
      公司官網: "https://www.sustaihub.com/reports/%E6%A9%8B%E6%A4%BF%E9%87%91%E5%B1%AC%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/6e4cd39b-4a9d-453c-beca-8ef84e46b1da/",
    },
    {
      公司名稱: "鴻海精密工業股份有限公司台中園區分公司",
      所在園區: "台中園區",
      產業別: "精密機械",
      上市櫃狀況: "上市",
      發行年份: "2024",
      公司官網: "https://www.honhai.com/zh-tw/CSR/csr-report",
    },
    {
      公司名稱: "成信實業股份有限公司中科分公司",
      所在園區: "台中園區",
      產業別: "園區事業",
      上市櫃狀況: "上市",
      發行年份: "2024",
      公司官網: "https://www.transcene.com.tw/esg/zh_TW",
    },
    {
      公司名稱: "長春石油化學股份有限公司中科分公司",
      所在園區: "台中園區",
      產業別: "園區事業",
      上市櫃狀況: "公開發行",
      發行年份: "2024",
      公司官網: "https://www.ccp.com.tw/ccpweb.nsf/ProfileTW?OpenAgent&ProfileName=CSR",
    },
    {
      公司名稱: "李長榮化學工業股份有限公司中科創新材料分公司",
      所在園區: "虎尾園區",
      產業別: "積體電路",
      上市櫃狀況: "僑外資",
      發行年份: "2024",
      公司官網: "https://www.lcycic.com/zh/sustainability",
    },
    {
      公司名稱: "正崴精密工業股份有限公司中科分公司",
      所在園區: "后里園區",
      產業別: "電腦周邊",
      上市櫃狀況: "上市",
      發行年份: "2024",
      公司官網: "https://www.foxlink.com/web/%e4%bc%81%e6%a5%ad%e7%a4%be%e6%9c%83%e8%b2%ac%e4%bb%bb-2/",
    },
    {
      公司名稱: "千附精密股份有限公司",
      所在園區: "二林園區",
      產業別: "光電",
      上市櫃狀況: "上櫃",
      發行年份: "2024",
      公司官網: "https://www.cfprec.com.tw/Responsibility/CSR",
    },
    {
      公司名稱: "瑞士商柏泰有限公司台灣分公司",
      所在園區: "后里園區",
      產業別: "精密機械",
      上市櫃狀況: "僑外資",
      發行年份: "2024",
      公司官網: "https://www.bossard.com/tw-zh-tw/about-us/sustainability/",
    },
    {
      公司名稱: "昱展新藥生技股份有限公司",
      所在園區: "台中園區",
      產業別: "生物科技",
      上市櫃狀況: "僑外資",
      發行年份: "2024",
      公司官網: "https://alarpharm.com/zh/%E6%8A%95%E8%B3%87%E4%BA%BA%E5%B0%88%E5%8D%80/%E4%BC%81%E6%A5%AD%E7%A4%BE%E6%9C%83%E8%B2%AC%E4%BB%BB/",
    },
    {
      公司名稱: "鐿鈦科技股份有限公司中科分公司",
      所在園區: "后里園區",
      產業別: "精密機械",
      上市櫃狀況: "上櫃",
      發行年份: "2024",
      公司官網: "http://ir.intai.com.tw/?act=corporatesocial&cmd=list",
    },
    {
      公司名稱: "長聖國際生技股份有限公司",
      所在園區: "台中園區",
      產業別: "生物科技",
      上市櫃狀況: "上櫃",
      發行年份: "2024",
      公司官網: "https://www.ever-supreme.com.tw/news_detail/306.htm",
    },
    {
      公司名稱: "帆宣系統科技股份有限公司中科分公司",
      所在園區: "台中園區",
      產業別: "積體電路",
      上市櫃狀況: "上市",
      發行年份: "2024",
      公司官網: "https://www.micb2b.com/responsibility/report/",
    },
    {
      公司名稱: "正瀚生技股份有限公司",
      所在園區: "中興園區",
      產業別: "生物科技",
      上市櫃狀況: "上市",
      發行年份: "2024",
      公司官網: "https://www.chbio.com/csrreport/",
    },
    {
      公司名稱: "光燿科技股份有限公司",
      所在園區: "后里園區",
      產業別: "光電",
      上市櫃狀況: "X",
      發行年份: "2024",
      公司官網: "https://www.optivtech.com/investor_show.php?icsn=1&isn=20",
    },
    {
      公司名稱: "拓凱實業股份有限公司",
      所在園區: "后里園區",
      產業別: "精密機械",
      上市櫃狀況: "僑外資",
      發行年份: "2024",
      公司官網: "http://www.topkey.com.tw/www/_chinese/04_ir/01_detail_04.php?sid=17",
    },
    {
      公司名稱: "達運精密工業股份有限公司台中分公司",
      所在園區: "台中園區",
      產業別: "光電",
      上市櫃狀況: "上市",
      發行年份: "2024",
      公司官網: "https://www.darwinprecisions.com/zh-tw/responsibility.php",
    },
    {
      公司名稱: "台達電子工業股份有限公司台中分公司",
      所在園區: "台中園區",
      產業別: "精密機械",
      上市櫃狀況: "上市",
      發行年份: "2024",
      公司官網: "https://esg.deltaww.com/CSR-Reports",
    },
    {
      公司名稱: "綠茵生技股份有限公司",
      所在園區: "台中園區",
      產業別: "生物科技",
      上市櫃狀況: "X",
      發行年份: "2024",
      公司官網: "https://www.greenynbio.com/esgreport/",
    },
    {
      公司名稱: "橙的電子股份有限公司",
      所在園區: "台中園區",
      產業別: "電腦周邊",
      上市櫃狀況: "上櫃",
      發行年份: "2024",
      公司官網: "https://www.orange-electronic.com/tw/download/113%E5%B9%B4%E5%BA%A6_%E6%A9%99%E7%9A%84%E9%9B%BB%E5%AD%90%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8_%E6%B0%B8%E7%BA%8C%E5%A0%B1%E5%91%8A%E6%9B%B8.pdf",
    },
    {
      公司名稱: "巨大機械工業股份有限公司",
      所在園區: "台中園區",
      產業別: "精密機械",
      上市櫃狀況: "上市",
      發行年份: "2024",
      公司官網: "https://esg.giantgroup-cycling.com/reportpage",
    },
    {
      公司名稱: "優貝克材料股份有限公司",
      所在園區: "台中園區",
      產業別: "光電",
      上市櫃狀況: "僑外資",
      發行年份: "2024",
      公司官網: "https://www.ulvac.co.jp/sustainability/report/",
    },
    {
      公司名稱: "矽品精密工業股份有限公司中科分公司",
      所在園區: "台中園區",
      產業別: "積體電路",
      上市櫃狀況: "X",
      發行年份: "2024",
      公司官網: "https://www.spilglobal.com/zh-TW/Sustainability/Download",
    },
    {
      公司名稱: "台灣小原光學材料股份有限公司",
      所在園區: "虎尾園區",
      產業別: "光電",
      上市櫃狀況: "僑外資",
      發行年份: "2025",
      公司官網: "https://www.ohara-inc.co.jp/cn/company/",
    },
    {
      公司名稱: "佳邦科技股份有限公司台中分公司",
      所在園區: "台中園區",
      產業別: "通訊",
      上市櫃狀況: "上櫃",
      發行年份: "2024",
      公司官網: "https://www.inpaq.com.tw/report.php",
    },
    {
      公司名稱: "台灣迪恩士半導體科技股份有限公司台中分公司",
      所在園區: "台中園區",
      產業別: "精密機械",
      上市櫃狀況: "僑外資",
      發行年份: "2024",
      公司官網: "https://www.screen.co.jp/ir/annual",
    },
    {
      公司名稱: "友達晶材股份有限公司",
      所在園區: "后里園區",
      產業別: "光電",
      上市櫃狀況: "僑外資",
      發行年份: "2024",
      公司官網: "https://csr.auo.com/tw/download",
    },
    {
      公司名稱: "永勝光學股份有限公司",
      所在園區: "台中園區",
      產業別: "生物科技",
      上市櫃狀況: "僑外資",
      發行年份: "2024",
      公司官網: "https://esg.ginko.com.tw/",
    },
    {
      公司名稱: "友威科技股份有限公司中科分公司",
      所在園區: "台中園區",
      產業別: "精密機械",
      上市櫃狀況: "上櫃",
      發行年份: "2024",
      公司官網: "https://www.uvat.com/ESGInfo.html",
    },
    {
      公司名稱: "富喬工業股份有限公司雲林分公司",
      所在園區: "虎尾園區",
      產業別: "電腦周邊",
      上市櫃狀況: "上櫃",
      發行年份: "2024",
      公司官網: "https://www.ffg.com.tw/company9.asp",
    },
    {
      公司名稱: "達興材料股份有限公司",
      所在園區: "台中園區",
      產業別: "光電",
      上市櫃狀況: "上市",
      發行年份: "2024",
      公司官網: "https://www.daxinmat.com/?sn=1042&lang=zh-TW",
    },
    {
      公司名稱: "台灣美光記憶體股份有限公司",
      所在園區: "后里園區",
      產業別: "積體電路",
      上市櫃狀況: "僑外資",
      發行年份: "2025",
      公司官網: "https://tw.micron.com/about/sustainability/sustainability-report",
    },
    {
      公司名稱: "佳能半導體設備股份有限公司中科分公司",
      所在園區: "台中園區",
      產業別: "園區事業",
      上市櫃狀況: "僑外資",
      發行年份: "2024",
      公司官網: "https://tw.abilitytw.com/esg/esg-report",
    },
    {
      公司名稱: "台灣精銳科技股份有限公司",
      所在園區: "台中園區",
      產業別: "精密機械",
      上市櫃狀況: "X",
      發行年份: "2024",
      公司官網: "https://www.apexrobot.com/download/investors/ESG/2023ESG.pdf",
    },
    {
      公司名稱: "台灣積體電路製造股份有限公司中科廠",
      所在園區: "台中園區",
      產業別: "積體電路",
      上市櫃狀況: "上市",
      發行年份: "2024",
      公司官網: "https://esg.tsmc.com/zh-Hant/resources/ESG-data-hub?tab=reports-documents",
    },
    {
      公司名稱: "藥華醫藥股份有限公司台中分公司",
      所在園區: "台中園區",
      產業別: "生物科技",
      上市櫃狀況: "上市",
      發行年份: "2024",
      公司官網: "https://www.pharmaessentia-esg.com/tw/download/detail#section-1",
    },
    {
      公司名稱: "三福氣體股份有限公司中科分公司",
      所在園區: "台中園區",
      產業別: "園區事業",
      上市櫃狀況: "僑外資",
      發行年份: "2024",
      公司官網: "https://www.sfchem.com.tw/zh-hant/page/10010461",
    },
    {
      公司名稱: "元翎精密工業股份有限公司",
      所在園區: "虎尾園區",
      產業別: "精密機械",
      上市櫃狀況: "上市",
      發行年份: "2024",
      公司官網: "https://www.twmosa.com/sustainability-report",
    },
    {
      公司名稱: "台灣應用材料股份有限公司台中分公司",
      所在園區: "台中園區",
      產業別: "積體電路",
      上市櫃狀況: "X",
      發行年份: "2024",
      公司官網: "https://www.appliedmaterials.com/us/en/corporate-responsibility/reports-and-policies.html",
    },
    {
      公司名稱: "玉晶光電股份有限公司",
      所在園區: "台中園區",
      產業別: "光電",
      上市櫃狀況: "上市",
      發行年份: "2024",
      公司官網: "https://www.gseo.com/tw/esg",
    },
    {
      公司名稱: "華邦電子股份有限公司",
      所在園區: "台中園區",
      產業別: "積體電路",
      上市櫃狀況: "上市",
      發行年份: "2024",
      公司官網: "https://esg.winbond.com/resource/download",
    },
    {
      公司名稱: "台灣日東光學股份有限公司",
      所在園區: "台中園區",
      產業別: "光電",
      上市櫃狀況: "僑外資",
      發行年份: "2025",
      公司官網: "https://www.nitto.com/tw/en/sustainability/report/",
    },
    {
      公司名稱: "台灣康寧顯示玻璃股份有限公司",
      所在園區: "台中園區",
      產業別: "光電",
      上市櫃狀況: "僑外資",
      發行年份: "2022",
      公司官網: "https://www.corning.com/tw/zh_tw/about-us/sustainability.html",
    },
    {
      公司名稱: "長園科技實業股份有限公司",
      所在園區: "台中園區",
      產業別: "光電",
      上市櫃狀況: "上櫃",
      發行年份: "2024",
      公司官網: "http://www.caec.com.tw/shareholder_tw.php?id=5720",
    },
    {
      公司名稱: "先進光電科技股份有限公司",
      所在園區: "台中園區",
      產業別: "光電",
      上市櫃狀況: "上櫃",
      發行年份: "2024",
      公司官網: "https://www.aoet.com.tw/jp/news",
    },
    {
      公司名稱: "程泰機械股份有限公司中科分公司",
      所在園區: "台中園區",
      產業別: "精密機械",
      上市櫃狀況: "上市",
      發行年份: "2024",
      公司官網: "https://www.goodwaycnc.com/tw/csr/csr.html",
    },
    {
      公司名稱: "和大工業股份有限公司中科分公司",
      所在園區: "台中園區",
      產業別: "精密機械",
      上市櫃狀況: "上市",
      發行年份: "2024",
      公司官網: "https://www.hota.com.tw/sustain-report.html",
    },
    {
      公司名稱: "亞崴機電股份有限公司台中分公司",
      所在園區: "台中園區",
      產業別: "精密機械",
      上市櫃狀況: "上市",
      發行年份: "2024",
      公司官網: "https://www.awea.com/awea_tw/publication/social/environment.htm",
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
                <p>註:統計至2025年9月</p>
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
                      <td>{item["發行年份"]}</td>
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
