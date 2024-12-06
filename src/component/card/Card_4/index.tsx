import styles from "./styles.module.less";
import { Col, Rate, Row, Space, Tag } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

interface GoodsType {
  sellingPrice?: number;
  goodsId?: number;
  goodsIntro?: string;
  goodsCoverImg?: string;
  tag?: string;
  goodsName?: string;
  href?: string;
  discount?: string;
}

interface Card4Props {
  list: GoodsType[];
  title?: string;
  subtitle?: string;
  span?: number;
}

export const Card4 = (props: Card4Props) => {
  const { list, title, subtitle, span = 6 } = props;
  return (
    <>
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
            tag,
          } = e;
          return (
            <Col key={goodsId} span={span}>
              <div
                className={styles["card"]}
                onClick={() => {
                  if (href) {
                    window.location.href = href;
                  }
                }}
              >
                <div className={styles["img_box"]}>
                  <img src={goodsCoverImg} alt={goodsName} />
                  {e.tag && (
                    <Tag className={styles["tag"]} color="#4376fb">
                      {e.tag}
                    </Tag>
                  )}
                </div>
                <Space direction="vertical" className={styles["body"]}>
                  <p className={styles["intro"]}>{goodsIntro}</p>
                  <p className={styles["name"]}>{goodsName}</p>
                  <Rate disabled defaultValue={4} />
                  <p className={styles["discount"]}>{discount}</p>
                  <p className={styles["item_price"]}>
                    ₱{sellingPrice.toLocaleString()}.00
                    <span className={styles["item_price_sub"]}>
                      ₱{sellingPrice.toLocaleString()}.00
                    </span>
                  </p>

                  <div className={styles["cart"]}>
                    <ShoppingCartOutlined /> Add To Cart
                  </div>
                </Space>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
