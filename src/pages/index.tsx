import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { useSearchParams } from "next/navigation";
import { Carousel } from "react-responsive-carousel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import path from "path";
import fs from "fs/promises";

import RunningNumbers from "../components/RunningNumbers";
import CardWithMoreEffect from "../components/CardWithMoreEffect";

import style from "./layout.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = ({ data }: { data: any[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  return (
    <>
      <section className={style.slider_mobile}>
        <Carousel showArrows={true} autoPlay infiniteLoop interval={6000}>
          <div>
            <a href="">
              <Image
                alt=""
                src={`/images/home/${lang ? "en" : "zh"}/banner3.png`}
                sizes={"100vw"}
                width={500}
                height={280}
              />
            </a>
          </div>
          <div>
            <a href="">
              <Image
                alt=""
                src={`/images/home/${lang ? "en" : "zh"}/banner2.png`}
                sizes={"100vw"}
                width={500}
                height={280}
              />
            </a>
          </div>

          <div>
            <a href="">
              <Image
                alt=""
                src={`/images/home/${lang ? "en" : "zh"}/banner1.png`}
                sizes={"100vw"}
                width={500}
                height={280}
              />
            </a>
          </div>
        </Carousel>
      </section>
      <section className={style.slider_desktop}>
        <Carousel showArrows={true} autoPlay infiniteLoop interval={6000}>
          <div>
            <a href="">
              <Image
                alt=""
                src={`/images/home/${lang ? "en" : "zh"}/banner3.png`}
                sizes={"100vw"}
                width={500}
                height={380}
              />
            </a>
          </div>
          <div>
            <a href="">
              <Image
                alt=""
                src={`/images/home/${lang ? "en" : "zh"}/banner2.png`}
                sizes={"100vw"}
                width={500}
                height={380}
              />
            </a>
          </div>

          <div>
            <a href="">
              <Image
                alt=""
                src={`/images/home/${lang ? "en" : "zh"}/banner1.png`}
                sizes={"100vw"}
                width={500}
                height={380}
              />
            </a>
          </div>
        </Carousel>
      </section>
      <section className={style.main_section}>
        <h4 className={style.head}>
          {lang
            ? "Actively Implementing Sustainable Development Goals"
            : "積極實踐永續發展目標"}
        </h4>
        <div className={style.divider}>
          <div className={style.line}></div>
          <div>
            <KeyboardArrowDownIcon />
          </div>
          <div className={style.line}></div>
        </div>
        <div className={style.text}>
          <p>
            {lang
              ? "Provide a high-tech industry-friendly environment, encourage R&D and manufacturing of high-tech industrial products, "
              : ""}
            <br />
            {lang
              ? "and drive technological advancement in the tech industry."
              : "提供高科技產業優質之環境，鼓勵研究發展及製造高科技工業產品，進而帶動科技產業技術提昇，"}
            <br />
            {lang
              ? "Promote industrial upgrading in the central region and establish a new hub for high-tech industries."
              : "促進中部地區產業之升級，並形成中部高科技產業新聚落。"}
          </p>
        </div>
        <div className={style.image}>
          <Image
            objectFit="contain"
            src={`/images/home/${lang ? "en" : "zh"}/main.png`}
            layout="fill"
            alt="team"
          />
        </div>
      </section>
      <section className={style.performance_data_section}>
        <div className={style.performance_data_container}>
          <div className={style.head}>
            <p className={style.year}>
              {lang
                ? "Sustainability Management Performance in 2021"
                : "2021 永續管理績效"}
            </p>
            <div className={style.poly_container}>
              <Image
                src="/images/home/polygon.png"
                width={50}
                height={40}
                alt=""
              />
            </div>
          </div>
          <div className={style.performance_data_content_container}>
            <div className={`${style.data_container} ${style.data_container1}`}>
              <div className={style.data_type}>
                <p>{lang ? "Economic" : "經濟面"}</p>
              </div>
              <RunningNumbers
                n={9353}
                c_ahead={lang ? "billions" : ""}
                c={lang ? "NTD" : "億元"}
                to_fixed={0}
                is_currency={true}
              />
              <div className={style.data_type}>
                <RunningNumbers
                  n={9353}
                  c_ahead={lang ? "revenue" : "營業額達"}
                  c={lang ? "billion NTD" : "億元"}
                  to_fixed={0}
                  is_currency={true}
                  is_table
                />
              </div>
            </div>
            <div className={`${style.data_container} ${style.data_container2}`}>
              <div className={style.data_type}>
                <p>{lang ? "Environment" : "環境面"}</p>
              </div>
              <RunningNumbers
                c_ahead=""
                n={46}
                c={"MW"}
                to_fixed={0}
                is_currency={true}
              />
              <div className={style.data_type}>
                <RunningNumbers
                  n={46.33}
                  c_ahead={lang ? "Installed-Capacity" : "太陽能發電裝置容量達"}
                  c={"MW"}
                  to_fixed={2}
                  is_currency={true}
                  is_table
                />
              </div>
            </div>
            <div className={`${style.data_container} ${style.data_container3}`}>
              <div className={style.data_type}>
                <p>{lang ? "Society" : "社會面"}</p>
              </div>
              <RunningNumbers
                n={55937}
                c_ahead={lang ? "thousand" : ""}
                c={lang ? "NTD" : "千元"}
                to_fixed={0}
                is_currency={true}
              />
              <div className={style.data_type}>
                <RunningNumbers
                  n={lang ? 5937000 : 5937}
                  c_ahead={
                    lang
                      ? "Implemented 77 Programs"
                      : "辦理紓困方案共77件，統計"
                  }
                  c={lang ? "" : "千元"}
                  to_fixed={0}
                  is_currency={true}
                  is_table
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.content_section}>
        <div
          className={style.container1}
          style={lang ? { display: "none" } : { display: "flex" }}>
          <div className={style.head}>
            <h4>
              最新消息 / NEWS{" "}
              <span>
                <a
                  href="https://www.ctsp.gov.tw/chinese/01-News/03-custom.aspx?v=1&fr=1000&no=1003"
                  target="_blank">
                  [ 即時新聞澄清 ]
                </a>
              </span>
            </h4>
          </div>
          <div className={style.content}>
            {data?.map((i: any) => (
              <div
                className={style.content_item}
                key={i.news_id}
                onClick={() => {
                  router.push(`/news/${i.news_id}`);
                }}>
                <div className={style.line_container}>
                  <div className={style.circle} />
                  <div className={style.line} />
                </div>
                <div>
                  <div>
                    <p>{i.create_date}</p>
                  </div>
                  <div>
                    <p>{i.news_title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={style.more}>
            <Link href={"/news"}>More ...</Link>
          </div>
        </div>
        <div className={lang ? style.container1 : style.container2}>
          <div className={style.head}>
            <h4>{lang ? "VIDEO" : "中科影音 / VIDEO"}</h4>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MNKPH-S1wOA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}></iframe>
          <div className={style.more}>
            <Link href={"/c1"}>More ...</Link>
          </div>
        </div>
      </section>
      <section className={style.divider_section}></section>
      <section className={style.links_section}>
        <CardWithMoreEffect
          small
          height={"220"}
          image_src="/images/images/image54.png"
          alt="team"
          link={lang ? "/message_director/?lang=en" : "/message_director/"}
          text={lang ? "Message from the Director-General" : "局長的話"}
          text_container_color="rgba(91, 39, 245, 0.2)"
        />
        <CardWithMoreEffect
          small
          height={"220"}
          image_src="/images/home/zh/team_icon4.png"
          alt="team"
          link={lang ? "/focus/1/?lang=en" : "/focus/1"}
          text={
            lang ? "Developing sustainable water resources" : "開拓永續水資源"
          }
          text_container_color="rgba(39, 82, 245, 0.4)"
        />
        <CardWithMoreEffect
          small
          height={"220"}
          image_src="/images/home/zh/team_icon3.png"
          alt="team"
          link={lang ? "/focus/2/?lang=en" : "/focus/2/"}
          text={
            lang
              ? "In the epidemic, jointly protect competitive industries"
              : "疫起守護護國神山群"
          }
          text_container_color="rgba(245, 39, 43, 0.4)"
        />

        <CardWithMoreEffect
          small
          height={"220"}
          image_src="/images/home/zh/team_icon2.png"
          alt="team"
          link={lang ? "/focus/3/?lang=en" : "/focus/3/"}
          text={lang ? "Message from the Director-General" : "振興中部產業"}
          text_container_color="rgba(39, 99, 245, 0.66)"
        />
      </section>
    </>
  );
};

async function getData() {
  const filePath = path.join(process.cwd(), "data", "news.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  return data;
}

export async function getStaticProps(context: any) {
  const data = await getData();
  const news = data
    .sort(
      (a: any, b: any) => +new Date(b.create_date) - +new Date(a.create_date)
    )
    .map((news: any) => ({
      news_id: news.news_id,
      news_title: news.news_title,
      create_date: news.create_date,
    }));

  if (!news) {
    return { notFound: true };
  }

  return {
    props: {
      data: news.splice(0, 5),
    },
  };
}

export default Home;
