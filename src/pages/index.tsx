import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
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

const Home = ({ zh_data, en_data }: { zh_data: any[]; en_data: any[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  return (
    <>
      <section className={style.slider_mobile}>
        <Carousel
          showArrows={true}
          autoPlay
          infiniteLoop
          interval={6000}
          showStatus={false}>
          <div
            onClick={() => {
              router.push("/e");
            }}>
            <Image
              alt=""
              src={`/images/home/${lang ? "en" : "zh"}/banner3.jpg`}
              sizes={"100vw"}
              width={500}
              height={280}
            />
          </div>
          <div
            onClick={() => {
              router.push("/s");
            }}>
            <Image
              alt=""
              src={`/images/home/${lang ? "en" : "zh"}/banner2.jpg`}
              sizes={"100vw"}
              width={500}
              height={280}
            />
          </div>
          <div
            onClick={() => {
              router.push("/g");
            }}>
            <Image
              alt=""
              src={`/images/home/${lang ? "en" : "zh"}/banner1.jpg`}
              sizes={"100vw"}
              width={500}
              height={280}
            />
          </div>
        </Carousel>
      </section>
      <section className={style.slider_desktop}>
        <Carousel
          showArrows={true}
          autoPlay
          infiniteLoop
          interval={6000}
          showStatus={false}>
          <div
            onClick={() => {
              router.push("/e");
            }}>
            <Image
              alt=""
              src={`/images/home/${lang ? "en" : "zh"}/banner3.jpg`}
              sizes={"100vw"}
              width={500}
              height={380}
            />
          </div>
          <div
            onClick={() => {
              router.push("/s");
            }}>
            <Image
              alt=""
              src={`/images/home/${lang ? "en" : "zh"}/banner2.jpg`}
              sizes={"100vw"}
              width={500}
              height={380}
            />
          </div>
          <div
            onClick={() => {
              router.push("/g");
            }}>
            <Image
              alt=""
              src={`/images/home/${lang ? "en" : "zh"}/banner1.jpg`}
              sizes={"100vw"}
              width={500}
              height={380}
            />
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
                ? "Sustainability Management Performance in 2022-2023"
                : "2022-2023 永續管理績效"}
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
            <div className={`${style.data_container} ${style.data_container2}`}>
              <div className={style.data_type}>
                <p>{lang ? "Environment" : "環境面"}</p>
              </div>
              <RunningNumbers
                c_ahead=""
                n={96.1}
                c={"MW"}
                to_fixed={1}
                is_currency={true}
              />
              <div className={style.data_type}>
                {lang ? "Installed-Capacity" : "事業廢棄物再利用率"}
              </div>
            </div>
            <div className={`${style.data_container} ${style.data_container1}`}>
              <div className={style.data_type}>
                <p>{lang ? "Economic" : "經濟面"}</p>
              </div>
              <RunningNumbers
                n={4631}
                c_ahead={lang ? "" : ""}
                c={lang ? "people" : "人次"}
                to_fixed={0}
                is_currency={true}
              />
              <div className={style.data_type}>
                {lang ? "revenue" : "累計辦理各項產學合作"}
              </div>
            </div>
            <div className={`${style.data_container} ${style.data_container3}`}>
              <div className={style.data_type}>
                <p>{lang ? "Society" : "社會面"}</p>
              </div>
              <RunningNumbers
                n={15935.2}
                c_ahead={lang ? "thousand" : ""}
                c={lang ? "NTD" : "萬元"}
                to_fixed={0}
                is_currency={true}
              />
              <div className={style.data_type}>
                {lang ? "Implemented 77 Programs" : "帶動廠商投入研發投資"}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.content_section}>
        <div className={style.container1}>
          <div className={style.head}>
            <h4>
              {lang ? "NEWS" : "最新消息 / NEWS"}
              <span style={lang ? { display: "none" } : { display: "flex" }}>
                <a
                  href="https://www.ctsp.gov.tw/chinese/01-News/03-custom.aspx?v=1&fr=1000&no=1003"
                  target="_blank">
                  [ 即時新聞澄清 ]
                </a>
              </span>
            </h4>
          </div>
          <div className={style.content}>
            {lang &&
              en_data?.map((i: any) => (
                <div
                  className={style.content_item}
                  key={i.news_id}
                  onClick={() => {
                    router.push(`/en_news/${i.news_id}/?lang=en`);
                  }}>
                  <div className={style.line_container}>
                    <div className={style.circle} />
                    <div className={style.line} />
                  </div>
                  <div>
                    <div>
                      <p>
                        {i.create_date} <br />
                        {i.news_title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            {!lang &&
              zh_data?.map((i: any) => (
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
            <Link href={lang ? "/en_news/?lang=en" : "/news"}>More ...</Link>
          </div>
        </div>
        <div className={style.container2}>
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
            <a
              href={
                "https://www.ctsp.gov.tw/chinese/05-Publication/05-mv.aspx?v=1&fr=1105&no=1110"
              }
              target="_blank">
              More ...
            </a>
          </div>
        </div>
      </section>
      <section className={style.divider_section}></section>
      <section className={style.links_section}>
        <CardWithMoreEffect
          small
          height={"220"}
          image_src="/images/home/zh/局長的話.jpg"
          alt="team"
          link={lang ? "/message_director/?lang=en" : "/message_director/"}
        />
        <CardWithMoreEffect
          small
          height={"220"}
          image_src="/images/home/zh/好站相連.jpg"
          alt="team"
          link={lang ? "/links/?lang=en" : "/links"}
        />
        <CardWithMoreEffect
          small
          height={"220"}
          image_src="/images/home/zh/利害關係人問卷.jpg"
          alt="team"
          link={
            "https://docs.google.com/forms/d/e/1FAIpQLScWzbHpQEQxRFh1eQbQBQ3jS1n0QVZbn1aVAFGcxZdrxBdc0Q/viewform"
          }
        />

        <CardWithMoreEffect
          small
          height={"220"}
          image_src="/images/home/zh/ESG管理績效.jpg"
          alt="team"
          link={lang ? "/csr_performance/?lang=en" : "/csr_performance/"}
        />
      </section>
    </>
  );
};

async function getZhData() {
  const filePath = path.join(process.cwd(), "data", "news.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  return data;
}

async function getEnData() {
  const filePath = path.join(process.cwd(), "data", "en_news.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  return data;
}

export async function getStaticProps(context: any) {
  const zh_data = await getZhData();
  const en_data = await getEnData();

  if (!zh_data || !en_data) {
    return { notFound: true };
  }

  return {
    props: {
      zh_data: zh_data
        .sort(
          (a: any, b: any) =>
            +new Date(b.create_date) - +new Date(a.create_date)
        )
        .map((news: any) => ({
          news_id: news.news_id,
          news_title: news.news_title,
          create_date: news.create_date,
        }))
        .splice(0, 5),
      en_data: en_data
        .sort(
          (a: any, b: any) =>
            +new Date(b.create_date) - +new Date(a.create_date)
        )
        .map((news: any) => ({
          news_id: news.news_id,
          news_title: news.news_title,
          create_date: news.create_date,
        }))
        .splice(0, 5),
    },
  };
}

export default Home;
