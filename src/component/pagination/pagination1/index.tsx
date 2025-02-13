import styles from "./styles.module.less";

interface SortFcProps {
  keyword?: string;
  goodsCategoryId?: string;
  orderBy?: "default" | "new" | "price" | null;
  pageResult?: {
    currPage: number;
    totalPage: number;
    list: any[];
  };
}

const PaginationFc = ({
  keyword = "",
  goodsCategoryId = "",
  orderBy,
  pageResult,
}: SortFcProps) => {
  if (!pageResult || !pageResult.list || pageResult.list.length === 0) {
    return null;
  }

  const getPageUrl = (page: number) => {
    return `/search?keyword=${keyword || ""}&page=${page}&goodsCategoryId=${
      goodsCategoryId || ""
    }&orderBy=${orderBy || ""}`;
  };

  return (
      <div className={styles.pages}>
        <div className={styles.page_wrap}>
          <span className={styles.page_span1}>
            <a
              href={
                pageResult.currPage === 1
                  ? "##"
                  : getPageUrl(pageResult.currPage - 1)
              }
            >
              Pre
            </a>

            {pageResult.currPage - 2 >= 1 && (
              <a href={getPageUrl(pageResult.currPage - 2)}>
                {pageResult.currPage - 2}
              </a>
            )}

            {pageResult.currPage - 1 >= 1 && (
              <a href={getPageUrl(pageResult.currPage - 1)}>
                {pageResult.currPage - 1}
              </a>
            )}

            <a href="##" className={styles.active}>
              {pageResult.currPage}
            </a>

            {pageResult.currPage + 1 <= pageResult.totalPage && (
              <a href={getPageUrl(pageResult.currPage + 1)}>
                {pageResult.currPage + 1}
              </a>
            )}

            {pageResult.currPage + 2 <= pageResult.totalPage && (
              <a href={getPageUrl(pageResult.currPage + 2)}>
                {pageResult.currPage + 2}
              </a>
            )}

            <a
              href={
                pageResult.currPage >= pageResult.totalPage
                  ? "##"
                  : getPageUrl(pageResult.currPage + 1)
              }
            >
              Next
            </a>
          </span>
        </div>
      </div>
  );
};

export default PaginationFc;
