import { Card as ACard, Col, Row } from "antd";
import FooterFc, { Footer, Footer2 } from "../component/footer";
import Layout from "./layout.tsx";
const App = () => {
  return (
    <Layout menu={Object.keys(FooterFc)}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <ACard id="Footer" title="Footer">
            <Footer />
          </ACard>
        </Col>
        <Col span={24}>
          <ACard id="Footer2" title="Index">
            <Footer2
              name={"name"}
              address={"address"}
              email={"email@email.com"}
            />
          </ACard>
        </Col>
        <Col span={24}>
          <ACard id="Footer3" title="Footer3">
            <Footer2
              name={"name"}
              address={"address"}
              email={"email@email.com"}
            />
          </ACard>
        </Col>
        <Col span={24}>
          <ACard id="Footer4" title="Footer4">
            <Footer2
              name={"name"}
              address={"address"}
              email={"email@email.com"}
            />
          </ACard>
        </Col>
      </Row>
    </Layout>
  );
};
export default App;
