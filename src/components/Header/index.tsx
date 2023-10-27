import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Collapse from "@mui/material/Collapse";
import MenuIcon from "@mui/icons-material/Menu";
import Swal from "sweetalert2";

import menu_zh from "../../data/menu_zh.json";
import menu_en from "../../data/menu_en.json";

import style from "./styles.module.scss";

export default function Header() {
  const [openItem, setOpenItem] = useState<string>("");
  const [openSlide, setOpenSlide] = useState<boolean>(false);
  const [openMobileMainMenuItem, setOpenMobileMainMenuItem] =
    useState<string>("");
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  const pathname = usePathname();

  const handleSetOpenMobileMainMenuItem = (item: string) => {
    let val = item === openMobileMainMenuItem ? "" : item;
    setOpenMobileMainMenuItem(val);
  };

  const handleSetOPenItem = (item: string) => {
    setOpenItem(item);
  };

  const handleToggleSlide = () => {
    setOpenSlide(!openSlide);
  };

  useEffect(() => {
    setOpenSlide(false);
    setOpenMobileMainMenuItem("");
  }, [pathname]);

  const handleOpenUnderConstruction = (e: any) => {
    e.preventDefault();

    Swal.fire({
      title: "頁面正在維修中。",
    }).then(() => {
      return;
    });
  };

  return (
    <header className={style.header}>
      <div className={style.mobile_menu_icon} onClick={handleToggleSlide}>
        <MenuIcon />
      </div>
      <div className={style.top_bar}>
        <div className={style.top_bar_menu_container}>
          <ul>
            {(lang === "en"
              ? [
                  {
                    title: "Home",
                    path: { pathname: "/", query: { lang: "en" } },
                    isOpenNewTab: false,
                  },
                  {
                    title: "Survey",
                    path: "https://forms.gle/kvTyN4R5wKAwxanX7",
                    isOpenNewTab: true,
                  },
                  {
                    title: "FB",
                    path: "https://www.facebook.com/CTSPBureau/?locale=zh_TW",
                    isOpenNewTab: true,
                  },
                  {
                    title: "Site Map",
                    path: { pathname: "/sitemap", query: { lang: "en" } },
                    isOpenNewTab: false,
                  },
                  {
                    title: "中文",
                    path: "/",
                    isOpenNewTab: false,
                  },
                ]
              : [
                  {
                    title: "首頁",
                    path: { pathname: "/" },
                    isOpenNewTab: false,
                  },
                  {
                    title: "中科管理局",
                    path: "https://www.ctsp.gov.tw/chinese/00-Home/home.aspx?v=1",
                    isOpenNewTab: true,
                  },
                  {
                    title: "利害關係人問卷",
                    path: "https://forms.gle/kvTyN4R5wKAwxanX7",
                    isOpenNewTab: true,
                    isConstruction: true,
                  },
                  {
                    title: "訂閱電子報",
                    path: "https://www.ctsp.gov.tw/chinese/05publication/03epaper_view_1.aspx?v=1&fr=1105&no=1108&sn=51",
                    isOpenNewTab: true,
                  },
                  {
                    title: "網站導覽",
                    path: { pathname: "/sitemap" },
                    isOpenNewTab: false,
                  },
                  {
                    title: "意見回饋",
                    path: "https://web2.ctsp.gov.tw/CtspMisc/Letters/Create",
                    isOpenNewTab: true,
                  },
                  {
                    title: "ENG",
                    path: { pathname: "/", query: { lang: "en" } },
                    isOpenNewTab: false,
                    isConstruction: true,
                  },
                ]
            ).map((item: any, index) => (
              <li
                key={item.title}
                style={{
                  borderRight: index === 6 ? "none" : "1px solid #ffff",
                }}>
                <Link
                  target={item.isOpenNewTab ? "_blank" : ""}
                  href={item.path}
                  onClick={item.isConstruction && handleOpenUnderConstruction}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={style.navbar}>
        <div>
          <Link href="/">
            <Image
              src={
                lang === "en"
                  ? "/images/home/en/logo.png"
                  : "/images/home/zh/logo.png"
              }
              alt="logo"
              width={253}
              height={53.42}
            />
          </Link>
        </div>
        <div className={style.menu}>
          <ul>
            {(lang === "en" ? menu_en : menu_zh).map((item) => {
              if (item.sub) {
                return (
                  <li className={style.dropdown} key={item.title}>
                    <label>{item.title}</label>
                    <ul className={style.dropdown_content}>
                      {item.sub.map((subItem: any) => {
                        if (subItem.sub) {
                          return (
                            <li
                              className={style.third_sub_menu}
                              key={subItem.title}
                              onMouseEnter={() =>
                                handleSetOPenItem(subItem.title)
                              }
                              onMouseLeave={() => handleSetOPenItem("")}>
                              <Link
                                onClick={
                                  subItem.isConstruction &&
                                  handleOpenUnderConstruction
                                }
                                href={
                                  lang === "en"
                                    ? {
                                        pathname: subItem.path,
                                        query: {
                                          lang: "en",
                                        },
                                      }
                                    : {
                                        pathname: subItem.path,
                                      }
                                }>
                                {subItem.title}
                                {openItem === subItem.title ? (
                                  <KeyboardArrowDownIcon />
                                ) : (
                                  <KeyboardArrowUpIcon />
                                )}
                              </Link>

                              <Collapse in={openItem === subItem.title}>
                                <ul className={style.third_sub_menu_item}>
                                  {subItem.sub.map((subSubItem: any) => (
                                    <li key={subSubItem.title}>
                                      <Link
                                        onClick={
                                          subSubItem.isConstruction &&
                                          handleOpenUnderConstruction
                                        }
                                        style={
                                          subItem.title ===
                                            "Game(under maintenance)" ||
                                          subItem.title === "小遊戲(維護中)"
                                            ? { pointerEvents: "none" }
                                            : {}
                                        }
                                        href={
                                          lang === "en"
                                            ? {
                                                pathname: subSubItem.path,
                                                query: {
                                                  lang: "en",
                                                },
                                              }
                                            : {
                                                pathname: subSubItem.path,
                                              }
                                        }>
                                        {subSubItem.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </Collapse>
                            </li>
                          );
                        } else {
                          return (
                            <li key={subItem.title}>
                              <Link
                                onClick={
                                  subItem.isConstruction &&
                                  handleOpenUnderConstruction
                                }
                                href={
                                  lang === "en"
                                    ? {
                                        pathname: subItem.path,
                                        query: {
                                          lang: "en",
                                        },
                                      }
                                    : {
                                        pathname: subItem.path,
                                      }
                                }>
                                {subItem.title}
                              </Link>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <li className={style.dropdown} key={item.title}>
                    <Link
                      href={
                        lang === "en"
                          ? {
                              pathname: item.path,
                              query: { lang: "en" },
                            }
                          : { pathname: item.path }
                      }
                      onClick={
                        item.isConstruction
                          ? (e) => handleOpenUnderConstruction(e)
                          : () => {}
                      }>
                      {item.title}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
      <div
        className={style.slide_down_container}
        style={openSlide ? { top: "54px" } : { top: "-150vh" }}>
        <ul>
          {(lang === "en" ? menu_en : menu_zh).map((item) => {
            if (item.sub) {
              return (
                <li className={style.dropdown} key={item.title}>
                  <div className={style.dropdown_row}>
                    <label>{item.title}</label>
                    {item.title === openMobileMainMenuItem ? (
                      <KeyboardArrowDownIcon
                        onClick={() =>
                          handleSetOpenMobileMainMenuItem(item.title)
                        }
                      />
                    ) : (
                      <KeyboardArrowUpIcon
                        onClick={() =>
                          handleSetOpenMobileMainMenuItem(item.title)
                        }
                      />
                    )}
                  </div>
                  <Collapse in={item.title === openMobileMainMenuItem}>
                    <ul className={style.dropdown_content}>
                      {item.sub.map((subItem: any) => {
                        if (subItem.sub) {
                          return (
                            <li
                              className={style.third_sub_menu}
                              key={subItem.title}
                              onMouseEnter={() =>
                                handleSetOPenItem(subItem.title)
                              }
                              onMouseLeave={() => handleSetOPenItem("")}>
                              <Link
                                onClick={
                                  subItem.isConstruction &&
                                  handleOpenUnderConstruction
                                }
                                href={
                                  lang === "en"
                                    ? {
                                        pathname: subItem.path,
                                        query: {
                                          lang: "en",
                                        },
                                      }
                                    : {
                                        pathname: subItem.path,
                                      }
                                }>
                                {subItem.title}
                                {openItem === subItem.title ? (
                                  <KeyboardArrowDownIcon />
                                ) : (
                                  <KeyboardArrowUpIcon />
                                )}
                              </Link>
                              <Collapse in={openItem === subItem.title}>
                                <ul className={style.third_sub_menu_item}>
                                  {subItem.sub.map((subSubItem: any) => (
                                    <li key={subSubItem.title}>
                                      <Link
                                        onClick={
                                          subSubItem.isConstruction &&
                                          handleOpenUnderConstruction
                                        }
                                        style={
                                          subItem.title ===
                                            "Game(under maintenance)" ||
                                          subItem.title === "小遊戲(維護中)"
                                            ? { pointerEvents: "none" }
                                            : {}
                                        }
                                        href={
                                          lang === "en"
                                            ? {
                                                pathname: subSubItem.path,
                                                query: {
                                                  lang: "en",
                                                },
                                              }
                                            : {
                                                pathname: subSubItem.path,
                                              }
                                        }>
                                        {subSubItem.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </Collapse>
                            </li>
                          );
                        } else {
                          return (
                            <li key={subItem.title}>
                              <Link
                                onClick={
                                  subItem.isConstruction &&
                                  handleOpenUnderConstruction
                                }
                                href={
                                  lang === "en"
                                    ? {
                                        pathname: subItem.path,
                                        query: {
                                          lang: "en",
                                        },
                                      }
                                    : {
                                        pathname: subItem.path,
                                      }
                                }>
                                {subItem.title}
                              </Link>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </Collapse>
                </li>
              );
            } else {
              return (
                <li className={style.dropdown} key={item.title}>
                  <Link
                    onClick={
                      item.isConstruction
                        ? (e) => handleOpenUnderConstruction(e)
                        : () => {}
                    }
                    href={
                      lang === "en"
                        ? {
                            pathname: item.path,
                            query: { lang: "en" },
                          }
                        : { pathname: item.path }
                    }>
                    {item.title}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </header>
  );
}
