import styles from "./styles.module.less";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { ReactNode } from "react";

interface CategoryData {
  secondLevelCategoryName?: string;
  currentCategoryName?: string;
}

const convertToBreadcrumbRoutes = (categoryData: CategoryData) => {
  const routes: { href?: string; title: string | ReactNode }[] = [
    {
      href: "/",
      title: <HomeOutlined />,
    },
  ];

  // 添加二级分类
  if (categoryData.secondLevelCategoryName) {
    routes.push({
      title: categoryData.secondLevelCategoryName,
    });
  }

  // 添加当前分类（如果与二级分类不同）
  if (
    categoryData.currentCategoryName &&
    categoryData.currentCategoryName !== categoryData.secondLevelCategoryName
  ) {
    routes.push({
      title: categoryData.currentCategoryName,
    });
  }

  return routes;
};

const CategoryFc = ({ data }: { data: CategoryData }) => {
 const routes = convertToBreadcrumbRoutes(data);
  return <Breadcrumb items={routes} separator=">" />;
};

export default CategoryFc;
