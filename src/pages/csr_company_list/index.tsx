import Link from "next/link";

import Breadcrumb from "../../components/Breadcrumb";
import SideMenu from "../../components/SideMenu";

import layout from "../layout.module.scss";
import style from "./styles.module.scss";

const CSRCompanyListPage = () => {
  const data = [
    {
      公司名稱: "台灣積體電路製造股份有限公司中科廠",
      所在園區: "臺中園區",
      產業別: "積體電路",
      上市櫃狀況: "上市",
      登記資本額: "280,500,000,000",
      "實收資本額(元)": "259,303,804,580",
      "發行時間(年)": "2022",
      公司官網: "https://www.tsmc.com/csr/ch/resources/documents.html",
      備註: "",
    },
    {
      公司名稱: "華邦電子股份有限公司",
      所在園區: "臺中園區",
      產業別: "積體電路",
      上市櫃狀況: "上市",
      登記資本額: "67,000,000,000",
      "實收資本額(元)": "39,800,001,930",
      "發行時間(年)": "2022",
      公司官網:
        "https://www.winbond.com/hq/about-winbond/csr-new/downloads/?__locale=zh_TW",
      備註: "",
    },
    {
      公司名稱: "台灣美光記憶體股份有限公司",
      所在園區: "后里園區",
      產業別: "積體電路",
      上市櫃狀況: "僑外資",
      登記資本額: "45,000,000,000",
      "實收資本額(元)": "34,481,950,550",
      "發行時間(年)": "2022",
      公司官網: "https://tw.micron.com/",
      備註: "https://tw.micron.com/about/our-commitment/operating-thoughtfully/sustainability",
    },
    {
      公司名稱: "台達電子工業股份有限公司台中分公司",
      所在園區: "臺中園區",
      產業別: "機密機械",
      上市櫃狀況: "上市",
      登記資本額: "40,000,000,000",
      "實收資本額(元)": "25,975,433,290",
      "發行時間(年)": "2022",
      公司官網: "https://esg.deltaww.com/",
      備註: "",
    },
    {
      公司名稱: "矽品精密工業股份有限公司中科分公司",
      所在園區: "臺中園區",
      產業別: "積體電路",
      上市櫃狀況: "公開發行",
      登記資本額: "36,000,000,000",
      "實收資本額(元)": "33,917,488,780",
      "發行時間(年)": "2022",
      公司官網: "https://www.spil.com.tw/zh-TW/Sustainability/Download",
      備註: "",
    },
    {
      公司名稱: "友達晶材股份有限公司",
      所在園區: "后里園區",
      產業別: "光電",
      上市櫃狀況: "僑外資",
      登記資本額: "15,000,000,000",
      "實收資本額(元)": "4,186,205,890",
      "發行時間(年)": "2022",
      公司官網: "http://www.auocrystal.com/CSR.php",
      備註: "https://csr.auo.com/tw/download?category=1",
    },
    {
      公司名稱: "台灣康寧顯示玻璃股份有限公司",
      所在園區: "臺中園區",
      產業別: "光電",
      上市櫃狀況: "僑外資",
      登記資本額: "11,397,366,000",
      "實收資本額(元)": "11,397,366,000",
      "發行時間(年)": "2021",
      公司官網: "https://www.corning.com/tw/zh_tw.html",
      備註: "https://www.corning.com/tw/zh_tw/about-us/sustainability.html",
    },
    {
      公司名稱: "達運精密工業股份有限公司台中分公司",
      所在園區: "臺中園區",
      產業別: "光電 ",
      上市櫃狀況: "上市",
      登記資本額: "8,500,000,000",
      "實收資本額(元)": "6,655,551,140",
      "發行時間(年)": "2022",
      公司官網: "https://www.darwinprecisions.com/zh-tw/responsibility.php",
      備註: "",
    },
    {
      公司名稱: "富喬工業股份有限公司雲林分公司",
      所在園區: "虎尾園區",
      產業別: "電腦周邊  ",
      上市櫃狀況: "上櫃",
      登記資本額: "6,000,000,000",
      "實收資本額(元)": "4,329,464,980",
      "發行時間(年)": "2022",
      公司官網: "http://www.ffg.com.tw/contact-02.asp#c3",
      備註: "http://www.ffg.com.tw/company9.asp",
    },
    {
      公司名稱: "正崴精密工業股份有限公司中科分公司",
      所在園區: "后里園區",
      產業別: "電腦及周邊",
      上市櫃狀況: "上市",
      登記資本額: "5,500,000,000",
      "實收資本額(元)": "5,123,269,400",
      "發行時間(年)": "2022",
      公司官網:
        "https://www.foxlink.com/%E4%BC%81%E6%A5%AD%E7%A4%BE%E6%9C%83%E8%B2%AC%E4%BB%BB/",
      備註: "",
    },
    {
      公司名稱: "亞東工業氣體股份有限公司中科園區分公司",
      所在園區: "臺中園區",
      產業別: "園區供應事業",
      上市櫃狀況: "僑外資",
      登記資本額: "4,115,595,790",
      "實收資本額(元)": "2,474,738,910",
      "發行時間(年)": "2022",
      公司官網:
        "https://www.airliquide.com/zh/taiwan/guan-yu-wo-men#Qi%20Ye%20She%20Hui%20Ze%20Ren",
      備註: "",
    },
    {
      公司名稱: "藥華醫藥股份有限公司台中分公司",
      所在園區: "臺中園區",
      產業別: "生物科技",
      上市櫃狀況: "上櫃",
      登記資本額: "4,000,000,000",
      "實收資本額(元)": "2,192,766,030",
      "發行時間(年)": "2022",
      公司官網: "https://www.pharmaessentia-esg.com/",
      備註: "",
    },
    {
      公司名稱: "三福氣體股份有限公司中科分公司",
      所在園區: "臺中園區",
      產業別: "園區供應事業",
      上市櫃狀況: "僑外資",
      登記資本額: "3,544,206,990",
      "實收資本額(元)": "3,544,206,990",
      "發行時間(年)": "2022",
      公司官網: "https://www.airproducts.com.tw/company/sustainability",
      備註: "https://www.sfchem.com.tw/zh-hant/page/10010461",
    },
    {
      公司名稱: "和大工業股份有限公司中科分公司",
      所在園區: "臺中園區",
      產業別: "精密機械",
      上市櫃狀況: "上市",
      登記資本額: "3,500,000,000",
      "實收資本額(元)": "2,549,565,13",
      "發行時間(年)": "2022",
      公司官網: "http://www.hota.com.tw/sustain-report.html",
      備註: "",
    },
    {
      公司名稱: "佳邦科技股份有限公司台中分公司",
      所在園區: "臺中園區",
      產業別: "通訊",
      上市櫃狀況: "上櫃",
      登記資本額: "3,000,000,000",
      "實收資本額(元)": "1,401,803,410",
      "發行時間(年)": "2021",
      公司官網: "http://www.inpaq.com.tw/rw_133c0339888483181936ab8843fa4985",
      備註: "2022年無發行",
    },
    {
      公司名稱: "帆宣系統科技股份有限公司中科分公司",
      所在園區: "臺中園區",
      產業別: "積體電路",
      上市櫃狀況: "上市",
      登記資本額: "2,500,000,000",
      "實收資本額(元)": "1,866,699,500",
      "發行時間(年)": "2022",
      公司官網: "https://www.micb2b.com/tw/corporate_04.php",
      備註: "",
    },
    {
      公司名稱: "橋椿金屬股份有限公司中科分公司",
      所在園區: "臺中園區",
      產業別: "精密機械",
      上市櫃狀況: "上市",
      登記資本額: "2,000,000,000",
      "實收資本額(元)": "1,630,141,520",
      "發行時間(年)": "2020",
      公司官網: "http://www.sunspring.com.tw/stock.html",
      備註: "2018年CSR報告書由中科CSR計劃案委託成大協助輔導",
    },
    {
      公司名稱: "永勝光學股份有限公司",
      所在園區: "臺中園區",
      產業別: "生物科技",
      上市櫃狀況: "僑外資",
      登記資本額: "1,600,000,000",
      "實收資本額(元)": "1,600,000,000",
      "發行時間(年)": "2022",
      公司官網: "https://www.ginkointernational.com.tw/trust_tw_1.php",
      備註: "",
    },
    {
      公司名稱: "正瀚生技股份有限公司",
      所在園區: "中興園區",
      產業別: "生物科技",
      上市櫃狀況: "興櫃",
      登記資本額: "1,000,000,000",
      "實收資本額(元)": "804,000,000",
      "發行時間(年)": "2022",
      公司官網: "https://www.chbio.com.tw/csrreport/",
      備註: "",
    },
    {
      公司名稱: "達興材料股份有限公司",
      所在園區: "臺中園區",
      產業別: "光電",
      上市櫃狀況: "上市",
      登記資本額: "1,000,000,000",
      "實收資本額(元)": "1,000,030,000",
      "發行時間(年)": "2022",
      公司官網: "http://www.daxinmat.com/?sn=773&lang=zh-TW",
      備註: "",
    },
    {
      公司名稱: "千附精密股份有限公司",
      所在園區: "后里園區",
      產業別: "精密機械",
      上市櫃狀況: "上櫃",
      登記資本額: "1,000,000,000",
      "實收資本額(元)": "489,000,000",
      "發行時間(年)": "2022",
      公司官網: "https://www.chenfull.com.tw/machinery02.php",
      備註: "",
    },
    {
      公司名稱: "台灣應用材料股份有限公司台中分公司",
      所在園區: "臺中園區",
      產業別: "積體電路",
      上市櫃狀況: "X",
      登記資本額: "868,000,000",
      "實收資本額(元)": "468,000,000",
      "發行時間(年)": "2022",
      公司官網:
        "http://www.appliedmaterials.com/zh-hant/news/citizenship_report.html",
      備註: "",
    },
    {
      公司名稱: "鐿鈦科技股份有限公司中科分公司",
      所在園區: "后里園區",
      產業別: "精密機械",
      上市櫃狀況: "上櫃",
      登記資本額: "600,000,000",
      "實收資本額(元)": "402,380,000",
      "發行時間(年)": "2017",
      公司官網: "http://ir.intai.com.tw/?act=corporatesocial&cmd=list",
      備註: "",
    },
    {
      公司名稱: "長園科技實業股份有限公司",
      所在園區: "臺中園區",
      產業別: "光電",
      上市櫃狀況: "上櫃",
      登記資本額: "600,000,000",
      "實收資本額(元)": "598,121,900",
      "發行時間(年)": "2018",
      公司官網: "http://www.caec.com.tw/tw/investor_detail.php?NNo=26",
      備註: "",
    },
    {
      公司名稱: "台灣日東光學股份有限公司",
      所在園區: "臺中園區",
      產業別: "光電",
      上市櫃狀況: "僑外資",
      登記資本額: "568,004,000",
      "實收資本額(元)": "568,003,000",
      "發行時間(年)": "2022",
      公司官網: "https://www.nitto.com/tw/zht/",
      備註: "https://www.nitto.com/tw/zht/sustainability/report/",
    },
    {
      公司名稱: "台灣小原光學材料股份有限公司",
      所在園區: "虎尾園區",
      產業別: "光電",
      上市櫃狀況: "僑外資",
      登記資本額: "500,000,000",
      "實收資本額(元)": "400,000,000",
      "發行時間(年)": "2013",
      公司官網: "https://www.ohara-inc.co.jp/cn/company/#report",
      備註: '從2014年版開始，“企業社會責任報告”和“股東報告”合併為一份新的“綜合報告書"\nhttps://www.ohara-inc.co.jp/company/',
    },
    {
      公司名稱: "王子製藥股份有限公司",
      所在園區: "虎尾園區",
      產業別: "生物科技",
      上市櫃狀況: "X",
      登記資本額: "500,000,000",
      "實收資本額(元)": "290,580,000",
      "發行時間(年)": "2022",
      公司官網: "http://www.prince-pharm.com.tw",
      備註: "",
    },
    {
      公司名稱: "綠茵生技股份有限公司",
      所在園區: "臺中園區",
      產業別: "生物科技",
      上市櫃狀況: "X",
      登記資本額: "250,000,000",
      "實收資本額(元)": "200,000,000",
      "發行時間(年)": "2022",
      公司官網: "https://www.greenynbio.com/investors/article-detail/291__1/",
      備註: "",
    },
    {
      公司名稱: "台灣迪恩士半導體科技股份有限公司台中分公司",
      所在園區: "臺中園區",
      產業別: "精密機械",
      上市櫃狀況: "僑外資",
      登記資本額: "215,000,000",
      "實收資本額(元)": "215,000,000",
      "發行時間(年)": "2022",
      公司官網: "http://www.screen.com.tw/",
      備註: "https://www.screen.co.jp/ir/annual",
    },
    {
      公司名稱: "優貝克材料股份有限公司",
      所在園區: "臺中園區",
      產業別: "光電",
      上市櫃狀況: "僑外資",
      登記資本額: "64,126,000",
      "實收資本額(元)": "64,126,000",
      "發行時間(年)": "2021",
      公司官網: "https://www.ulvac.com.tw/",
      備註: "https://www.ulvac.co.jp/csr/report/",
    },
    {
      公司名稱: "李長榮化學工業股份有限公司中科創新材料分公司",
      所在園區: "虎尾園區",
      產業別: "積體電路",
      上市櫃狀況: "X",
      登記資本額: "10,000,000,000",
      "實收資本額(元)": "8,521,078,440",
      "發行時間(年)": "2,021",
      公司官網: "https://www.lcygroup.com/lcygroup/tc/ESG.php",
      備註: "",
    },
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