import { Typography } from "antd";
import {Cart, Cart2} from "../component/cart";
const { Title } = Typography;
const App = () => {
  return (
    <>
      <div>
        <Title>Cart</Title>
        <Cart
          title={"Carttitle"}
          price={"$76.89"}
          disPrice={"$76.89"}
          productImg={""}
        />
      </div>

      <div>
        <Title>Cart2</Title>
        <Cart2
          title={"Carttitle"}
          price={"$76.89"}
          disPrice={"$76.89"}
          productImg={'https://www.thethirdacsupply.com/upload/XACWT15R.jpg'}
        />
      </div>
    </>
  );
};
export default App;
