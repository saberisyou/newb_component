import { Typography } from "antd";
import {Search} from "../index.ts";
import Layout from "./layout.tsx";
const { Title } = Typography;

const App = () => {
  return (
    <Layout menu={['Search']}>
      <Title>Search</Title>
      <Search />
    </Layout>
  );
};
export default App;
