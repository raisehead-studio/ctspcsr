import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import Breadcrumb from "../../components/Breadcrumb";
import SideMenu from "../../components/SideMenu";
import VideoWithMoreEffect from "../../components/VideoWithMoreEffect";

import layout from "../layout.module.scss";
import style from "./styles.module.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} id={`simple-tabpanel-${index}`} {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export default function Video() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const menu_zh = [
    {
      title: "互動專區",
      sub: [
        {
          title: "影音專區",
          path: "/video",
        },
        {
          title: "報告書下載",
          path: "/report_download",
        },
        {
          title: "小遊戲(維護中)",
          path: "/",
        },
        {
          title: "好站相連",
          path: "/links",
        },
      ],
    },
  ];

  const menu_en = [
    {
      title: "Interactive",
      sub: [
        {
          title: "Video",
          path: "/video",
        },
        {
          title: "Report Download",
          path: "/report_download",
        },
        {
          title: "Game(under maintenance)",
          path: "/",
        },
        {
          title: "Good Links",
          path: "/links",
        },
      ],
    },
  ];

  return (
    <div className={layout.page_layout}>
      <div className={layout.page_content}>
        <div className={layout.page_header}>
          <strong>{lang === "en" ? "Video" : "影音專區"}</strong>
          <Breadcrumb />
        </div>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              borderBottom: 1,
              my: "5px",
              borderColor: "#a5c33c",
              mb: "20px",
            }}>
            <StyledTabs value={value} onChange={handleChange}>
              <StyledTab label="CSR" />
              <StyledTab label="社會" />
              <StyledTab label="經濟" />
              <StyledTab label="環境" />
            </StyledTabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className={style.video_container}>
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=zhqDR3Gxuv4"}
                youtubeId="zhqDR3Gxuv4"
                image_link="/images/video/csr/1.png"
                title={"漫步．趣遊永續南科"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/embed/v1lgmDckSl4"}
                youtubeId="v1lgmDckSl4"
                image_link="/images/video/csr/2.png"
                title={"伴守禮"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=ka1LSRDBj1Q"}
                youtubeId="ka1LSRDBj1Q"
                image_link="/images/video/csr/3.jpg"
                title={"南科CSR"}
              />
              <VideoWithMoreEffect
                link={
                  "https://drive.google.com/file/d/1D_6Ri0O-0lSaKaK46y2chYUkT59i0GSZ/view"
                }
                image_link="/images/video/csr/4.png"
                title={"2021年永續南科"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=u6t4QzBht9s"}
                youtubeId="u6t4QzBht9s"
                image_link="/images/video/csr/5.jpg"
                title={"南部科學園區2020年年報"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=C4f6L-vi8Oo"}
                youtubeId="C4f6L-vi8Oo"
                image_link="/images/video/csr/6.jpg"
                title={"南部科學園區2019年年報"}
              />
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className={style.video_container}>
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=93pVV0_Q5lk"}
                youtubeId="93pVV0_Q5lk"
                image_link="/images/video/society/1.png"
                title={"2016南科暮春藝文季 聯電吉他社 向前走"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=wM-2-RaqyQE"}
                youtubeId="wM-2-RaqyQE"
                image_link="/images/video/society/2.jpg"
                title={"2016南科暮春藝文季 酒狂查理- 來吃飯"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=0XMEw5eX44k"}
                youtubeId="0XMEw5eX44k"
                image_link="/images/video/society/3.jpg"
                title={"2015南科暮春藝文季 海風樂團－えんどの花"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=wsK5TXfTYVc"}
                youtubeId="wsK5TXfTYVc"
                image_link="/images/video/society/4.jpg"
                title={"2015南科暮春藝文季那拔國小曼陀林樂團"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=P_0Sbj1VEoU"}
                youtubeId="P_0Sbj1VEoU"
                image_link="/images/video/society/5.jpg"
                title={"南管局12週年局慶暨敦親睦鄰活動"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=jK6RUaToFVc"}
                youtubeId="jK6RUaToFVc"
                image_link="/images/video/society/6.jpg"
                title={"2014南科暮春藝文季群創光電 烏克麗麗"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=POzXqIBH7Rc"}
                youtubeId="POzXqIBH7Rc"
                image_link="/images/video/society/7.jpg"
                title={"2013年南科管理局耶誕晚會活動"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=BeHaCKQPSew"}
                youtubeId="BeHaCKQPSew"
                image_link="/images/video/society/8.jpg"
                title={"南管局11週年局慶暨敦親睦鄰活動"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=FYgEcIaX_tM"}
                youtubeId="FYgEcIaX_tM"
                image_link="/images/video/society/9.jpg"
                title={"2013南科暮春藝文季玻利維亞.安地斯樂團 IDILIO"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=xmMC5rs5yCQ"}
                youtubeId="xmMC5rs5yCQ"
                image_link="/images/video/society/10.jpg"
                title={"南科管理局10週年局慶暨年度敦親睦鄰活動"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=erSH__xUIJs"}
                youtubeId="erSH__xUIJs"
                image_link="/images/video/society/11.jpg"
                title={"2012年台南園區耶誕晚會活動"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=xmMC5rs5yCQ"}
                youtubeId="xmMC5rs5yCQ"
                image_link="/images/video/society/12.jpg"
                title={"南科9週年局慶"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=OYN00jH8Mus"}
                youtubeId="OYN00jH8Mus"
                image_link="/images/video/society/13.jpg"
                title={"希望妳好為妳而跑，健康園區南科珍好"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=p1rKSsgHK6U"}
                youtubeId="p1rKSsgHK6U"
                image_link="/images/video/society/14.jpg"
                title={"2011鐵馬樂園"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=6W1ubrD0-iI"}
                youtubeId="6W1ubrD0-iI"
                image_link="/images/video/society/15.jpg"
                title={"2011年耶誕點燈系列活動-歡樂南科"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=NIg_kakLXyU"}
                youtubeId="NIg_kakLXyU"
                image_link="/images/video/society/16.jpg"
                title={"100年聯合家庭日暨公共藝術季開幕"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=Sz4uFmXgsE0"}
                youtubeId="Sz4uFmXgsE0"
                image_link="/images/video/society/17.jpg"
                title={"2011南科暮春藝文季-黃絲帶"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=X6ZR4u3KSXw"}
                youtubeId="X6ZR4u3KSXw"
                image_link="/images/video/society/18.jpg"
                title={"2011南科暮春藝文季-爵士傳唱"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=srZ5LRCRxyM"}
                youtubeId="srZ5LRCRxyM"
                image_link="/images/video/society/19.jpg"
                title={"八週年局慶暨年度敦親睦鄰活動"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=SmHyd-5ReR0"}
                youtubeId="SmHyd-5ReR0"
                image_link="/images/video/society/20.jpg"
                title={"認識南科-文化遺址"}
              />
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <div className={style.video_container}>
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=93pVV0_Q5lk"}
                youtubeId="93pVV0_Q5lk"
                image_link="/images/video/economic/1.png"
                title={"南科就是熱情"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=wM-2-RaqyQE"}
                youtubeId="wM-2-RaqyQE"
                image_link="/images/video/economic/2.png"
                title={"南科亮點新創團隊赴美參展 準備邁向國際市場"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=0XMEw5eX44k"}
                youtubeId="0XMEw5eX44k"
                image_link="/images/video/economic/3.jpg"
                title={"2016T-BIKE自行車之旅"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=wsK5TXfTYVc"}
                youtubeId="wsK5TXfTYVc"
                image_link="/images/video/economic/4.jpg"
                title={"2016年台北國際光電展記者會"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=P_0Sbj1VEoU"}
                youtubeId="P_0Sbj1VEoU"
                image_link="/images/video/economic/5.jpg"
                title={"南管局12週年局慶暨敦親睦鄰活動"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=jK6RUaToFVc"}
                youtubeId="jK6RUaToFVc"
                image_link="/images/video/economic/6.jpg"
                title={"2016年6月13日科技部楊部長視察南科"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=POzXqIBH7Rc"}
                youtubeId="POzXqIBH7Rc"
                image_link="/images/video/economic/7.jpg"
                title={"南科邀請您 讓夢想飛翔"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=BeHaCKQPSew"}
                youtubeId="BeHaCKQPSew"
                image_link="/images/video/economic/8.jpg"
                title={"2014南科就業徵才博覽會"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=FYgEcIaX_tM"}
                youtubeId="FYgEcIaX_tM"
                image_link="/images/video/economic/9.jpg"
                title={"2013南科就業徵才博覽會"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=xmMC5rs5yCQ"}
                youtubeId="xmMC5rs5yCQ"
                image_link="/images/video/economic/10.jpg"
                title={"2012南科就業徵才博覽會暨優良勞工表揚活動"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=erSH__xUIJs"}
                youtubeId="erSH__xUIJs"
                image_link="/images/video/economic/11.jpg"
                title={"認識南科_南風再起"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=xmMC5rs5yCQ"}
                youtubeId="xmMC5rs5yCQ"
                image_link="/images/video/economic/12.jpg"
                title={"2011南科就業徵才博覽會暨優良勞工"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=OYN00jH8Mus"}
                youtubeId="OYN00jH8Mus"
                image_link="/images/video/economic/13.jpg"
                title={"認識南科-開發建設"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=p1rKSsgHK6U"}
                youtubeId="p1rKSsgHK6U"
                image_link="/images/video/economic/14.jpg"
                title={"認識南科-產學研發"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=6W1ubrD0-iI"}
                youtubeId="6W1ubrD0-iI"
                image_link="/images/video/economic/15.jpg"
                title={"第二屆南科之美-南科狂想曲"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=NIg_kakLXyU"}
                youtubeId="NIg_kakLXyU"
                image_link="/images/video/economic/16.jpg"
                title={"第二屆南科之美-南科二期基地"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=Sz4uFmXgsE0"}
                youtubeId="Sz4uFmXgsE0"
                image_link="/images/video/economic/17.jpg"
                title={"第二屆南科之美-國境之南"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=X6ZR4u3KSXw"}
                youtubeId="X6ZR4u3KSXw"
                image_link="/images/video/economic/18.jpg"
                title={"第一屆南科之美-02-南部管理局5週年局慶"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=srZ5LRCRxyM"}
                youtubeId="srZ5LRCRxyM"
                image_link="/images/video/economic/19.jpg"
                title={"八週年局慶暨年度敦親睦鄰活動"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=SmHyd-5ReR0"}
                youtubeId="SmHyd-5ReR0"
                image_link="/images/video/economic/20.jpg"
                title={"認識南科-文化遺址"}
              />
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <div className={style.video_container}>
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=93pVV0_Q5lk"}
                youtubeId="93pVV0_Q5lk"
                image_link="/images/video/environment/1.jpg"
                title={"南科&知性之旅"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=93pVV0_Q5lk"}
                youtubeId="93pVV0_Q5lk"
                image_link="/images/video/environment/1.jpg"
                title={"悸動。繫戀"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=93pVV0_Q5lk"}
                youtubeId="93pVV0_Q5lk"
                image_link="/images/video/environment/1.jpg"
                title={"萬象版"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=93pVV0_Q5lk"}
                youtubeId="93pVV0_Q5lk"
                image_link="/images/video/environment/1.jpg"
                title={"南風徐徐美哉南科"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=93pVV0_Q5lk"}
                youtubeId="93pVV0_Q5lk"
                image_link="/images/video/environment/1.jpg"
                title={"請跟蛙蛙遊南科"}
              />
              <VideoWithMoreEffect
                link={"https://www.youtube.com/watch?v=93pVV0_Q5lk"}
                youtubeId="93pVV0_Q5lk"
                image_link="/images/video/environment/1.jpg"
                title={"南科之戀"}
              />
            </div>
          </CustomTabPanel>
        </Box>
      </div>
      <div className={style.page_sidemenu}>
        <SideMenu />
      </div>
    </div>
  );
}

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{
      children: <span className="MuiTabs-indicatorSpan" />,
    }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    display: "none",
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: "#000",
  "&.Mui-selected": {
    color: "#fff",
    backgroundColor: "#a5c33c",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
  [theme.breakpoints.down("md")]: {
    "&.MuiButtonBase-root": {
      minWidth: 70,
    },
  },
}));
