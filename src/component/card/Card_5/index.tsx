import styles from "./styles.module.less";
import { Col, Rate, Row, Space, Tag } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

interface GoodsType {
  sellingPrice: number;
  goodsId?: number;
  goodsIntro?: string;
  goodsCoverImg?: string;
  tag?: string;
  goodsName?: string;
  href?: string;
  discount?: string;
  rate?: number;
  cart?: () => void;
}

interface Card4Props {
  list: GoodsType[];
  title?: string;
  subtitle?: string;
  span?: number;
  border?: boolean;
}

export const Card5 = (props: Card4Props) => {
  const { list, title, subtitle, span = 6, border } = props;
  return (
    <div className={`${border ? styles.border : styles.noborder}`}>
      {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      {title && <div className={styles.title}>{title}</div>}
      <Row className={styles["card_list"]} gutter={[16, 16]}>
        {list.map((e: GoodsType) => {
          const {
            goodsId,
            href,
            goodsCoverImg,
            goodsName,
            goodsIntro,
            discount,
            sellingPrice,
            rate = 4,
            tag,
            cart,
          } = e;
          return (
            <Col
              key={goodsId}
              span={span}
              className={span === 5 ? styles["card_col"] : ""}
            >
              <div
                className={`${styles.card} ${border ? styles.border : ""}`}
                onClick={() => {
                  if (href) {
                    window.location.href = href;
                  }
                }}
              >
                <div className={styles["card_content"]}>
                <div className={styles["img_box"]}>
                  <img src={goodsCoverImg} alt={goodsName} />
                  {tag && (
                    <Tag className={styles["tag"]} color="#4376fb">
                      {tag}
                    </Tag>
                  )}
                </div>
                <Space direction="vertical" className={styles["body"]}>
                  <p className={styles["item_price"]}>
                    ₱{sellingPrice.toLocaleString()}.00
                    {discount && (
                      <span className={styles["discount"]}>
                        ₱{discount.toLocaleString()}.00
                      </span>
                    )}
                  </p>

                  <p className={styles["name"]}>{goodsName}</p>
                  <p className={styles["intro"]}>{goodsIntro}</p>
                  <Rate disabled defaultValue={rate} />


                </Space>
                </div>
                {cart && (
                  <div className={styles["cart"]} onClick={cart}>
                    <ShoppingCartOutlined /> Add To Cart
                  </div>
                )}

              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
