import { Card as ACard, Col, Row } from "antd";
import HeadNav from "../component/headNav";
import Layout from "./layout.tsx";
import Category from "../component/category";
import {Category3Data} from "../mock/Category.ts";
const App = () => {
  return (
    <Layout menu={Object.keys(HeadNav)}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <ACard id="HeadNav" title="HeadNav">
            <HeadNav.HeadNav
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
            <HeadNav.HeadNav2
              userName={"saulyue"}
              cart={2}
              logo={
                "https://www.thethirdacsupply.com/mall/image/login-logo-2.png"
              }
            />
          </ACard>
        </Col>
        <Col span={24}>
          <ACard id="HeadNav3" title="HeadNav3">
            <HeadNav.HeadNav3
              userName={"saulyue"}
              cart={2}
              category={<Category.Category5 list={Category3Data} />}
              logo={
                "https://www.thethirdacsupply.com/mall/image/login-logo-2.png"
              }
            />
          </ACard>
        </Col>
        <Col span={24}>
          <ACard id="HeadNav4" title="HeadNav4">
            <HeadNav.HeadNav4
              userName={"saulyue"}
              cart={2}
              logo={
                "https://www.thethirdacsupply.com/mall/image/login-logo-2.png"
              }
            />
          </ACard>
        </Col>
        <Col span={24}>
          <ACard id="HeadNav5" title="HeadNav5">
            <HeadNav.HeadNav5
              userName={"saulyue"}
              cart={2}
              category={<Category.Category5 list={Category3Data} />}
              logoName={"WILS FOOTWEAR SHOP"}
              logo={
                "http://localhost:28089/mall/image/logo.jpg"
              }
            />
          </ACard>
        </Col>
      </Row>
    </Layout>
  );
};
export default App;
