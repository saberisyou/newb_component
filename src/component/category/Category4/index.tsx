import styles from "./styles.module.less";
interface CategoryType {
  categoryId: number;
  categoryLevel: number;
  categoryName: string;
  parentId?: number; // parentId 是可选的
}

interface SecondLevelCategoryType extends CategoryType {
  thirdLevelCategoryVOS: string[] | null; // thirdLevelCategoryVOS 可以是字符串数组或 null
}

interface CategoryItemType {
  categoryId: number;
  categoryLevel: number;
  categoryName: string;
  secondLevelCategoryVOS: SecondLevelCategoryType[]; // secondLevelCategoryVOS 是 SecondLevelCategoryType 的数组
}

interface Category4Type {
  list: CategoryItemType[];
}

export const Category4 = (props: Category4Type) => {
  const { list } = props;
  return (
    <div className={styles["category"]}>
      <ul className={styles["details-list"]}>
        {list.map((e) => {
          return (
            <li className={styles["details-list-item"]} key={e.categoryId}>
              <a className={styles["details-list-item-a"]}>{e.categoryName}</a>
              <span>
                {e.secondLevelCategoryVOS.length < 10
                  ? `0${e.secondLevelCategoryVOS.length}`
                  : e.secondLevelCategoryVOS.length}
              </span>
              <div className={styles["details-list-item-extra"]}>
                {e.secondLevelCategoryVOS.map((e) => {
                  return (
                    <a className={styles["details-list-subitem-a"]} key={e.categoryId} onClick={()=>{
                      window.open(`/search2?goodsCategoryId=${e.categoryId}`);
                    }}>
                      {e.categoryName}
                      <span>{e.thirdLevelCategoryVOS}</span>
                    </a>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
