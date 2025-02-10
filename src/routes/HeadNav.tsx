import { Card as ACard, Col, Row } from "antd";
import HeadNavFc, { HeadNav, HeadNav2 } from "../component/headNav";
import Layout from "./layout.tsx";
const App = () => {
  const categoryList = [
    {
      categoryId: 10001,
      categoryLevel: 1,
      categoryName: "Window Type Non-Inverter",
      secondLevelCategoryVOS: [
        {
          categoryId: 10002,
          parentId: 10001,
          categoryLevel: 2,
          categoryName: "XACWT05",
          thirdLevelCategoryVOS: null,
        },
        {
          categoryId: 10006,
          parentId: 10001,
          categoryLevel: 2,
          categoryName: "XACWT25",
          thirdLevelCategoryVOS: null,
        },
        {
          categoryId: 10005,
          parentId: 10001,
          categoryLevel: 2,
          categoryName: "XACWT20",
          thirdLevelCategoryVOS: null,
        },
        {
          categoryId: 10004,
          parentId: 10001,
          categoryLevel: 2,
          categoryName: "XACWT15",
          thirdLevelCategoryVOS: null,
        },
        {
          categoryId: 10003,
          parentId: 10001,
          categoryLevel: 2,
          categoryName: "XACWT10",
          thirdLevelCategoryVOS: null,
        },
      ],
    },
    {
      categoryId: 10007,
      categoryLevel: 1,
      categoryName: "Window w/ Remote Non-Inverter",
      secondLevelCategoryVOS: [
        {
          categoryId: 10011,
          parentId: 10007,
          categoryLevel: 2,
          categoryName: "XACWT25R",
          thirdLevelCategoryVOS: null,
        },
        {
          categoryId: 10010,
          parentId: 10007,
          categoryLevel: 2,
          categoryName: "XACWT20R",
          thirdLevelCategoryVOS: null,
        },
        {
          categoryId: 10009,
          parentId: 10007,
          categoryLevel: 2,
          categoryName: "XACWT15R",
          thirdLevelCategoryVOS: null,
        },
        {
          categoryId: 10008,
          parentId: 10007,
          categoryLevel: 2,
          categoryName: "XACWT10R",
          thirdLevelCategoryVOS: null,
        },
      ],
    },
    {
      categoryId: 10012,
      categoryLevel: 1,
      categoryName: "Window Inverter",
      secondLevelCategoryVOS: [
        {
          categoryId: 10016,
          parentId: 10012,
          categoryLevel: 2,
          categoryName: "XACWT25i",
          thirdLevelCategoryVOS: null,
        },
        {
          categoryId: 10015,
          parentId: 10012,
          categoryLevel: 2,
          categoryName: "XACWT20i",
          thirdLevelCategoryVOS: null,
        },
        {
          categoryId: 10014,
          parentId: 10012,
          categoryLevel: 2,
          categoryName: "XACWT15i",
          thirdLevelCategoryVOS: null,
        },
        {
          categoryId: 10013,
          parentId: 10012,
          categoryLevel: 2,
          categoryName: "XACWT10i",
          thirdLevelCategoryVOS: null,
        },
      ],
    },
    {
      categoryId: 10017,
      categoryLevel: 1,
      categoryName: "Split Type Non-Inverter",
      secondLevelCategoryVOS: [
        {
          categoryId: 10021,
          parentId: 10017,
          categoryLevel: 2,
          categoryName: "XACST25",
          thirdLevelCategoryVOS: null,
        },
        {
          categoryId: 10020,
          parentId: 10017,
          categoryLevel: 2,
          categoryName: "XACST20",
          thirdLevelCategoryVOS: null,
        },
        {
          categoryId: 10019,
          parentId: 10017,
          categoryLevel: 2,
          categoryName: "XACST15",
          thirdLevelCategoryVOS: null,
        },
        {
          categoryId: 10018,
          parentId: 10017,
          categoryLevel: 2,
          categoryName: "XACST10",
          thirdLevelCategoryVOS: null,
        },
      ],
    },
    {
      categoryId: 10022,
      categoryLevel: 1,
      categoryName: "Split Type Inverter",
      secondLevelCategoryVOS: [
        {
          categoryId: 10026,
          parentId: 10022,
          categoryLevel: 2,
          categoryName: "XACST25i",
          thirdLevelCategoryVOS: null,
        },
        {
          categoryId: 10025,
          parentId: 10022,
          categoryLevel: 2,
          categoryName: "XACST20i",
          thirdLevelCategoryVOS: null,
        },
        {
          categoryId: 10024,
          parentId: 10022,
          categoryLevel: 2,
          categoryName: "XACST15i",
          thirdLevelCategoryVOS: null,
        },
        {
          categoryId: 10023,
          parentId: 10022,
          categoryLevel: 2,
          categoryName: "XACST10i",
          thirdLevelCategoryVOS: null,
        },
      ],
    },
    {
      categoryId: 10027,
      categoryLevel: 1,
      categoryName: "Floor Standing Non-Inverter",
      secondLevelCategoryVOS: [
        {
          categoryId: 10029,
          parentId: 10027,
          categoryLevel: 2,
          categoryName: "XACFS5",
          thirdLevelCategoryVOS: null,
        },
        {
          categoryId: 10028,
          parentId: 10027,
          categoryLevel: 2,
          categoryName: "XACFS3",
          thirdLevelCategoryVOS: null,
        },
      ],
    },
    {
      categoryId: 10030,
      categoryLevel: 1,
      categoryName: "Floor Standing Inverter",
      secondLevelCategoryVOS: [
        {
          categoryId: 10032,
          parentId: 10030,
          categoryLevel: 2,
          categoryName: "XACFS5i",
          thirdLevelCategoryVOS: null,
        },
        {
          categoryId: 10031,
          parentId: 10030,
          categoryLevel: 2,
          categoryName: "XACFS3i",
          thirdLevelCategoryVOS: null,
        },
      ],
    },
    {
      categoryId: 10033,
      categoryLevel: 1,
      categoryName: "Ceiling Cassette Non-Inverter",
      secondLevelCategoryVOS: [
        {
          categoryId: 10035,
          parentId: 10033,
          categoryLevel: 2,
          categoryName: "XACC5",
          thirdLevelCategoryVOS: null,
        },
        {
          categoryId: 10034,
          parentId: 10033,
          categoryLevel: 2,
          categoryName: "XACC3",
          thirdLevelCategoryVOS: null,
        },
      ],
    },
    {
      categoryId: 10036,
      categoryLevel: 1,
      categoryName: "Ceiling Cassette Inverter",
      secondLevelCategoryVOS: [
        {
          categoryId: 10038,
          parentId: 10036,
          categoryLevel: 2,
          categoryName: "XACC5i",
          thirdLevelCategoryVOS: null,
        },
        {
          categoryId: 10037,
          parentId: 10036,
          categoryLevel: 2,
          categoryName: "XACC3i",
          thirdLevelCategoryVOS: null,
        },
      ],
    },
    {
      categoryId: 10039,
      categoryLevel: 1,
      categoryName: "Ceiling Mounted Inverter",
      secondLevelCategoryVOS: [
        {
          categoryId: 10042,
          parentId: 10039,
          categoryLevel: 2,
          categoryName: "Aircon Maintenance and Repair",
          thirdLevelCategoryVOS: null,
        },
        {
          categoryId: 10041,
          parentId: 10039,
          categoryLevel: 2,
          categoryName: "XACM5i",
          thirdLevelCategoryVOS: null,
        },
        {
          categoryId: 10040,
          parentId: 10039,
          categoryLevel: 2,
          categoryName: "XACM3i",
          thirdLevelCategoryVOS: null,
        },
      ],
    },
  ];
  return (
    <Layout menu={Object.keys(HeadNavFc)}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <ACard id="HeadNav" title="HeadNav">
            <HeadNav
              userName={"saulyue"}
              cart={2}
              logo={
                "https://www.thethirdacsupply.com/mall/image/login-logo-2.png"
              }
            />
          </ACard>
        </Col>
        <Col span={24}>
          <ACard id="HeadNav2" title="HeadNav2">
            <HeadNav2
              userName={"saulyue"}
              cart={2}
              categoryList={categoryList}
              logo={
                "https://www.thethirdacsupply.com/mall/image/login-logo-2.png"
              }
            />
          </ACard>
        </Col>
        <Col span={24}>
          <ACard id="HeadNav3" title="HeadNav3">
            <HeadNav2
              userName={"saulyue"}
              cart={2}
              logo={
                "https://www.thethirdacsupply.com/mall/image/login-logo-2.png"
              }
            />
          </ACard>
        </Col>
        <Col span={24}>
          <ACard id="HeadNav4" title="HeadNav4">
            <HeadNav2
              userName={"saulyue"}
              cart={2}
              logo={
                "https://www.thethirdacsupply.com/mall/image/login-logo-2.png"
              }
            />
          </ACard>
        </Col>
      </Row>
    </Layout>
  );
};
export default App;
