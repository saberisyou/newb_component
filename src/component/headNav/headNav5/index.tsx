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
  logoName?: string;
  userName?: string;
  cart?: number;
  category?: React.ReactNode;
}

const HeadNav = (props: HeadNavProps) => {
  const { logo, logoName, userName, cart } = props;
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
    <>
      <div className={styles["header-top"]}>
        <div
          className={styles.w}
          style={{
            justifyContent: "center",
          }}
        >
          {!userName && (
            <div>
              Hi! <a href={"/login"}>Sign</a> or{" "}
              <a href={"/register"}>register</a>
            </div>
          )}

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
        </div>
      </div>
      <div className={styles["header-main"]}>
        <div className={styles.w}>
          <div className={styles["logo"]}>
            <img
              src={logo}
              alt="logo-img"
              onClick={() => {
                window.location.href = `/index`;
              }}
            />
          </div>
          <div className={styles["logoName"]}>{logoName}</div>
          <div className={styles["input-area"]}>
            <Input
              placeholder="Index for products..."
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
            <SearchOutlined
              className={styles.icon}
              onClick={() => {
                window.location.href = `/search?keywords=${keywords}`;
              }}
            />
          </div>
          <div className={styles["header-right"]}>
            <Dropdown menu={{ items: userName ? items : [] }}>
              <div className={styles["content"]}>
                <UserOutlined
                  className={styles["icon"]}
                  onClick={() => {
                    if (!userName) {
                      window.location.href = `/login`;
                    } else {
                      window.location.href = `/personal`;
                    }
                  }}
                />
                <div>{userName}</div>
                {userName && <DownOutlined />}
              </div>
            </Dropdown>

            <div className={styles["content"]}>
              <ShoppingCartOutlined
                className={styles["icon"]}
                onClick={() => {
                  if (!userName) {
                    window.location.href = `/login`;
                  } else {
                    window.location.href = `/shop-cart`;
                  }
                }}
              />
              {cart && `(${cart})`}
            </div>
          </div>
        </div>
      </div>
      <div className={styles["header-bottom"]}>
        <div className={styles.w}>
          <div className={styles["category-list"]}>
            <ul>
              <li>
                <a href="/search?keyword=fashion">Fashion</a>
              </li>
              <li>
                <a href="/search?keyword=electronics">Electronics</a>
              </li>
              <li>
                <a href="/search?keyword=home">Home & Living</a>
              </li>
              <li>
                <a href="/search?keyword=beauty">Beauty</a>
              </li>
              <li>
                <a href="/search?keyword=sports">Sports</a>
              </li>
              <li>
                <a href="/search?keyword=toys">Toys & Games</a>
              </li>
              <li>
                <a href="/search?keyword=books">Books</a>
              </li>
              <li>
                <a href="/search?keyword=jewelry">Jewelry</a>
              </li>
              <li>
                <a href="/search?keyword=automotive">Automotive</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeadNav;
