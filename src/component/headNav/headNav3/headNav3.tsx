import {
  DownOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.less";
import { useState } from "react";
import { Cascader, Dropdown, Input } from "antd";

interface HeadNavProps {
  logo?: string;
  userName?: string;
  cart?: number;
  categoryList?: CategoryListType;
}


const transformCategoryList = (categoryList: CategoryListType) => {
  return (categoryList || []).map(category => ({
    value: category.categoryId.toString(),
    label: category.categoryName,
    children: category.secondLevelCategoryVOS?.map((secondLevel: any) => ({
      value: secondLevel.categoryId.toString(),
      label: secondLevel.categoryName,
      children: secondLevel.thirdLevelCategoryVOS?.map((thirdLevel: any) => ({
        value: thirdLevel.categoryId.toString(),
        label: thirdLevel.categoryName
      })) || undefined
    })) || undefined
  }));
};
export const HeadNav3 = (props: HeadNavProps) => {
  const { logo, userName, cart,categoryList } = props;
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

      <div className={styles["input-area"]}>
        <Cascader
          className={styles["cmn-select"]}
          options={transformCategoryList(categoryList)}
          placeholder="Select Category"
          onChange={(value) => {
            window.location.href = `/search?categoryId=${value[0]}`;
          }
          }
        />
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
