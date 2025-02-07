import {  Typography } from "antd";
import { HeadNav, HeadNav2 } from "../component/headNav";
const { Title } = Typography;
const App = () => {
  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <Title>HeadNav</Title>
        <HeadNav
          userName={"saulyue"}
          cart={2}
          logo={"https://www.thethirdacsupply.com/mall/image/login-logo-2.png"}
        />
      </div>
      <div style={{ marginBottom: 20 }}>
        <Title>HeadNav2</Title>
        <HeadNav2
          userName={"saulyue"}
          cart={2}
          logo={"https://www.thethirdacsupply.com/mall/image/login-logo-2.png"}
        />
      </div>
    </>
  );
};
export default App;
