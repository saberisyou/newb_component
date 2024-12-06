import { Search, Card, Category, HotAds, Instagram } from "./index";
import { Card4 } from "./component/card/Card_4";

function App() {
  const adsData = {
    bannerImg: "https://admin-b2b2c.pickmall.cn/img/decorate1.ce875c0e.png",
    adsList: [
      { id: "ad1", img: "https://admin-b2b2c.pickmall.cn/img/1.ce23a19e.jpg" },
      { id: "ad2", img: "https://admin-b2b2c.pickmall.cn/img/1.ce23a19e.jpg" },
      { id: "ad3", img: "https://admin-b2b2c.pickmall.cn/img/1.ce23a19e.jpg" },
      { id: "ad4", img: "https://admin-b2b2c.pickmall.cn/img/1.ce23a19e.jpg" },
      { id: "ad5", img: "https://admin-b2b2c.pickmall.cn/img/1.ce23a19e.jpg" },
    ],
  };
  const recommendGoodses = [
    {
      goodsId: 11027,
      goodsName: "XACC3i",
      goodsIntro: "XACC3i",
      goodsCoverImg: "http://www.thethirdacsupply.com/upload/XACC3i.jpg",
      sellingPrice: 107995,
      tag: "",
    },
    {
      goodsId: 11028,
      goodsName: "XACC5i",
      goodsIntro: "XACC5i",
      goodsCoverImg: "http://www.thethirdacsupply.com/upload/XACC5i.jpg",
      sellingPrice: 160695,
      tag: "",
    },
    {
      goodsId: 11029,
      goodsName: "XACM3i",
      goodsIntro: "XACM3i",
      goodsCoverImg: "http://www.thethirdacsupply.com/upload/XACM3i.jpg",
      sellingPrice: 105995,
      tag: "",
    },
    {
      goodsId: 11011,
      goodsName: "XACWT20i",
      goodsIntro: "XACWT20i",
      goodsCoverImg: "http://www.thethirdacsupply.com/upload/XACWT20i.jpg",
      sellingPrice: 36800,
      tag: "",
    },
    {
      goodsId: 11012,
      goodsName: "XACWT25i",
      goodsIntro: "XACWT25i",
      goodsCoverImg: "http://www.thethirdacsupply.com/upload/XACWT25i.jpg",
      sellingPrice: 38800,
      tag: "",
    },
    {
      goodsId: 11014,
      goodsName: "XACST15",
      goodsIntro: "XACST15",
      goodsCoverImg: "http://www.thethirdacsupply.com/upload/XACST15.jpg",
      sellingPrice: 23800,
      tag: "",
    },
    {
      goodsId: 11015,
      goodsName: "XACST20",
      goodsIntro: "XACST20",
      goodsCoverImg: "http://www.thethirdacsupply.com/upload/XACST20.jpg",
      sellingPrice: 30800,
      tag: "",
    },
    {
      goodsId: 11016,
      goodsName: "XACST25",
      goodsIntro: "XACST25",
      goodsCoverImg: "http://www.thethirdacsupply.com/upload/XACST25.jpg",
      sellingPrice: 35995,
      tag: "",
    },
    {
      goodsId: 11017,
      goodsName: "XACST10i",
      goodsIntro: "XACST10i",
      goodsCoverImg: "http://www.thethirdacsupply.com/upload/XACST10i.jpg",
      sellingPrice: 27800,
      tag: "",
    },
    {
      goodsId: 11018,
      goodsName: "XACST15i",
      goodsIntro: "XACST15i",
      goodsCoverImg: "http://www.thethirdacsupply.com/upload/XACST15i.jpg",
      sellingPrice: 32345,
      tag: "",
    },
  ];

  return (
    <div
      style={{
        width: 1200,
        margin: "0 auto",
      }}
    >
      <Card4
        span={6}
        list={recommendGoodses}
        title={"Let’s Find Your"}
        subtitle={"Our Recommend"}
      />

      <Instagram.Instagram1 />

      <HotAds bannerImg={adsData.bannerImg} adsList={adsData.adsList} />
      <Search />
      <Card.Card5 name={"丁俊晖"} />

      <Category />
      <Card.Card3
        title={"123"}
        list={[
          {
            goodsId: 11019,
            goodsName: "CUSTARD CAKES",
            goodsIntro: "CUSTARD CAKES",
            goodsCoverImg:
              "http://www.rollsroicecakes.com/upload/custard_cake.jpg",
            sellingPrice: 100,
            tag: "",
          },
          {
            goodsId: 11018,
            goodsName: "MATCHA CAKE",
            goodsIntro: "MATCHA CAKE",
            goodsCoverImg:
              "http://www.rollsroicecakes.com/upload/matcha_cake.jpg",
            sellingPrice: 100,
            tag: "",
          },
          {
            goodsId: 11017,
            goodsName: "SANSRIVAL CAKE",
            goodsIntro: "SANSRIVAL CAKE",
            goodsCoverImg:
              "http://www.rollsroicecakes.com/upload/sansrival_cake.jpg",
            sellingPrice: 100,
            tag: "",
          },
          {
            goodsId: 11016,
            goodsName: "TIRAMISU CAKE",
            goodsIntro: "TIRAMISU CAKE",
            goodsCoverImg:
              "http://www.rollsroicecakes.com/upload/tiramisu_cake.jpg",
            sellingPrice: 100,
            tag: "",
          },
          {
            goodsId: 11015,
            goodsName: "DULCE DE LECHE CAKE",
            goodsIntro: "DULCE DE LECHE CAKE",
            goodsCoverImg:
              "http://www.rollsroicecakes.com/upload/dulce_de_leche_cake.jpg",
            sellingPrice: 100,
            tag: "",
          },
        ]}
      />
    </div>
  );
}

export default App;
