import { Search, Card, Category } from "./index";

function App() {
  return (
    <>
      <Search />
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
