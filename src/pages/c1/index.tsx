import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Link from "next/link";
import path from "path";
import fs from "fs/promises";

import Breadcrumb from "../../components/Breadcrumb";

import layout from "../layout.module.scss";
import style from "./styles.module.scss";

const C1 = ({ data }: { data: any }) => {
  const [page, setPage] = useState(1);
  data.filter((i: any) => i.news_catgory === "2");
  data.sort(
    (a: any, b: any) => +new Date(b.create_date) - +new Date(a.create_date)
  );
  const PER_PAGE = 10;
  function currentData() {
    const begin = (page - 1) * PER_PAGE;
    const end = begin + PER_PAGE;
    return data.slice(begin, end);
  }

  function handleChangePage(_: any, value: number) {
    setPage(value);
  }

  return (
    <div className={layout.page_layout}>
      <div className={layout.page_content}>
        <div className={layout.page_header}>
          <strong>新聞中心</strong>
          <Breadcrumb />
        </div>
        <div className={style.news_container}>
          {currentData().map((i: any) => (
            <div className={style.news_item} key={i.news_id}>
              <Link href={`/c1/${i.news_id}`}>{i.news_title}</Link>
              <div>
                <p>{i.create_date}</p>
              </div>
              <Link className={style.read_more} href={`/c1/${i.news_id}`}>
                Read More
              </Link>
            </div>
          ))}
          <div className={style.pagination_container}>
            <Pagination
              count={Math.ceil(data.length / PER_PAGE)}
              size="small"
              onChange={handleChangePage}
              page={page}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

async function getData() {
  const filePath = path.join(process.cwd(), "data", "news.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  return data;
}

export async function getStaticProps(context: any) {
  const data = await getData();
  const news = data
    .filter((i: any) => i.news_catgory === "1")
    .sort(
      (a: any, b: any) => +new Date(b.create_date) - +new Date(a.create_date)
    )
    .map((news: any) => ({
      news_id: news.news_id,
      news_title: news.news_title,
      create_date: news.create_date,
    }));

  if (!news) {
    return { notFound: true };
  }

  return {
    props: {
      data: news,
    },
  };
}

export default C1;
