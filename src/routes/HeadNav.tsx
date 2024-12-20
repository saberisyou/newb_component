import { Typography } from "antd";
import { HeadNav } from "../component/headNav";
const { Title } = Typography;
const App = () => {
  return (
    <>
      <Title>HeadNav</Title>
      <HeadNav userName={"saulyue"} cart={2}/>
    </>
  );
};
export default App;
