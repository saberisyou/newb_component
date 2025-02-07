import styles from "./styles.module.less";

export const Footer2 = () => {
  return (
    <div className={styles["footer-main"]}>
      <div className={styles["info-text"]}>
        <div className={styles["single-footer"]}>
          <div className={styles["single-footer-widget"]}>
            <div className={styles["widget-head"]}>
              <h3>Find A Page</h3>
            </div>
            <ul className={styles["contact-list"]}>
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
          <div className={styles["single-footer-widget"]}>
            <div className={styles["widget-head"]}>
              <h3>Get In Touch</h3>
            </div>
            <ul className={styles["contact-list"]}>
              <li>
                P2 Blk 11 lot 23, Pamayanang Maliksi Pasong Kawayan 2 Gen. Trias
                cavite
              </li>
              <li>
                <a href="mailto:thethirdcontrairconditioning@gmail.com">
                  thethirdcontrairconditioning@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["info-footer"]}>
          <p>Thethirdacsupply</p>
        </div>
        <div className={styles["info-footer"]}>
          <p>Copyright © 2024 Thethirdacsupply All Rights Reserved. </p>
        </div>
      </div>
    </div>
  );
};
