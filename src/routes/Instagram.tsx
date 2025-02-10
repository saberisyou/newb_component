import { Typography } from "antd";
import { Instagram1 } from "../component/instagram";
import Layout from "./layout.tsx";
const { Title } = Typography;

const App = () => {
  return (
    <Layout menu={['Instagram']}>
      <Title>Instagram</Title>
      <Instagram1 />
    </Layout>
  );
};
export default App;
