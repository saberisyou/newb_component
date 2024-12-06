import "./styles.less";
export const Card2 = () => {

  return (
    <div className="single-product-wrap">
      <div className="product-image">
        <a href="product-template.html" className="pro-img">
          <img
            src="https://v.bootstrapmb.com/2024/11/k9bh015503/img/product/home1-pro-11.jpg"
            className="img-fluid img1 mobile-img1"
            alt="p1"
          />
          <img
            src="img/product/home1-pro-8.jpg"
            className="img-fluid img2 mobile-img2"
            alt="p2"
          />
        </a>
        <div className="product-action">
          <a
            href="#quickview"
            className="quickview"
            data-bs-toggle="modal"
            data-bs-target="#quickview"
          >
            <span className="tooltip-text">Quickview</span>
            <span className="pro-action-icon">
              <i className="feather-eye"></i>
            </span>
          </a>
          <a
            href="#add-to-cart"
            className="add-to-cart"
            data-bs-toggle="modal"
            data-bs-target="#add-to-cart"
          >
            <span className="tooltip-text">Add to cart</span>
            <span className="pro-action-icon">
              <i className="feather-shopping-bag"></i>
            </span>
          </a>
          <a href="wishlist-product.html" className="wishlist">
            <span className="tooltip-text">Wishlist</span>
            <span className="pro-action-icon">
              <i className="feather-heart"></i>
            </span>
          </a>
        </div>
      </div>
      <div className="product-content">
        <div className="product-sub-title">
          <span>Waterproof watch</span>
        </div>
        <div className="product-title">
          <h6>
            <a href="product-template.html">Smart watch</a>
          </h6>
        </div>
        <div className="product-price">
          <div className="pro-price-box">
            <span className="new-price">$32.00</span>
            <span className="old-price">$38.00</span>
          </div>
        </div>
        <div className="product-description">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="product-action">
          <a
            href="#quickview"
            className="quickview"
            data-bs-toggle="modal"
            data-bs-target="#quickview"
          >
            <span className="tooltip-text">Quickview</span>
            <span className="pro-action-icon">
              <i className="feather-eye"></i>
            </span>
          </a>
          <a
            href="#add-to-cart"
            className="add-to-cart"
            data-bs-toggle="modal"
            data-bs-target="#add-to-cart"
          >
            <span className="tooltip-text">Add to cart</span>
            <span className="pro-action-icon">
              <i className="feather-shopping-bag"></i>
            </span>
          </a>
          <a href="wishlist-product.html" className="wishlist">
            <span className="tooltip-text">Wishlist</span>
            <span className="pro-action-icon">
              <i className="feather-heart"></i>
            </span>
          </a>
        </div>
      </div>
      <div className="pro-label-retting">
        <div className="product-ratting">
          <span className="pro-ratting">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </span>
        </div>
        <div className="product-label pro-new-sale">
          <span className="product-label-title">
            Sale<span>30%</span>
          </span>
        </div>
      </div>
    </div>
  );
};
