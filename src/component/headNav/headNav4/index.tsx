import {
  DownOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.less";
import { useState } from "react";
import { Dropdown, Input } from "antd";

interface HeadNavProps {
  logo?: string;
  userName?: string;
  cart?: number;
}

const HeadNav = (props: HeadNavProps) => {
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
      <div className={styles["category-list"]}>
        <ul>
          <li>
            <a href={"/"}>Home</a>
          </li>
          <li>
            <a href="/personal">Our Center</a>
          </li>
          <li>
            <a href="/orders">Our orders</a>
          </li>
          <li>
            <a href="/shop-cart">Our Shop Cart</a>
          </li>
        </ul>
      </div>

      <div className={styles["input-area"]}>
        <Input
          placeholder="Search for products..."
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
        <SearchOutlined
          onClick={() => {
            window.location.href = `/search?keywords=${keywords}`;
          }}
        />
      </div>
      <div style={{ flex: 1 }}></div>
      <div className={styles["header-right"]}>
        <div
          className={styles["icon-items"]}
          onClick={() => {
            if (!userName) {
              window.location.href = `/login`;
            }
          }}
        >
          <UserOutlined className={styles["icon"]} />
          <Dropdown menu={{ items: userName ? items : [] }}>
            <div className={styles["content"]}>
              {userName ? (
                <h4>{userName}</h4>
              ) : (
                <>
                  <h4>Login</h4>
                  <p>Hello, Login</p>
                </>
              )}
            </div>
          </Dropdown>
          {userName && <DownOutlined />}
        </div>
        {userName ? (
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
        ) : (
          <div
            className={styles["icon-items"]}
            onClick={() => {
              window.location.href = `/register`;
            }}
          >
            <UserOutlined className={styles["icon"]} />
            <div className={styles["content"]}>
              <h4>Register</h4>
              <p>Please Register</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default HeadNav;
