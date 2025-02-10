import styles from "./styles.module.less";
import { Carousel, Flex } from "antd";
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
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "100%",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};
export const Category2 = (props: Category4Type) => {
  const { list } = props;
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <Flex  vertical>
      <div className={styles["category"]}>
        <ul className={styles["details-list"]}>
          {list.map((e) => {
            return (
              <li className={styles["details-list-item"]} key={e.categoryId}>
                <a className={styles["details-list-item-a"]}>
                  {e.categoryName}
                </a>
                <div className={styles["details-list-item-extra"]}>
                  {e.secondLevelCategoryVOS.map((e) => {
                    return (
                      <a
                        className={styles["details-list-subitem-a"]}
                        key={e.categoryId}
                        onClick={() => {
                          window.open(
                            `/search2?goodsCategoryId=${e.categoryId}`
                          );
                        }}
                      >
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
      <div className={styles["category-banner"]}>
        <Carousel afterChange={onChange}  arrows autoplay>
          <div>
            <img
              src={
                "https://www.thethirdacsupply.com/upload/20241122_23112315.jpg"
              }
            />
          </div>

          <div>
            <img
              src={
                "https://www.thethirdacsupply.com/upload/20241122_23102683.jpg"
              }
            />
          </div>
        </Carousel>
      </div>
    </Flex>
  );
};
