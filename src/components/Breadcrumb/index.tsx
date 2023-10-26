import { useEffect, useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import { usePathname, useSearchParams } from "next/navigation";

import style from "./style.module.scss";

import zh_menu from "../../data/menu_zh.json";
import en_menu from "../../data/menu_en.json";

export default function ActiveLastBreadcrumb() {
  const [data, setData] = useState<any>([]);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  useEffect(() => {
    const findPath = (menu: any) => {
      let path = pathname.slice(0, -1);

      for (let i = 0; i < menu.length; i++) {
        if (menu[i].path === path) {
          setData([{ title: menu[i].title, path: menu[i].path }]);
          break;
        } else if (menu[i].sub) {
          for (let j = 0; j < menu[i].sub.length; j++) {
            if (menu[i].sub[j].path === path) {
              setData([
                { title: menu[i].title, path: menu[i].path },
                { title: menu[i].sub[j].title, path: menu[i].sub[j].path },
              ]);
              break;
            } else if (menu[i].sub[j].sub) {
              for (let k = 0; k < menu[i].sub[j].sub.length; k++) {
                if (menu[i].sub[j].sub[k].path === path) {
                  setData([
                    { title: menu[i].title, path: menu[i].path },
                    { title: menu[i].sub[j].title, path: menu[i].sub[j].path },
                    {
                      title: menu[i].sub[j].sub[k].title,
                      path: menu[i].sub[j].sub[k].path,
                    },
                  ]);
                  break;
                }
              }
            }
          }
        }
      }
    };

    findPath(lang !== "en" ? zh_menu : en_menu);
  }, [pathname, lang]);

  return (
    <div>
      <Breadcrumbs className={style.custom_bradcrumbs}>
        {data.map((item: any, index: number) => {
          if (index === 0) {
            return (
              <Link key={index} href="/">
                <HomeIcon />
                {lang === "en" ? "Home" : "首頁"}
              </Link>
            );
          }

          return (
            <Link
              key={index}
              className={pathname.slice(0, -1) === item.path ? "active" : ""}
              href={`/${item.path}`}
              suppressHydrationWarning>
              {item.title}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
