import styles from "./styles.module.less";

export const Footer = () => {
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
              236 JADE GARDEN HONORIO LOPEZ BLVD. BARANGAY 147 ZONE 13 1012 TONDO I/I NCR, CITY OF MANILA, FIRST DISTRICT PHILIPPINES
              </li>
              <li>
                <a href="mailto:asuncionclifford991@hotmail.com">
                  asuncionclifford991@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["info-footer"]}>
          <p>Thethirdacsupply</p>
          <p>Copyright © 2024 Thethirdacsupply All Rights Reserved. </p>
          <p style={{textAlign:'right'}}>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};
