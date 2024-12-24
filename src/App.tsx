import React from "react";
import { Badge, Layout, Menu, Tag, theme } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";
const { Header, Content, Sider, Footer } = Layout;
import Card from "./routes/Card";
import Category from "./routes/Category.tsx";
import Instagram from "./routes/Instagram.tsx";
import Search from "./routes/Search.tsx";
import HeadNav from "./routes/HeadNav.tsx";
import HotAds from "./routes/HotAds.tsx";
import AFooter from "./routes/Footer.tsx";
import Cart from "./routes/Cart.tsx";

const items = [
  {
    key: "card",
    label: "Card",
  },
  {
    key: "headNav",
    label: "HeadNav",
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
  {
    key: "cart",
    label: "cart",
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
        <Badge
          offset={[0, 24]}
          count={
            <Tag  color="green">
              Prod
            </Tag>
          }
        >
          <div
            className="demo-logo-vertical"
            style={{
              margin: "32px 16px 32px 30px",
              borderRadius: "6px",
              color: "#fff",
              fontSize: "30px",
              textAlign: "center",
              fontFamily: "Jost",
              fontWeight: "bold",
            }}
          >
            New Bee
          </div>
        </Badge>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[window.location.hash.substr(2)||'card']}
          items={items}
          onClick={(e) => {
            navigate(e.key);
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: "0 20px", background: colorBgContainer }} />
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
            <Route path="/footer" element={<AFooter />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer style={{ textAlign: "center" }}>
            <a href="https://beian.miit.gov.cn">
              备案/许可证编号为：鄂ICP备2024084390号
            </a>
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
