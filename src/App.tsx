import React from "react";
import { Layout, Menu, theme } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";
const { Header, Content, Sider } = Layout;
import Card from "./routes/Card";
import Category from "./routes/Category.tsx";
import Instagram from "./routes/Instagram.tsx";
import Search from "./routes/Search.tsx";
import HeadNav from "./routes/HeadNav.tsx";
import HotAds from "./routes/HotAds.tsx";
import Footer from "./routes/Footer.tsx";

const items = [
  {
    key: "headNav",
    label: "HeadNav",
  },
  {
    key: "card",
    label: "Card",
  },
  {
    key: "category",
    label: "Category",
  },
  {
    key: "hotAds",
    label: "HotAds",
  },
  {
    key: "instagram",
    label: "Instagram",
  },
  {
    key: "footer",
    label: "footer",
  },
];

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div
          className="demo-logo-vertical"
          style={{
            height: "32px",
            margin: "16px",
            background: "rgba(255, 255, 255, .2)",
            borderRadius: "6px",
          }}
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["HeadNav"]}
          items={items}
          onClick={(e) => {
            navigate(e.key);
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content
          style={{
            padding: "48px",
            height: "calc(100vh - 64px)",
            overflowY: "auto",
          }}
        >
          <Routes>
            <Route path="/" element={<Card />} />
            <Route path="/headNav" element={<HeadNav />} />
            <Route path="/card" element={<Card />} />
            <Route path="/hotAds" element={<HotAds />} />
            <Route path="/category" element={<Category />} />
            <Route path="/instagram" element={<Instagram />} />
            <Route path="/search" element={<Search />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
