import  styles from "./styles.module.less";

export const Card2 = () => {
  return (
    <div className={styles["single-product-wrap"]}>
      <div className={styles["product-image"]}>
        <a href="product-template.html" className={styles["pro-img"]}>
          <img
            src="https://v.bootstrapmb.com/2024/11/k9bh015503/img/product/home1-pro-11.jpg"
            className={`${styles["img-fluid"]} ${styles["img1"]} ${styles["mobile-img1"]}`}
            alt="p1"
          />
          <img
            src="img/product/home1-pro-8.jpg"
            className={`${styles["img-fluid"]} ${styles["img2"]} ${styles["mobile-img2"]}`}
            alt="p2"
          />
        </a>
        <div className={styles["product-action"]}>
          <a
            href="#quickview"
            className={styles["quickview"]}
            data-bs-toggle="modal"
            data-bs-target="#quickview"
          >
            <span className={styles["tooltip-text"]}>Quickview</span>
            <span className={styles["pro-action-icon"]}>
              <i className={styles["feather-eye"]}></i>
            </span>
          </a>
          <a
            href="#add-to-cart"
            className={styles["add-to-cart"]}
            data-bs-toggle="modal"
            data-bs-target="#add-to-cart"
          >
            <span className={styles["tooltip-text"]}>Add to cart</span>
            <span className={styles["pro-action-icon"]}>
              <i className={styles["feather-shopping-bag"]}></i>
            </span>
          </a>
          <a href="wishlist-product.html" className={styles["wishlist"]}>
            <span className={styles["tooltip-text"]}>Wishlist</span>
            <span className={styles["pro-action-icon"]}>
              <i className={styles["feather-heart"]}></i>
            </span>
          </a>
        </div>
      </div>
      <div className={styles["product-content"]}>
        <div className={styles["product-sub-title"]}>
          <span>Waterproof watch</span>
        </div>
        <div className={styles["product-title"]}>
          <h6>
            <a href="product-template.html">Smart watch</a>
          </h6>
        </div>
        <div className={styles["product-price"]}>
          <div className={styles["pro-price-box"]}>
            <span className={styles["new-price"]}>$32.00</span>
            <span className={styles["old-price"]}>$38.00</span>
          </div>
        </div>
        <div className={styles["product-description"]}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className={styles["product-action"]}>
          <a
            href="#quickview"
            className={styles["quickview"]}
            data-bs-toggle="modal"
            data-bs-target="#quickview"
          >
            <span className={styles["tooltip-text"]}>Quickview</span>
            <span className={styles["pro-action-icon"]}>
              <i className={styles["feather-eye"]}></i>
            </span>
          </a>
          <a
            href="#add-to-cart"
            className={styles["add-to-cart"]}
            data-bs-toggle="modal"
            data-bs-target="#add-to-cart"
          >
            <span className={styles["tooltip-text"]}>Add to cart</span>
            <span className={styles["pro-action-icon"]}>
              <i className={styles["feather-shopping-bag"]}></i>
            </span>
          </a>
          <a href="wishlist-product.html" className={styles["wishlist"]}>
            <span className={styles["tooltip-text"]}>Wishlist</span>
            <span className={styles["pro-action-icon"]}>
              <i className={styles["feather-heart"]}></i>
            </span>
          </a>
        </div>
      </div>
      <div className={styles["pro-label-retting"]}>
        <div className={styles["product-ratting"]}>
          <span className={styles["pro-ratting"]}>
            <i className={styles["fa-solid fa-star"]}></i>
            <i className={styles["fa-solid fa-star"]}></i>
            <i className={styles["fa-solid fa-star"]}></i>
            <i className={styles["fa-solid fa-star"]}></i>
            <i className={styles["fa-solid fa-star"]}></i>
          </span>
        </div>
        <div className={`${styles["product-label"]} ${styles["pro-new-sale"]}`}>
          <span className={styles["product-label-title"]}>
            Sale<span>30%</span>
          </span>
        </div>
      </div>
    </div>
  );
};
