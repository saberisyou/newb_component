import styles from "./styles.module.less";

interface SortFcProps {
  keyword?: string;
  goodsCategoryId?: string;
  orderBy?: "default" | "new" | "price" | null;
}

const SortFc = ({ keyword = "", goodsCategoryId = "", orderBy }: SortFcProps) => {
  const baseUrl = `/search?keyword=${keyword}&goodsCategoryId=${goodsCategoryId}&orderBy=`;

  const sortItems = [
    { key: "default", label: "Recommend", isActive: orderBy === undefined || orderBy === "default" },
    { key: "new", label: "New", isActive: orderBy === "new" },
    { key: "price", label: "Price", isActive: orderBy === "price" }
  ];
  return (
    <div className={styles.sort}>
      <div className={styles.list}>
        {sortItems.map(item => (
          <a key={item.key} href={baseUrl + item.key}>
            <div className={(orderBy === undefined && item.key === "default") || item.isActive ? styles.active : ""}>
              {item.label}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SortFc;
