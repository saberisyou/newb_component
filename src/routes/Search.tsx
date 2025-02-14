import { Typography } from "antd";
import Layout from "./layout.tsx";
import Search from "../component/search";
const { Title } = Typography;

const App = () => {
  return (
    <Layout menu={['Search']}>
      <Title>Search</Title>
      <Search.Search1 />
    </Layout>
  );
};
export default App;
