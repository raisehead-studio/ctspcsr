import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import path from "path";
import fs from "fs/promises";

import Breadcrumb from "../../../components/Breadcrumb";
import SideMenu from "../../../components/SideMenu";
import layout from "../../layout.module.scss";

export default function F({
  data,
}: {
  data: {
    title: string;
    content: any[];
  };
}) {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (lang) {
    return (
      <div className={layout.page_layout}>
        <div className={layout.page_content}>
          <div className={layout.page_header}>
            <strong></strong>
            <Breadcrumb />
          </div>
          <div>
            {domLoaded && (
              <div
                className={layout.page_description}
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
            )}
          </div>
        </div>
        <div>
          <SideMenu />
        </div>
      </div>
    );
  }

  return (
    <div className={layout.page_layout}>
      <div>
        <SideMenu />
      </div>
      <div className={layout.page_content}>
        <div className={layout.page_header}>
          <strong>{data.title}</strong>
          <Breadcrumb />
        </div>
        <div>
          {domLoaded && (
            <div
              className={layout.page_description}
              dangerouslySetInnerHTML={{
                __html: data.content.join(""),
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "g", "2", "1.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  return data;
}

export async function getStaticProps(context: any) {
  const data = await getData();

  if (!data) {
    return { notFound: true };
  }

  return {
    props: {
      data: data,
    },
  };
}
