import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/router";
import path from "path";
import fs from "fs/promises";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

import Breadcrumb from "../../components/Breadcrumb";

import layout from "../layout.module.scss";
import style from "./styles.module.scss";

const News = ({ data }: { data: any }) => {
  const router = useRouter();
  const [page, setPage] = useState(1);
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
    <div
      className={layout.page_layout}
      style={{
        gridTemplateColumns: "1fr",
      }}>
      <div className={layout.page_content}>
        <div className={layout.page_header}>
          <strong>News</strong>
          <Breadcrumb />
        </div>
        <table className={style.news_table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Function</th>
            </tr>
          </thead>

          <tbody>
            {currentData().map((i: any) => (
              <tr key={i.news_id}>
                <td>{i.create_date}</td>
                <td>{i.news_title}</td>
                <td
                  style={{
                    textAlign: "center",
                  }}>
                  <Button
                    onClick={() => router.push(`/en_news/${i.news_id}?lang=en`)}
                    sx={{
                      backgroundColor: "#32b4c2",
                      padding: "5px 10px",
                    }}
                    variant="contained"
                    startIcon={<SearchIcon />}>
                    view
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={style.news_container}>
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
  const filePath = path.join(process.cwd(), "data", "en_news.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  return data;
}

export async function getStaticProps(context: any) {
  const data = await getData();
  const news = data
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

export default News;
