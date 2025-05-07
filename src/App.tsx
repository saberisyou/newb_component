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
import Sort from "./routes/Sort.tsx";
import Pagination from "./routes/Pagination.tsx";
import Banner from "./routes/Banner.tsx";

const items = [
  {
    key: "card",
    label: "Card - 卡片",
  },
  {
    key: "headNav",
    label: "HeadNav - 头部导航",
  },
  {
    key: "category",
    label: "Category - 分类导航",
  },
  {
    key: "hotAds",
    label: "HotAds - 热点广告",
  },
  {
    key: "instagram",
    label: "Instagram - 热点广告",
  },
  {
    key: "footer",
    label: "footer - 底部",
  },
  {
    key: "cart",
    label: "cart - 购物车",
  },
  {
    key: "sort",
    label: "sort - 排序",
  },
  {
    key: "pagination",
    label: "pagination - 分页",
  },
  {
    key: "search",
    label: "search - 搜索",
  },
  {
    key: "banner",
    label: "banner - 背景主图",
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
        <Badge offset={[0, 24]} count={<Tag color="green">Prod</Tag>}>
          <div
            className="demo-logo-vertical"
            style={{
              margin: "32px 16px 32px 30px",
              borderRadius: "6px",
              fontSize: "30px",
              color: "#fff",
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
          defaultSelectedKeys={[window.location.href.split('/').pop()?.split('#')[0] || "card"]}
          items={items}
          onClick={(e) => {
            navigate(e.key);
            document.getElementById('content')?.scrollTo({ top: 0, behavior: 'auto' });
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: "0 20px", background: colorBgContainer }}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["component"]}
            items={[
              {
                label: "首页",
                key: "index",
              },
              {
                label: "组件",
                key: "component",
              },
            ]}
          />
        </Header>
        <Content
          id="content"
          style={{
            padding: "24px 48px",
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
            <Route path="/sort" element={<Sort />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/banner" element={<Banner />} />
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
