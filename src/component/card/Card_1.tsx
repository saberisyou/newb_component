import "./styles.less";
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

interface Card3Props {
  list: GoodsType[];
  title?: string;
}

const Card3 = (props: Card3Props) => {
  const { list,title } = props;
  return (
    <>
      {title && <div className="title">{title}</div>}
      <div className="card3_list">
        {list.map((e: GoodsType) => {
          const {
            goodsId,
            href,
            goodsCoverImg,
            goodsName,
            goodsIntro,
            discount,
            sellingPrice,
          } = e;
          return (
            <div
              key={goodsId}
              className={"card3"}
              onClick={() => {
                if (href) {
                  window.location.href = href;
                }
              }}
            >
              <div className={"img_box"}>
                <img src={goodsCoverImg} alt={goodsName} />
              </div>

              <p className="name">{goodsName}</p>
              <p className="intro">{goodsIntro}</p>
              <p className="discount">{discount}</p>
              <p className="item_price">{sellingPrice}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card3;
