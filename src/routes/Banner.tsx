import { Card as ACard, Col, Row } from "antd";
import Banner from "../component/banner";
import Layout from "./layout.tsx";
const App = () => {
  return (
    <Layout menu={Object.keys(Banner)}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <ACard id="Banner1" title="Banner1">
            <Banner.Banner1
              title={"Rare, unique, collectible"}
              desc={"Find what you need on eBay to complete your collection."}
              butt={"Start collecting now"}
            />
          </ACard>
        </Col>
      </Row>
    </Layout>
  );
};
export default App;
