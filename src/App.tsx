import { Search, Card, Category, HotAds } from "./index";
function App() {

  const adsData = {
    bannerImg: 'https://admin-b2b2c.pickmall.cn/img/decorate1.ce875c0e.png',
    adsList: [
      { id: 'ad1', img: 'https://admin-b2b2c.pickmall.cn/img/1.ce23a19e.jpg' },
      { id: 'ad2', img: 'https://admin-b2b2c.pickmall.cn/img/1.ce23a19e.jpg' },
      { id: 'ad3', img: 'https://admin-b2b2c.pickmall.cn/img/1.ce23a19e.jpg' },
      { id: 'ad4', img: 'https://admin-b2b2c.pickmall.cn/img/1.ce23a19e.jpg' },
      { id: 'ad5', img: 'https://admin-b2b2c.pickmall.cn/img/1.ce23a19e.jpg' },
    ],
  };
  return (
    <>
      <HotAds bannerImg={adsData.bannerImg} adsList={adsData.adsList} />
      <Search />
      <Card.Card5 name={'丁俊晖'}/>
      <Card.Card4 name={123}/>
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
    </>
  );
}

export default App;
