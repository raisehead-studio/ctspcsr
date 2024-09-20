import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Fuse from "fuse.js";

import Breadcrumb from "../../components/Breadcrumb";
import SideMenu from "../../components/SideMenu";

import csrPerformanceData from "../../../data/csr_performance.json";
import csrGoalData from "../../../data/csr_goals.json";
import introductionData from "../../../data/introduction.json";
import messageFromDirectorData from "../../../data/message_director.json";
import stakeholdersInteractionData from "../../../data/stakeholder_interaction.json";
import futureData from "../../../data/future.json";

import layout from "../layout.module.scss";
import style from "./styles.module.scss";


interface DataType {
  title: string;
  content: string[];
  en_title: string;
  en_content: string[];
  url:string;
}

function SearchComponent() {
  const router = useRouter();
  const { keyword } = router.query;
  const [results, setResults] = useState<any>([]);

  const data: DataType[] = [
    {
      ...csrGoalData,
      url: "/csr_goals",
    },
    {
      ...stakeholdersInteractionData,
      url: "/stakeholder_interaction",
    },
    {
      ...futureData,
      url: "/future",
    },
    {
      ...messageFromDirectorData,
      url: "/message_director",
    },
    {
      ...introductionData,
      url: "/introduction",
    },
    {
      ...csrPerformanceData,
      url: "/csr_performance",
    },
  ];

  // 設定 Fuse.js 搜尋的欄位
  const fuse = new Fuse(data, {
    keys: ["title", "content"], // 根據 JSON 檔案內容調整欄位
    includeScore: true,
    threshold: 0.3, // 控制匹配的嚴格度
  });

  useEffect(() => {
    if (keyword) {
      const searchResults = fuse.search(Array.isArray(keyword) ? keyword.join(" ") : keyword);
      setResults(searchResults);
    }
  }, [keyword]);

  console.log(results);

  return (
    <div className={layout.page_layout}>
      <div className={layout.page_sidemenu}>
        <SideMenu />
      </div>
      <div className={layout.page_content}>
        <div className={layout.page_header}>
          <strong>搜尋結果</strong>
          <Breadcrumb />
        </div>
        <div>
          <div className={layout.page_description}>
            <div>
              {results.length > 0 ? (
                <table className={style.table_container} cellPadding={0}>
                  <thead>
                    <tr className={style.head_row}>
                      <td>相關內容</td>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((item: any, index: any) => (
                      <tr
                        key={index}
                        className={
                          index % 2 !== 0 ? style.odd_row : style.even_row
                        }>
                        <td>
                          <Link href={item.item.url || ""}>
                            {item.item.title}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>查無相關結果</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
