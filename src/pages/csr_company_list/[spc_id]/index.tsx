import React from "react";
import path from "path";
import fs from "fs/promises";
import Image from "next/image";

// import Breadcrumb from "../../../components/Breadcrumb";

import layout from "../../layout.module.scss";
import style from "../styles.module.scss";

export default function T({ data }: { data: any }) {
  return (
    <div className={layout.page_layout}>
      <div className={layout.page_content}>
        <div className={layout.page_header}>
          <strong>{data?.spc_title}</strong>
          {/* <Breadcrumb /> */}
        </div>
        <div className={style.detail_content_table}>
          <div className={style.image_container}>
            <Image src={data?.com_image} fill={true} alt={data?.order_id} />
          </div>
          <div className={style.row}>
            <div className={style.row_key}>
              <p>公司名稱</p>
            </div>
            <div className={style.row_value}>
              <p>{data?.spc_title || "無提供資料"}</p>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.row_key}>
              <p>報告涵蓋期間</p>
            </div>
            <div className={style.row_value}>
              <p>{data?.report_wy_start || "無提供資料"}</p>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.row_key}>
              <p>報告書總頁</p>
            </div>
            <div className={style.row_value}>
              <p>{data?.report_pages || "無提供資料"}</p>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.row_key}>
              <p>報告書負責單位</p>
            </div>
            <div className={style.row_value}>
              <p>{data?.report_main_division || "無提供資料"}</p>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.row_key} style={{ height: "122px" }}>
              <p>摘要說明</p>
            </div>
            <div className={style.row_value}>
              <p>{data?.spc_description}</p>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.row_key}>
              <p>公司網站</p>
            </div>
            <div className={style.row_value}>
              <p>{data?.new_report_website || "無提供資料"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "csr.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return data;
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const id = params.spc_id;

  const data = await getData();

  const company = data.filter((news: any) => news.spc_id === id)[0];

  if (!company) {
    return { notFound: true };
  }

  return {
    props: {
      data: company,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.map((news: any) => news.spc_id);

  const pathsWithParams = ids.map((id: string) => ({
    params: { spc_id: id },
  }));

  return {
    paths: pathsWithParams,
    fallback: false,
  };
}
