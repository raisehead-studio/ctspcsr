import { useSearchParams } from "next/navigation";

import Link from "next/link";

import menu_zh from "../../data/menu_zh.json";
import menu_en from "../../data/menu_en.json";

import layout from "../layout.module.scss";
import style from "./styles.module.scss";

export default function Sitemap() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  return (
    <div className={`${layout.page_layout} ${style.sitemap}`}>
      <div className={layout.page_content}>
        <div className={layout.page_header}>
          <strong>{lang === "en" ? "Site Map" : "網站地圖"}</strong>
          {/* <Breadcrumb /> */}
        </div>
        <div className={style.sitemap_content}>
          <div className={style.sitemap_content_inner}>
            {(lang === "en" ? menu_en : menu_zh).map((i) => (
              <div key={i.title}>
                <h3>{i.title}</h3>
                <ul>
                  {i.sub?.map((j: any) => (
                    <li key={j.title}>
                      <Link href={j.path || ""}>{j.title}</Link>
                      <ul>
                        {j.sub?.map((k: any) => {
                          if (!k.title) {
                            return;
                          }

                          return (
                            <li key={k.title}>
                              <Link href={k.path || ""}>{k.title}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
