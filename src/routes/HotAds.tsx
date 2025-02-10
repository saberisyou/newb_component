import { Typography } from "antd";
import {HotAds} from "../index.ts";
import Layout from "./layout.tsx";
const { Title } = Typography;
const adsData = {
  bannerImg: "https://admin-b2b2c.pickmall.cn/img/decorate1.ce875c0e.png",
  adsList: [
    { id: "ad1", img: "https://admin-b2b2c.pickmall.cn/img/1.ce23a19e.jpg" },
    { id: "ad2", img: "https://admin-b2b2c.pickmall.cn/img/1.ce23a19e.jpg" },
    { id: "ad3", img: "https://admin-b2b2c.pickmall.cn/img/1.ce23a19e.jpg" },
    { id: "ad4", img: "https://admin-b2b2c.pickmall.cn/img/1.ce23a19e.jpg" },
    { id: "ad5", img: "https://admin-b2b2c.pickmall.cn/img/1.ce23a19e.jpg" },
  ],
};
const App = () => {
  return (
    <Layout menu={['HotAds']}>
      <Title>HotAds</Title>
      <HotAds bannerImg={adsData.bannerImg} adsList={adsData.adsList} />
    </Layout>
  );
};
export default App;
