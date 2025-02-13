import { Card as ACard, Col, Row } from "antd";
import Layout from "./layout.tsx";
import PaginationFc, { Pagination1 } from "../component/pagination";
import {paginationData} from "../mock/data.ts";
const App = () => {
  return (
    <Layout menu={Object.keys(PaginationFc)}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <ACard id="Pagination1" title="Pagination1">
            <Pagination1 pageResult={paginationData}/>
          </ACard>
        </Col>
      </Row>
    </Layout>
  );
};
export default App;
