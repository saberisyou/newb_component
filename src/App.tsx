import { Search, Card, Category, HotAds, Instagram } from "./index";
import { Card4 } from "./component/card/Card_4";
import {Category4} from "./component/category";

function App() {

  const categoryList=[
    {
      "categoryId": 10001,
      "categoryLevel": 1,
      "categoryName": "Window Type Non-Inverter",
      "secondLevelCategoryVOS": [
        {
          "categoryId": 10002,
          "parentId": 10001,
          "categoryLevel": 2,
          "categoryName": "XACWT05",
          "thirdLevelCategoryVOS": null
        },
        {
          "categoryId": 10006,
          "parentId": 10001,
          "categoryLevel": 2,
          "categoryName": "XACWT25",
          "thirdLevelCategoryVOS": null
        },
        {
          "categoryId": 10005,
          "parentId": 10001,
          "categoryLevel": 2,
          "categoryName": "XACWT20",
          "thirdLevelCategoryVOS": null
        },
        {
          "categoryId": 10004,
          "parentId": 10001,
          "categoryLevel": 2,
          "categoryName": "XACWT15",
          "thirdLevelCategoryVOS": null
        },
        {
          "categoryId": 10003,
          "parentId": 10001,
          "categoryLevel": 2,
          "categoryName": "XACWT10",
          "thirdLevelCategoryVOS": null
        }
      ]
    },
    {
      "categoryId": 10007,
      "categoryLevel": 1,
      "categoryName": "Window w/ Remote Non-Inverter",
      "secondLevelCategoryVOS": [
        {
          "categoryId": 10011,
          "parentId": 10007,
          "categoryLevel": 2,
          "categoryName": "XACWT25R",
          "thirdLevelCategoryVOS": null
        },
        {
          "categoryId": 10010,
          "parentId": 10007,
          "categoryLevel": 2,
          "categoryName": "XACWT20R",
          "thirdLevelCategoryVOS": null
        },
        {
          "categoryId": 10009,
          "parentId": 10007,
          "categoryLevel": 2,
          "categoryName": "XACWT15R",
          "thirdLevelCategoryVOS": null
        },
        {
          "categoryId": 10008,
          "parentId": 10007,
          "categoryLevel": 2,
          "categoryName": "XACWT10R",
          "thirdLevelCategoryVOS": null
        }
      ]
    },
    {
      "categoryId": 10012,
      "categoryLevel": 1,
      "categoryName": "Window Inverter",
      "secondLevelCategoryVOS": [
        {
          "categoryId": 10016,
          "parentId": 10012,
          "categoryLevel": 2,
          "categoryName": "XACWT25i",
          "thirdLevelCategoryVOS": null
        },
        {
          "categoryId": 10015,
          "parentId": 10012,
          "categoryLevel": 2,
          "categoryName": "XACWT20i",
          "thirdLevelCategoryVOS": null
        },
        {
          "categoryId": 10014,
          "parentId": 10012,
          "categoryLevel": 2,
          "categoryName": "XACWT15i",
          "thirdLevelCategoryVOS": null
        },
        {
          "categoryId": 10013,
          "parentId": 10012,
          "categoryLevel": 2,
          "categoryName": "XACWT10i",
          "thirdLevelCategoryVOS": null
        }
      ]
    },
    {
      "categoryId": 10017,
      "categoryLevel": 1,
      "categoryName": "Split Type Non-Inverter",
      "secondLevelCategoryVOS": [
        {
          "categoryId": 10021,
          "parentId": 10017,
          "categoryLevel": 2,
          "categoryName": "XACST25",
          "thirdLevelCategoryVOS": null
        },
        {
          "categoryId": 10020,
          "parentId": 10017,
          "categoryLevel": 2,
          "categoryName": "XACST20",
          "thirdLevelCategoryVOS": null
        },
        {
          "categoryId": 10019,
          "parentId": 10017,
          "categoryLevel": 2,
          "categoryName": "XACST15",
          "thirdLevelCategoryVOS": null
        },
        {
          "categoryId": 10018,
          "parentId": 10017,
          "categoryLevel": 2,
          "categoryName": "XACST10",
          "thirdLevelCategoryVOS": null
        }
      ]
    },
    {
      "categoryId": 10022,
      "categoryLevel": 1,
      "categoryName": "Split Type Inverter",
      "secondLevelCategoryVOS": [
        {
          "categoryId": 10026,
          "parentId": 10022,
          "categoryLevel": 2,
          "categoryName": "XACST25i",
          "thirdLevelCategoryVOS": null
        },
        {
          "categoryId": 10025,
          "parentId": 10022,
          "categoryLevel": 2,
          "categoryName": "XACST20i",
          "thirdLevelCategoryVOS": null
        },
        {
          "categoryId": 10024,
          "parentId": 10022,
          "categoryLevel": 2,
          "categoryName": "XACST15i",
          "thirdLevelCategoryVOS": null
        },
        {
          "categoryId": 10023,
          "parentId": 10022,
          "categoryLevel": 2,
          "categoryName": "XACST10i",
          "thirdLevelCategoryVOS": null
        }
      ]
    },
    {
      "categoryId": 10027,
      "categoryLevel": 1,
      "categoryName": "Floor Standing Non-Inverter",
      "secondLevelCategoryVOS": [
        {
          "categoryId": 10029,
          "parentId": 10027,
          "categoryLevel": 2,
          "categoryName": "XACFS5",
          "thirdLevelCategoryVOS": null
        },
        {
          "categoryId": 10028,
          "parentId": 10027,
          "categoryLevel": 2,
          "categoryName": "XACFS3",
          "thirdLevelCategoryVOS": null
        }
      ]
    },
    {
      "categoryId": 10030,
      "categoryLevel": 1,
      "categoryName": "Floor Standing Inverter",
      "secondLevelCategoryVOS": [
        {
          "categoryId": 10032,
          "parentId": 10030,
          "categoryLevel": 2,
          "categoryName": "XACFS5i",
          "thirdLevelCategoryVOS": null
        },
        {
          "categoryId": 10031,
          "parentId": 10030,
          "categoryLevel": 2,
          "categoryName": "XACFS3i",
          "thirdLevelCategoryVOS": null
        }
      ]
    },
    {
      "categoryId": 10033,
      "categoryLevel": 1,
      "categoryName": "Ceiling Cassette Non-Inverter",
      "secondLevelCategoryVOS": [
        {
          "categoryId": 10035,
          "parentId": 10033,
          "categoryLevel": 2,
          "categoryName": "XACC5",
          "thirdLevelCategoryVOS": null
        },
        {
          "categoryId": 10034,
          "parentId": 10033,
          "categoryLevel": 2,
          "categoryName": "XACC3",
          "thirdLevelCategoryVOS": null
        }
      ]
    },
    {
      "categoryId": 10036,
      "categoryLevel": 1,
      "categoryName": "Ceiling Cassette Inverter",
      "secondLevelCategoryVOS": [
        {
          "categoryId": 10038,
          "parentId": 10036,
          "categoryLevel": 2,
          "categoryName": "XACC5i",
          "thirdLevelCategoryVOS": null
        },
        {
          "categoryId": 10037,
          "parentId": 10036,
          "categoryLevel": 2,
          "categoryName": "XACC3i",
          "thirdLevelCategoryVOS": null
        }
      ]
    },
    {
      "categoryId": 10039,
      "categoryLevel": 1,
      "categoryName": "Ceiling Mounted Inverter",
      "secondLevelCategoryVOS": [
        {
          "categoryId": 10042,
          "parentId": 10039,
          "categoryLevel": 2,
          "categoryName": "Aircon Maintenance and Repair",
          "thirdLevelCategoryVOS": null
        },
        {
          "categoryId": 10041,
          "parentId": 10039,
          "categoryLevel": 2,
          "categoryName": "XACM5i",
          "thirdLevelCategoryVOS": null
        },
        {
          "categoryId": 10040,
          "parentId": 10039,
          "categoryLevel": 2,
          "categoryName": "XACM3i",
          "thirdLevelCategoryVOS": null
        }
      ]
    }
  ]

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
      <Category4 list={categoryList}/>
      <Card4
        span={6}
        list={recommendGoodses}
        title={"Exclusive Products"}
        subtitle={"Our Products"}
        border
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
