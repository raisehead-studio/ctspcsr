import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSearchParams, usePathname } from "next/navigation";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Collapse from "@mui/material/Collapse";
import MenuIcon from "@mui/icons-material/Menu";
import DoorbellIcon from "@mui/icons-material/Doorbell";
import FactoryIcon from "@mui/icons-material/Factory";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import FeedbackIcon from "@mui/icons-material/Feedback";
import LanguageIcon from "@mui/icons-material/Language";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";


import menu_zh from "../../data/menu_zh.json";
import menu_en from "../../data/menu_en.json";

import style from "./styles.module.scss";

interface HeaderProps {
  handleFontSize: (size: string) => void;
  fontSize:string;
}

export default function Header({ handleFontSize, fontSize }: HeaderProps) {
  const [openItem, setOpenItem] = useState<string>("");
  const [openSlide, setOpenSlide] = useState<boolean>(false);
  const [openMobileMainMenuItem, setOpenMobileMainMenuItem] =
    useState<string>("");
  const [openFontSize, setOpenFontSize] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");
  
  const router = useRouter();
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

  const toggleFontSize = () => setOpenFontSize(!openFontSize);

  const handleCloseFontSize = () => setOpenFontSize(false);

  useEffect(() => {
    setOpenSlide(false);
    setOpenMobileMainMenuItem("");
  }, [pathname]);

  const handleOpenUnderConstruction = (e: any) => {
    e.preventDefault();

    Swal.fire({
      title: lang ? "Under Construction." : "頁面正在維修中。",
    }).then(() => {
      return;
    });
  };

  const handleNavigate = () => { 
    router.push(`/result?keyword=${keyword}`);
  }

  return (
    <header className={style.header}>
      <div className={style.mobile_menu_icon} onClick={handleToggleSlide}>
        <MenuIcon />
      </div>
      <div className={style.top_bar}>
        <div className={style.top_bar_menu_container}>
          <div className={style.top_bar_search}>
            <TextField
              variant="outlined"
              size="small"
              sx={{
                width: "120px",
                backgroundColor: "#fff",
                borderRadius: "4px",
              }}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}>
              <SearchIcon />
            </TextField>
            <Button variant="contained" onClick={handleNavigate}>
              {lang === "en" ? "Search" : "搜尋"}
            </Button>
          </div>
          <ul>
            {(lang === "en"
              ? [
                  {
                    title: "Home",
                    path: { pathname: "/" },
                    isOpenNewTab: false,
                    icon: <DoorbellIcon />,
                  },
                  {
                    title: "CTSP",
                    path: "https://www.ctsp.gov.tw/chinese/00-Home/home.aspx?v=1",
                    isOpenNewTab: true,
                    icon: <FactoryIcon />,
                  },
                  {
                    title: "News",
                    path: "https://www.ctsp.gov.tw/chinese/05publication/03epaper_view_1.aspx?v=1&fr=1105&no=1108&sn=51",
                    isOpenNewTab: true,
                    icon: <NewspaperIcon />,
                  },
                  {
                    title: "Site Map",
                    path: { pathname: "/sitemap" },
                    isOpenNewTab: false,
                    icon: <AccountTreeIcon />,
                  },
                  {
                    title: "Feedback",
                    path: "https://web2.ctsp.gov.tw/CtspMisc/Letters/Create",
                    isOpenNewTab: true,
                    icon: <FeedbackIcon />,
                  },
                  {
                    title: "中文",
                    path: { pathname: "/" },
                    isOpenNewTab: false,
                    isConstruction: true,
                    icon: <LanguageIcon />,
                  },
                  {
                    title: "Font Size",
                    path: "javascript:void(0)",
                    isOpenNewTab: false,
                    isConstruction: true,
                    icon: <FontDownloadIcon />,
                    func: toggleFontSize,
                  },
                ]
              : [
                  {
                    title: "首頁",
                    path: { pathname: "/" },
                    isOpenNewTab: false,
                    icon: <DoorbellIcon />,
                  },
                  {
                    title: "中科管理局",
                    path: "https://www.ctsp.gov.tw/chinese/00-Home/home.aspx?v=1",
                    isOpenNewTab: true,
                    icon: <FactoryIcon />,
                  },
                  {
                    title: "訂閱電子報",
                    path: "https://www.ctsp.gov.tw/chinese/05publication/03epaper_view_1.aspx?v=1&fr=1105&no=1108&sn=51",
                    isOpenNewTab: true,
                    icon: <NewspaperIcon />,
                  },
                  {
                    title: "網站導覽",
                    path: { pathname: "/sitemap" },
                    isOpenNewTab: false,
                    icon: <AccountTreeIcon />,
                  },
                  {
                    title: "意見回饋",
                    path: "https://web2.ctsp.gov.tw/CtspMisc/Letters/Create",
                    isOpenNewTab: true,
                    icon: <FeedbackIcon />,
                  },
                  {
                    title: "ENG",
                    path: { pathname: "/", query: { lang: "en" } },
                    isOpenNewTab: false,
                    isConstruction: true,
                    icon: <LanguageIcon />,
                  },
                  {
                    title: "字級大小",
                    path: "javascript:void(0)",
                    isOpenNewTab: false,
                    isConstruction: true,
                    icon: <FontDownloadIcon />,
                    func: toggleFontSize,
                  },
                ]
            ).map((item: any, index) => (
              <li
                key={item.title}
                style={{
                  borderRight: "1px solid #ffff",
                }}>
                <Link
                  className={style.top_bar_menu_container_item_desktop}
                  target={item.isOpenNewTab ? "_blank" : ""}
                  href={item.path}
                  onClick={item.func ? item.func : () => {}}>
                  {item.title}
                </Link>
                <Link
                  className={style.top_bar_menu_container_item_mobile}
                  target={item.isOpenNewTab ? "_blank" : ""}
                  href={item.path}>
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={style.navbar}>
        <div>
          <Link href={lang ? "/?lang=en" : "/"}>
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
                          if (subItem.isExternal) {
                            return (
                              <li key={subItem.title}>
                                <a href={subItem.path} target="_blank">
                                  {subItem.title}
                                </a>
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
          <li className={style.dropdown}>
            <div className={style.dropdown_row}>
              <TextField
                variant="outlined"
                size="small"
                sx={{
                  width: "120px",
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                }}
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}>
                <SearchIcon />
              </TextField>
              <Button
                variant="contained"
                onClick={() => {
                  handleNavigate();
                  setOpenSlide(false);
                }}>
                {lang === "en" ? "Search" : "搜尋"}
              </Button>
            </div>
          </li>
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
      <Modal open={openFontSize} onClose={handleCloseFontSize}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 200,
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 4,
            p: 4,
          }}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}>
            <p
              style={{
                fontSize: "11px",
                padding: "0px",
                margin: "0",
              }}>
              {lang === "en" ? "Small" : "小"}
            </p>
            <p
              style={{
                fontSize: "14px",
                padding: "0px",
                margin: "0",
              }}>
              {lang === "en" ? "Medium" : "中"}
            </p>
            <p
              style={{
                fontSize: "18px",
                padding: "0px",
                margin: "0",
              }}>
              {lang === "en" ? "Big" : "大"}
            </p>
          </Box>
          <Slider
            onChange={(e: any) => {
              const val = e.target.value;
              if (val < 60) {
                handleFontSize("small");
              } else if (val > 80) {
                handleFontSize("big");
              } else {
                handleFontSize("middle");
              }
            }}
            step={50}
            marks
            min={10}
            max={110}
            value={fontSize === "small" ? 10 : fontSize === "middle" ? 60 : 110}
          />
        </Box>
      </Modal>
    </header>
  );
}
