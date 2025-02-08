import {Divider, InputNumber, Rate, Space} from "antd";
import React from "react";
import styles from "./styles.module.less";
import {ShoppingCartOutlined} from "@ant-design/icons";

interface CartProps {
  title: string;
  price: string;
  disPrice: string;
  productImg: string;
  rate?: number;
  customerReview?: number;
  description?: string;
  onAddToCart?: (e: number) => void;
  onBuyNow?: (e: number) => void;
  SKU?: string;
  tags?: string[];
  categories?: string;
}

export const Cart2 = (props: CartProps) => {
  const {
    title,
    productImg,
    rate = 5,
    customerReview = 0,
    description,
    price,
    disPrice,
    SKU,
    categories,
    tags = [],
    onAddToCart,
    onBuyNow,
  } = props;

  const [len, setLen] = React.useState(1);

  return (
    <div className={styles["cart"]}>
      <div className={styles["shop-thumb"]}>
        <img src={productImg} alt="" />
      </div>
      <div className={styles["shop-details-wrapper"]}>
        <div className={styles["product-details-content"]}>

          <h2 className={styles["pb-3"]}>{title}</h2>
          <div className={`${styles["star"]} ${styles["pb-3"]}`}>
            {customerReview > 0 && (
              <span className={styles["customer"]}>
                ({customerReview} Customer Review)
              </span>
            )}
          </div>
          <Rate value={rate} style={{ color: "#ff4000" }} />
          <span className={styles["customer"]}>
            ({customerReview} Customer Review)
          </span>
          <p className={styles["mb-3"]}>{description}</p>
          <div className={styles["price-list"]}>
            <h3>
              {price} <span className={styles["disPrice"]}>{disPrice}</span>
            </h3>
          </div>
          <hr />
          <div className={styles["cart-wrp"]}>
            <div className={styles["cart-quantity"]}>
              <div className={styles["quantity"]}>
                <label>Quantity</label>
                <InputNumber
                  controls={false}
                  name="quantity"
                  value={len}
                  className={styles["qty"]}
                  onChange={(e) => {
                    if (!e || e < 1) {
                      setLen(1);
                    } else {
                      setLen(e || 0);
                    }
                  }}
                />
                <div className={styles["quantityBox"]}>
                  <div
                    className={` ${styles["plus"]}`}
                    onClick={() => setLen(len + 1)}
                  >
                    +
                  </div>
                  <div
                    className={` ${styles["minus"]}`}
                    onClick={() => {
                      let num = len - 1;
                      if (num < 1) {
                        num = 1;
                      }
                      setLen(num);
                    }}
                  >
                    -
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["shop-btn"]}>
            <a
              onClick={() => onAddToCart?.(len)}
              className={styles["theme-btn"]}
            >
              <Space split={<Divider type="vertical" style={{ borderColor: '#fff' }}/>}>
                <span>{"Add to cart"}</span>
                <ShoppingCartOutlined />
              </Space>
            </a>
            <a onClick={() => onBuyNow?.(len)} className={styles["theme-btn"]}>
              <Space split={<Divider type="vertical" style={{ borderColor: '#fff' }}/>}>
                <ShoppingCartOutlined />
                <span>{"Buy now"}</span>
              </Space>
            </a>
          </div>
          {SKU && (
            <h6 className={styles["details-info"]}>
              <span>SKU:</span> <a>{SKU}</a>
            </h6>
          )}
          {categories && (
            <h6 className={styles["details-info"]}>
              <span>Categories:</span>
              <a>{categories}</a>
            </h6>
          )}
          {tags.length > 0 && (
            <h6 className={`${styles["details-info"]} ${styles["style-2"]}`}>
              <span>Tags:</span>
              <a>
                {tags.map((tag) => (
                  <b key={tag} className={styles[tag]}>
                    {tag}
                  </b>
                ))}
              </a>
            </h6>
          )}
        </div>
      </div>
    </div>
  );
};
