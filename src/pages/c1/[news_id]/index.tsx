import React from "react";
import path from "path";
import fs from "fs/promises";

// import Breadcrumb from "../../../components/Breadcrumb";

import layout from "../../layout.module.scss";

export default function T({ data }: { data: any }) {
  return (
    <div className={layout.page_layout}>
      <div className={layout.page_content}>
        <div className={layout.page_header}>
          <strong>{data?.news_title}</strong>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data?.news_content }} />
      </div>
    </div>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "news.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return data;
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const id = params.news_id;

  const data = await getData();

  const news = data.filter((news: any) => news.news_id === id)[0];

  if (!news) {
    return { notFound: true };
  }

  return {
    props: {
      data: news,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.map((news: any) => news.news_id);

  const pathsWithParams = ids.map((id: string) => ({
    params: { news_id: id },
  }));

  return {
    paths: pathsWithParams,
    fallback: false,
  };
}
