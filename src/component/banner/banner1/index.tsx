import React from "react";
import styles from "./styles.module.less";

interface BannerProps {
  title: string; // 标题文本
  desc: string; // 描述文本
  butt: string; // 按钮文本
}

const Banner: React.FC<BannerProps> = (props) => {
  const { title,desc,butt } = props;
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{desc}</div>
        <div className={styles.button}>{butt}</div>
      </div>
    </div>
  );
};
export default Banner
