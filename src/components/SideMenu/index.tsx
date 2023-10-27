"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Swal from "sweetalert2";

import { usePathname, useSearchParams } from "next/navigation";
import zh_menu from "../../data/menu_zh.json";
import en_menu from "../../data/menu_en.json";
import style from "./style.module.scss";

export default function SideMenu() {
  const [menu, setMenu] = useState<any>([]);
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string>("");

  const handleOpenUnderConstruction = (e: any) => {
    e.preventDefault();

    Swal.fire({
      title: "頁面正在維修中。",
    }).then(() => {
      return;
    });
  };

  const handleToggleMenu = (menuName: string) => {
    if (openMenu === menuName) {
      setOpenMenu("");
    } else {
      setOpenMenu(menuName);
    }
  };

  useEffect(() => {
    const path = pathname.split("/");
    if (path.length === 4 || path.length === 5) {
      setOpenMenu(`/${path[1]}/${path[2]}`);
    }
  }, [pathname]);

  useEffect(() => {
    const findPath = (menu: any) => {
      let path = pathname.slice(0, -1);

      for (let i = 0; i < menu.length; i++) {
        if (menu[i].path === path) {
          setMenu([menu[i]]);
          break;
        } else if (menu[i].sub) {
          for (let j = 0; j < menu[i].sub.length; j++) {
            if (menu[i].sub[j].path === path) {
              setMenu([menu[i]]);
              break;
            } else if (menu[i].sub[j].sub) {
              for (let k = 0; k < menu[i].sub[j].sub.length; k++) {
                if (menu[i].sub[j].sub[k].path === path) {
                  setMenu([menu[i]]);
                  break;
                } else if (menu[i].sub[j].sub[k].sub) {
                  for (let l = 0; l < menu[i].sub[j].sub[k].sub.length; l++) {
                    if (menu[i].sub[j].sub[k].sub[l].path === path) {
                      setMenu([menu[i]]);
                      break;
                    }
                  }
                }
              }
            }
          }
        }
      }
    };

    findPath(lang !== "en" ? zh_menu : en_menu);
  }, [pathname, lang]);

  if (menu.length > 0 && !menu[0].sub) {
    return (
      <div className={style.side_menu}>
        <div
          className={
            menu[0].path === pathname.slice(0, -1)
              ? `${style.side_menu_item} ${style.is_sub_menu} ${style.active}`
              : `${style.side_menu_item} ${style.is_sub_menu}`
          }
          key={menu[0].title}>
          <Link
            onClick={menu[0].isConstruction && handleOpenUnderConstruction}
            href={
              lang === "en"
                ? {
                    pathname: menu[0].path,
                    query: {
                      lang: "en",
                    },
                  }
                : {
                    pathname: menu[0].path,
                  }
            }>
            {menu[0].title}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={style.side_menu}>
      {menu.length > 0 &&
        menu[0].sub.map((item: any, index: number) => {
          return (
            <>
              <div
                className={
                  item.path === pathname.slice(0, -1)
                    ? `${style.side_menu_item} ${style.is_sub_menu} ${style.active}`
                    : `${style.side_menu_item} ${style.is_sub_menu}`
                }
                key={item.title}>
                <Link
                  onClick={item.isConstruction && handleOpenUnderConstruction}
                  href={
                    lang === "en"
                      ? {
                          pathname: item.path,
                          query: {
                            lang: "en",
                          },
                        }
                      : {
                          pathname: item.path,
                        }
                  }>
                  {item.title}
                </Link>
              </div>
              {item.sub !== undefined && (
                <Collapse in={true}>
                  <>
                    {item.sub.map((sub_item: any) => (
                      <>
                        <div
                          className={
                            sub_item.path === pathname.slice(0, -1)
                              ? `${style.sub_side_menu_item} ${style.active}`
                              : `${style.sub_side_menu_item} `
                          }
                          key={sub_item.title}>
                          <Link
                            onClick={
                              sub_item.isConstruction &&
                              handleOpenUnderConstruction
                            }
                            style={
                              sub_item.title === "Game(under maintenance)" ||
                              sub_item.title === "小遊戲(維護中)"
                                ? { pointerEvents: "none" }
                                : {}
                            }
                            href={
                              lang === "en"
                                ? {
                                    pathname: sub_item.path,
                                    query: {
                                      lang: "en",
                                    },
                                  }
                                : {
                                    pathname: sub_item.path,
                                  }
                            }>
                            {sub_item.title}
                          </Link>
                          {sub_item.sub ? (
                            <>
                              {openMenu === sub_item.path ? (
                                <KeyboardArrowDownIcon
                                  onClick={() =>
                                    handleToggleMenu(sub_item.path)
                                  }
                                />
                              ) : (
                                <KeyboardArrowUpIcon
                                  onClick={() =>
                                    handleToggleMenu(sub_item.path)
                                  }
                                />
                              )}
                            </>
                          ) : null}
                        </div>
                        {sub_item.sub && (
                          <Collapse
                            in={
                              sub_item.sub.filter(
                                (i: any) => i.path === openMenu
                              ).length > 0 || openMenu === sub_item.path
                            }>
                            <>
                              {sub_item.sub.map((sub_item: any) => (
                                <div
                                  className={
                                    sub_item.path === pathname.slice(0, -1)
                                      ? `${style.sub_side_menu_item} ${style.third_layer} ${style.active}`
                                      : `${style.sub_side_menu_item} ${style.third_layer}`
                                  }
                                  key={sub_item.title}>
                                  <Link
                                    onClick={
                                      sub_item.isConstruction &&
                                      handleOpenUnderConstruction
                                    }
                                    href={
                                      lang === "en"
                                        ? {
                                            pathname: sub_item.path,
                                            query: {
                                              lang: "en",
                                            },
                                          }
                                        : {
                                            pathname: sub_item.path,
                                          }
                                    }>
                                    {sub_item.title}
                                  </Link>
                                </div>
                              ))}
                            </>
                          </Collapse>
                        )}
                      </>
                    ))}
                  </>
                </Collapse>
              )}
            </>
          );
        })}
    </div>
  );
}
