import CardFc, {Card1, Card2, Card3, Card4, Card5, Card6} from "../component/card";
import { card3Data, recommendGoodses } from "../mock/Card";
import Layout from "./layout.tsx";
import { Card as ACard, Row, Col } from "antd";

const Card = () => {
  return (
    <Layout menu={Object.keys(CardFc)}>
      <Row gutter={[16,16]}>
        <Col span={24}>
          <ACard id="Card6" title="Card6">
            <Card6
              span={6}
              list={recommendGoodses}
              title={"Exclusive Products"}
              subtitle={"Our Products"}
            />
          </ACard>
        </Col>
        <Col span={24}>
          <ACard id="Card1" title="Card1">
            <Card1 list={card3Data} />
          </ACard>
        </Col>

        <Col span={24}>
          <ACard id="Card2" title="Card2">
            <Card2 />
          </ACard>
        </Col>

        <Col span={24}>
          <ACard id="Card3" title="Card3">
            <Card3 list={card3Data} />
          </ACard>
        </Col>

        <Col span={24}>
          <ACard id="Card4" title="Card4">
            <Card4
              span={5}
              list={recommendGoodses}
              title={"Exclusive Products"}
              subtitle={"Our Products"}
              border
            />
            <Card4
              span={6}
              list={recommendGoodses}
              title={"Exclusive Products"}
              subtitle={"Our Products"}
            />
          </ACard>
        </Col>

        <Col span={24}>
          <ACard id="Card5" title="Card5">
            <Card5
              span={6}
              list={recommendGoodses}
              title={"Exclusive Products"}
              subtitle={"Our Products"}
            />
           <div style={{height:20}}></div>
            <Card5
              span={6}
              list={recommendGoodses.map((e) => ({
                ...e,
                cart: () => {},
              }))}
              title={"Exclusive Products"}
              subtitle={"Our Products"}
            />
          </ACard>
        </Col>


      </Row>
    </Layout>
  );
};
export default Card;
