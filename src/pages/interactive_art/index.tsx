import { useState } from "react";
import { useSearchParams } from "next/navigation";

import Breadcrumb from "../../components/Breadcrumb";
import SideMenu from "../../components/SideMenu";
import CardWithMoreEffect from "../../components/GalleryCardWithMoreEffect";

import layout from "../layout.module.scss";
import style from "./styles.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ReportDownload() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  return (
    <div className={layout.page_layout}>
      <div className={style.page_sidemenu}>
        <SideMenu />
      </div>
      <div className={layout.page_content}>
        <div className={layout.page_header}>
          <strong>{lang ? "Report Download" : "互動藝術"}</strong>
          <Breadcrumb />
        </div>
        <div className={style.download_section}>
          <div className={style.download_section_item}>
            <div>
              <h3>前三名</h3>
            </div>
            <div className={style.photo_area}>
              <div>
                <CardWithMoreEffect
                  image_src="https://sd.ctsp.gov.tw/meida/award_photo/1/1.jpg"
                  alt="team"
                  text="卓錫隆_綠能科技遇到親子遊(銀獎)"
                />
              </div>
              <div>
                <CardWithMoreEffect
                  image_src="https://sd.ctsp.gov.tw/meida/award_photo/1/2.jpg"
                  alt="team"
                  text="李祐村_台中園區之美13(銅獎)"
                />
              </div>
              <div>
                <CardWithMoreEffect
                  image_src="https://sd.ctsp.gov.tw/meida/award_photo/1/3.jpg"
                  alt="team"
                  text="趙令級_科技與休閒(首獎)"
                />
              </div>
            </div>
          </div>
          <div className={style.download_section_item}>
            <div>
              <h3>佳作</h3>
            </div>
            <div>
              <div className={style.photo_area}>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/2/1.jpg"
                    alt="team"
                    text="張凱智_中科管理局倒影之美(佳作)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/2/2.jpg"
                    alt="team"
                    text="戴孟佳_幸福中科(佳作)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/2/3.jpg"
                    alt="team"
                    text="李振源_晨曦之美(佳作)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/2/4.jpg"
                    alt="team"
                    text="柯月娥_參觀南投中科(佳作)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/2/5.jpg"
                    alt="team"
                    text="沈朝財_中科16週年慶(佳作)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/2/6.jpg"
                    alt="team"
                    text="葉世賢_中科園區夜色之美(佳作)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/2/7.jpg"
                    alt="team"
                    text="葉世賢_中科藝術之美(佳作)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/2/8.jpg"
                    alt="team"
                    text="蔡承運_中科藍寶石(佳作)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/2/9.jpg"
                    alt="team"
                    text="蘇華芳_彩色樹花(佳作)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/2/10.jpg"
                    alt="team"
                    text="趙令級_一起加油(佳作)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/2/11.jpg"
                    alt="team"
                    text="陳建興_上班去(佳作)"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={style.download_section_item}>
            <div>
              <h3>特別獎</h3>
            </div>
            <div>
              <div className={style.photo_area}>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/3/1.jpg"
                    alt="team"
                    text="林國勛_騎上金色山脈的巨輪(中科)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/3/2.jpg"
                    alt="team"
                    text="王善立_正瀚生技景觀魚池(中科)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/3/3.jpg"
                    alt="team"
                    text="張瑞福_火燒晨光(圖文)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/3/4.jpg"
                    alt="team"
                    text="王進明_美光東遊記(圖文)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/3/5.jpg"
                    alt="team"
                    text="黃春麗_夕陽美景照映台中園區(二)(圖文)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/3/6.jpg"
                    alt="team"
                    text="戴孟佳_迎向幸福中科(婚紗)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/3/7.jpg"
                    alt="team"
                    text="李靜宜_我們結婚吧!(婚紗)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/3/8.jpg"
                    alt="team"
                    text="唐蔚光_發現中科之美(景觀)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/3/9.jpg"
                    alt="team"
                    text="李茂楓_夕彩2(景觀)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/3/10.jpg"
                    alt="team"
                    text="趙令級_要科技也要美麗(景觀)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/3/11.jpg"
                    alt="team"
                    text="陳光宏_創新園區之美(景觀)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/3/12.jpg"
                    alt="team"
                    text="黃春麗_台中園區大眾運輸接駁站(一)(景觀)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/3/13.jpg"
                    alt="team"
                    text="趙令級_要科技也要美麗(景觀)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/3/14.jpg"
                    alt="team"
                    text="陳光宏_創新園區之美(景觀)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/3/15.jpg"
                    alt="team"
                    text="黃春麗_台中園區大眾運輸接駁站(一)(景觀)"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={style.download_section_item}>
            <div>
              <h3>入選獎</h3>
            </div>
            <div>
              <div className={style.photo_area}>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/4/1.jpg"
                    alt="team"
                    text="Jimmy P. NERA_Refflectd Light City Lights(入選獎)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/4/2.jpg"
                    alt="team"
                    text="Marana Frane Josef Balut_wedding(入選獎)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/4/3.jpg"
                    alt="team"
                    text="曹加和_相印成趣(入選獎)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/4/4.jpg"
                    alt="team"
                    text="林建宏_夢想園地(入選獎)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/4/5.jpg"
                    alt="team"
                    text="林泊汶_逆游而上(入選獎)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/4/6.jpg"
                    alt="team"
                    text="蔡豐吉_延伸(入選獎)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/4/7.jpg"
                    alt="team"
                    text="陳仕豪_守護(入選獎)"
                  />
                </div>
                <div>
                  <CardWithMoreEffect
                    image_src="https://sd.ctsp.gov.tw/meida/award_photo/4/8.jpg"
                    alt="team"
                    text="陳萬教_卑微處有大美(入選獎)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
