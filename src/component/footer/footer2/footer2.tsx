import styles from "./styles.module.less";

interface FooterInfo {
  name: string;
  address: string;
  email: string;
  link?: string;
}
export const Footer2 = (props: FooterInfo) => {
  const { name, address, email } = props;
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
              <li>{address}</li>
              <li>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["info-footer"]}>
          <p>{name}</p>
        </div>
        <div className={styles["info-footer"]}>
          <p>Copyright © 2024 {name} All Rights Reserved. </p>
        </div>
      </div>
    </div>
  );
};
