import {Card as ACard, Col, Row} from "antd";
import CartFc, {Cart, Cart2, Cart3} from "../component/cart";
import Layout from "./layout.tsx";
const App = () => {
  return (
    <Layout menu={Object.keys(CartFc)}>
      <Row gutter={[16,16]}>
        <Col span={24}>
          <ACard id="Cart" title="Cart">
            <Cart
              title={"Carttitle"}
              price={"$76.89"}
              disPrice={"$76.89"}
              productImg={'https://www.thethirdacsupply.com/upload/XACWT15R.jpg'}
            />
          </ACard>
        </Col>
        <Col span={24}>
          <ACard id="Cart2" title="Index">
            <Cart2
              title={"Carttitle"}
              price={"$76.89"}
              disPrice={"$76.89"}
              productImg={'https://www.thethirdacsupply.com/upload/XACWT15R.jpg'}
            />
          </ACard>
        </Col>

        <Col span={24}>
          <ACard id="Cart3" title="Cart3">
            <Cart3
              title={"Carttitle"}
              price={"$76.89"}
              disPrice={"$76.89"}
              productImg={'https://www.thethirdacsupply.com/upload/XACWT15R.jpg'}
            />
          </ACard>
        </Col>

        <Col span={24}>
          <ACard id="Cart4" title="Cart4">
            <Cart2
              title={"Carttitle"}
              price={"$76.89"}
              disPrice={"$76.89"}
              productImg={'https://www.thethirdacsupply.com/upload/XACWT15R.jpg'}
            />
          </ACard>
        </Col>
      </Row>
    </Layout>
  );
};
export default App;
