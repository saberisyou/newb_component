import {
  DownOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.less";
import { useState } from "react";
import { Dropdown, Input } from "antd";

interface HeadNavProps {
  logo: string;
  userName?: string;
  cart?: number;
}

export const HeadNav = (props: HeadNavProps) => {
  const { logo, userName, cart } = props;
  const [keywords, setKeywords] = useState("");

  const items = [
    {
      key: "1",
      label: <a href="/personal">My Center</a>,
    },
    {
      key: "2",
      label: <a href="/orders">Order</a>,
    },
    {
      key: "3",
      label: <a href="/logout">Logout</a>,
    },
  ];

  return (
    <div className={styles["header-main"]}>
      <div className={styles["logo"]}>
        <img
          src={logo}
          alt="logo-img"
          onClick={() => {
            window.location.href = `/index`;
          }}
        />
      </div>
      <div style={{ flex: 1 }}></div>
      <div className={styles["input-area"]}>
        <Input
          placeholder="Search for products..."
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
        <button
          className={styles["cmn-btn"]}
          onClick={() => {
            window.location.href = `/search?keywords=${keywords}`;
          }}
        >
          Search
        </button>
      </div>
      <div className={styles["header-right"]}>
        <div className={styles["icon-items"]}>
          <UserOutlined className={styles["icon"]} />
          <Dropdown menu={{ items: userName ? items : [] }}>
            <div className={styles["content"]}>
              <h4>{userName ? userName : "Account"}</h4>
            </div>
          </Dropdown>
          {userName && <DownOutlined />}
        </div>
        <div
          className={styles["icon-items"]}
          onClick={() => {
            window.location.href = `/shop-cart`;
          }}
        >
          <ShoppingCartOutlined className={styles["icon"]} />
          <div className={styles["content"]}>
            <h4>Cart {cart && `(${cart})`}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
