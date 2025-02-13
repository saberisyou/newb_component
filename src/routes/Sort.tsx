import { Card as ACard, Col, Row } from "antd";
import SortFc, { Sort1 } from "../component/sort";
import Layout from "./layout.tsx";
const App = () => {
  return (
    <Layout menu={Object.keys(SortFc)}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <ACard id="Sort1" title="Sort1">
            <Sort1 />
          </ACard>
        </Col>
      </Row>
    </Layout>
  );
};
export default App;
