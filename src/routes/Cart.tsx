import { Typography } from "antd";
import {Cart} from "../component/cart";
const { Title } = Typography;
const App = () => {
  return (
    <>
      <Title>Cart</Title>
      <Cart title={'Carttitle'} price={'$76.89'} disPrice={'$76.89'}/>
    </>
  );
};
export default App;
