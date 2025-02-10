declare global {
  // 三级分类
  interface ThirdLevelCategory {
    categoryId: number;
    parentId: number;
    categoryLevel: number;
    categoryName: string;
  }

  // 二级分类
  interface SecondLevelCategory {
    categoryId: number;
    parentId: number;
    categoryLevel: number;
    categoryName: string;
    thirdLevelCategoryVOS: ThirdLevelCategory[] | null;
  }

  // 一级分类
  interface CategoryItem {
    categoryId: number;
    categoryLevel: number;
    categoryName: string;
    secondLevelCategoryVOS: SecondLevelCategory[];
  }

  // 完整的分类列表类型
  type CategoryListType = CategoryItem[]|undefined;
}

export {};
