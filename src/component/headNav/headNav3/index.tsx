import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.less";
import { useState } from "react";
import { Button, Input } from "antd";

interface HeadNavProps {
  logo?: string;
  userName?: string;
  cart?: number;
  category?: React.ReactNode;
}

const HeadNav = (props: HeadNavProps) => {
  const { logo, userName, cart, category } = props;
  const [keywords, setKeywords] = useState("");
  return (
    <>
      <div className={styles["header-top"]}>
        <div className={styles.w}>
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
          <div className={styles["header-right"]}>
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
              {userName}
            </div>
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
          {category && <div className={styles["category"]}>{category}</div>}
          <div className={styles["input-area"]}>
            <SearchOutlined/>
            <Input
              placeholder="Index for products..."
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
          </div>
          <Button
            className={styles["cmn-btn"]}
            onClick={() => {
              window.location.href = `/search?keywords=${keywords}`;
            }}
          >
            Search
          </Button>
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
