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

  if (lang === "en") {
    return (
      <>
        <section className={style.carousel_root}>
          <Carousel showArrows={true} autoPlay infiniteLoop>
            <div>
              <a href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=143">
                <Image
                  alt=""
                  src="/images/home/en/banner1.png"
                  sizes={"100vw"}
                  width={500}
                  height={400}
                />
              </a>
            </div>
            <div>
              <a href="">
                <Image
                  alt=""
                  src="/images/home/en/banner2.png"
                  sizes={"100vw"}
                  width={500}
                  height={400}
                />
              </a>
            </div>
            <div>
              <a href="">
                <Image
                  alt=""
                  src="/images/home/en/banner3.png"
                  sizes={"100vw"}
                  width={500}
                  height={400}
                />
              </a>
            </div>
          </Carousel>
        </section>
        <section className={style.performance_data_section}>
          <div className={style.performance_data_container}>
            <div className={style.head}>
              <p
                className={style.eternal}
                style={{
                  marginTop: "50px",
                }}>
                Sustainability Management Performance 2022
              </p>
            </div>
            <div className={`${style.data_container} ${style.data_container1}`}>
              <RunningNumbers
                n={1.483374}
                c={"NTD"}
                c_ahead="trillion"
                to_fixed={2}
                is_currency={true}
                is_trillion={false}
              />
              <div className={style.data_type}>
                <p>The annual turnover of STSP</p>
              </div>
            </div>
            <div className={`${style.data_container} ${style.data_container2}`}>
              <RunningNumbers n={272} c={""} to_fixed={0} is_currency={true} />
              <div className={style.data_type}>
                <p
                  style={{
                    textAlign: "center",
                  }}>
                  The cumulative validly <br />
                  approved manufacturers
                </p>
              </div>
            </div>
            <div className={`${style.data_container} ${style.data_container3}`}>
              <RunningNumbers
                n={951}
                c={"visitors"}
                to_fixed={0}
                is_currency={true}
              />
              <div className={style.data_type}>
                <p
                  style={{
                    textAlign: "center",
                  }}>
                  Domestic and foreign groups <br /> visited STSP
                </p>
              </div>
            </div>
            <div className={`${style.data_container} ${style.data_container4}`}>
              <RunningNumbers
                n={93.19}
                c={"%"}
                to_fixed={2}
                is_currency={true}
              />
              <div className={style.data_type}>
                <p>Waste recycling rate</p>
              </div>
            </div>
            <div className={`${style.data_container} ${style.data_container5}`}>
              <RunningNumbers
                n={4680.8}
                c={"Million kWh/year"}
                to_fixed={2}
                is_currency={true}
              />
              <div className={style.data_type}>
                <p>Cumulative water saving potential</p>
              </div>
            </div>
            <div className={`${style.data_container} ${style.data_container6}`}>
              <RunningNumbers
                n={10536.1}
                c={"Million kWh/year"}
                to_fixed={2}
                is_currency={true}
              />
              <div className={style.data_type}>
                <p>Cumulative power saving potential</p>
              </div>
            </div>
            <div className={style.menu_button}>
              <Link href={"/performance"}>MORE</Link>
            </div>
          </div>
        </section>
        <section className={style.content_section}>
          <div className={style.container1}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/v1lgmDckSl4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}></iframe>
          </div>
          {/* <div className={style.container2}>
            <iframe
              width="560"
              height="315"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fstsp543%2F&tabs=timeline&width=625&height=365&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}></iframe>
          </div>
          <div className={style.container3}>
            <CardWithMoreEffect
              small
              height={"370"}
              image_src="/images/home/en/team_icon4.jpg"
              alt="team"
              link="/message_director?lang=en"
            />
            <div>
              <CardWithMoreEffect
                small
                height={"170"}
                image_src="/images/home/en/team_icon2.png"
                alt="team"
                link="/csr_company_list?lang=en"
              />
              <CardWithMoreEffect
                small
                height={"170"}
                image_src="/images/home/en/team_icon3.jpg"
                alt="team"
                link="/links?lang=en"
              />
            </div>
          </div>
          <div className={style.container4}>
            <CardWithMoreEffect
              height={"370"}
              image_src="/images/home/en/team_icon1.jpg"
              alt="team"
              link="/vision_and_blueprint?lang=en"
              small={false}
            />
          </div> */}
        </section>
        <section className={style.download_section}>
          <div className={style.head}>
            <h2 style={{ textTransform: "none" }}>Report Download</h2>
            <hr />
          </div>
          <div className={style.desktop_slider}>
            <Slider
              dots={false}
              infinite={true}
              speed={100}
              slidesToShow={4}
              slidesToScroll={1}
              autoplay={true}>
              {[
                { year: 2022, photo: "2022.png" },
                { year: 2021, photo: "2021.png" },
                { year: 2020, photo: "2020.png" },
                { year: 2019, photo: "2019.png" },
                { year: 2018, photo: "2018.png" },
                { year: 2017, photo: "2017.png" },
                { year: 2016, photo: "2016.png" },
                { year: 2015, photo: "2015.jpg" },
                { year: 2014, photo: "2014.jpg" },
                { year: 2013, photo: "2013.jpg" },
                { year: 2012, photo: "101.jpg" },
                { year: 2011, photo: "100.jpg" },
              ].map((i) => (
                <div key={i.year}>
                  <Link
                    href={`https://www.stspcsr.com.tw/download/${i.year}_zh.pdf`}
                    target="_blank">
                    <Image
                      src={`/images/report_download/zh/${i.photo}`}
                      width={245}
                      height={i.year < 2013 ? 145 : 345}
                      alt="team"
                      style={{
                        boxShadow: "3px 3px 8px gray",
                      }}
                    />
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
          <div className={style.mobile_slider}>
            <Slider
              dots={false}
              infinite={true}
              speed={100}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}>
              {[
                { year: 2022, photo: "2022.png" },
                { year: 2021, photo: "2021.png" },
                { year: 2020, photo: "2020.png" },
                { year: 2019, photo: "2019.png" },
                { year: 2018, photo: "2018.png" },
                { year: 2017, photo: "2017.png" },
                { year: 2016, photo: "2016.png" },
                { year: 2015, photo: "2015.jpg" },
                { year: 2014, photo: "2014.jpg" },
                { year: 2013, photo: "2013.jpg" },
                { year: 2012, photo: "101.jpg" },
                { year: 2011, photo: "100.jpg" },
              ].map((i) => (
                <div key={i.year}>
                  <Link
                    href={`https://www.stspcsr.com.tw/download/${i.year}_zh.pdf`}
                    target="_blank">
                    <Image
                      src={`/images/report_download/zh/${i.photo}`}
                      width={245}
                      height={i.year < 2013 ? 145 : 345}
                      alt="team"
                      style={{
                        boxShadow: "3px 3px 8px gray",
                      }}
                    />
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section>
        <Carousel showArrows={true} autoPlay infiniteLoop>
          <div>
            <a href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=143">
              <Image
                alt=""
                src="/images/home/zh/banner1.png"
                sizes={"100vw"}
                width={500}
                height={370}
              />
            </a>
          </div>
          <div>
            <a href="">
              <Image
                alt=""
                src="/images/home/zh/banner2.png"
                sizes={"100vw"}
                width={500}
                height={370}
              />
            </a>
          </div>
          <div>
            <a href="">
              <Image
                alt=""
                src="/images/home/zh/banner3.png"
                sizes={"100vw"}
                width={500}
                height={370}
              />
            </a>
          </div>
        </Carousel>
      </section>
      <section className={style.main_section}>
        <h4 className={style.head}>積極實踐永續發展目標</h4>
        <div className={style.divider}>
          <div className={style.line}></div>
          <div>
            <KeyboardArrowDownIcon />
          </div>
          <div className={style.line}></div>
        </div>
        <div className={style.text}>
          <p>
            提供高科技產業優質之環境，鼓勵研究發展及製造高科技工業產品，進而帶動科技產業技術提昇，
            <br />
            促進中部地區產業之升級，並形成中部高科技產業新聚落。
          </p>
        </div>
        <div className={style.image}>
          <Image
            objectFit="contain"
            src="/images/home/zh/main.png"
            layout="fill"
            alt="team"
          />
        </div>
      </section>
      <section className={style.performance_data_section}>
        <div className={style.performance_data_container}>
          <div className={style.head}>
            <p className={style.year}>2021 永續管理績效</p>
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
                <p>經濟面</p>
              </div>
              <RunningNumbers
                n={9353}
                c={"億元"}
                to_fixed={0}
                is_currency={true}
              />
              <div className={style.data_type}>
                <RunningNumbers
                  n={9353}
                  c_ahead="營業額達"
                  c={"億元"}
                  to_fixed={0}
                  is_currency={true}
                  is_table
                />
              </div>
            </div>
            <div className={`${style.data_container} ${style.data_container2}`}>
              <div className={style.data_type}>
                <p>環境面</p>
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
                  c_ahead="太陽能發電裝置容量達"
                  c={"MW"}
                  to_fixed={2}
                  is_currency={true}
                  is_table
                />
              </div>
            </div>
            <div className={`${style.data_container} ${style.data_container3}`}>
              <div className={style.data_type}>
                <p>社會面</p>
              </div>
              <RunningNumbers
                n={55937}
                c={"XX"}
                to_fixed={0}
                is_currency={true}
              />
              <div className={style.data_type}>
                <RunningNumbers
                  n={5937}
                  c_ahead="辦理紓困方案共77件，統計"
                  c={"千元"}
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
        <div className={style.container1}>
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
        <div className={style.container2}>
          <div className={style.head}>
            <h4>中科影音 / VIDEO</h4>
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
          image_src="/images/home/zh/team_icon2.jpg"
          alt="team"
          link="/message_director"
          text="局長的話"
          text_container_color="rgba(91, 39, 245, 0.2)"
        />
        <CardWithMoreEffect
          small
          height={"220"}
          image_src="/images/home/zh/team_icon4.png"
          alt="team"
          link="/focus/1/"
          text="開拓永續水資源"
          text_container_color="rgba(39, 82, 245, 0.4)"
        />
        <CardWithMoreEffect
          small
          height={"220"}
          image_src="/images/home/zh/team_icon3.png"
          alt="team"
          link="/focus/2/"
          text="疫起守護護國神山群"
          text_container_color="rgba(245, 39, 43, 0.4)"
        />

        <CardWithMoreEffect
          small
          height={"220"}
          image_src="/images/home/zh/team_icon2.png"
          alt="team"
          link="/focus/3/"
          text="振興中部產業"
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
