import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import path from "path";
import fs from "fs/promises";

import Breadcrumb from "../../../../components/Breadcrumb";
import SideMenu from "../../../../components/SideMenu";
import layout from "../../../layout.module.scss";

export default function F({
  data,
}: {
  data: {
    title: string;
    content: any[];
    en_title: string;
    en_content: any[];
  };
}) {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div className={layout.page_layout}>
      <div>
        <SideMenu />
      </div>
      <div className={layout.page_content}>
        <div className={layout.page_header}>
          <strong>{lang ? data.en_title : data.title}</strong>
          <Breadcrumb />
        </div>
        <div>
          {domLoaded && (
            <div
              className={layout.page_description}
              dangerouslySetInnerHTML={{
                __html: lang
                  ? data.en_content.map((i) => `<p>${i}</p>`).join("")
                  : data.content.join(""),
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

async function getData() {
  const filePath = path.join(
    process.cwd(),
    "data",
    "s",
    "tsdg17",
    "tsdg17",
    "index.json"
  );
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
