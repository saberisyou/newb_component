import "./styles.less";
import {Input, InputNumber, Rate} from "antd";
import React from "react";

interface CartProps {
  title: string;
  price: string;
  disPrice: string;
  rate?: number;
  customerReview?: number;
  description?: string;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  SKU?: string;
  tags?: string[];
  categories?: string;
}

export const Cart = (props: CartProps) => {
  const {
    title,
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

  const [len, setLen] = React.useState(0);

  return (
    <div className={'cart'}>
    <div className={'shop-thumb'}>
      <img src="https://www.thethirdacsupply.com/upload/XACM3i.jpg" alt="" />
    </div>
    <div className="shop-details-wrapper">
      <div className="product-details-content">
        <h2 className="pb-3">{title}</h2>
        <div className="star pb-3">
          <Rate value={rate} style={{ color: "#4376fb" }} />
          {customerReview > 0 && (
            <span className={"customer"}>
              ({customerReview} Customer Review)
            </span>
          )}
        </div>
        <p className="mb-3">{description}</p>
        <div className="price-list">
          <h3>
            {price} <span>{disPrice}</span>
          </h3>
        </div>
        <div className="cart-wrp">
          <div className="cart-quantity">
            <div className="quantity">
              <div className="qtyminus minus" onClick={() => setLen(len - 1)}>
                -
              </div>
              <InputNumber controls={false}  name="quantity" value={len} className="qty" onChange={(e)=>setLen(e)}/>
              <div className="qtyplus plus" onClick={() => setLen(len + 1)}>
                +
              </div>
            </div>
          </div>
        </div>
        <div className="shop-btn">
          <a onClick={onAddToCart} className="theme-btn">
            <span> Add to cart</span>
          </a>
          <a onClick={onBuyNow} className="theme-btn">
            <span> Buy now</span>
          </a>
        </div>
        {SKU && (
          <h6 className="details-info">
            <span>SKU:</span> <a>{SKU}</a>
          </h6>
        )}
        {categories && (
          <h6 className="details-info">
            <span>Categories:</span>
            <a>{categories}</a>
          </h6>
        )}
        {tags.length > 0 && (
          <h6 className="details-info style-2">
            <span>Tags:</span>
            <a>
              {tags.map((tag) => (
                <b key={tag}>{tag}</b>
              ))}
            </a>
          </h6>
        )}
      </div>
    </div>
    </div>
  );
};
