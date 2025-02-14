import {Affix, Anchor, Col, Row} from "antd";
import {useRef, useLayoutEffect} from "react";
const Layout = ({ menu, children }:any) => {
  const affixRef = useRef<any>();
  useLayoutEffect(() => {
    if (affixRef.current) {
      affixRef.current?.updatePosition();
    }

    // 获取URL中的hash值
    const hash = window.location.hash;
    if (hash) {
      const container = document.getElementById("content");
      const targetElement = document.querySelector(hash);

      if (container && targetElement) {
        // 获取容器的滚动位置
        const containerRect = container.getBoundingClientRect();
        const targetRect = targetElement.getBoundingClientRect();

        // 计算目标元素相对于容器的位置
        const relativeTop =
          targetRect.top -
          containerRect.top +
          container.scrollTop -
          16;

        // 直接设置滚动位置，不使用平滑滚动
        container.scroll({
          top: relativeTop,
          behavior: "auto",
        });
      }
    }
  }, []);

  return (
    <Row>
      <Col span={22}>{children}</Col>
      <Col span={2}>
        <Affix
          offsetTop={48}
          ref={affixRef}
          target={() => document.getElementById("content")}
        >
          <Anchor
            affix={false}
            onClick={(e) => {
              e.preventDefault();
              const target = (e.target as HTMLElement).closest("a");
              const href = target?.getAttribute("href");

              if (href) {
                // 更新URL的hash值
                window.location.hash = href;

                const container = document.getElementById("content");
                const targetElement = document.querySelector(href);

                if (container && targetElement) {
                  // 获取容器的滚动位置
                  const containerRect = container.getBoundingClientRect();
                  const targetRect = targetElement.getBoundingClientRect();

                  // 计算目标元素相对于容器的位置
                  const relativeTop =
                    targetRect.top -
                    containerRect.top +
                    container.scrollTop -
                    16;

                  // 在容器内滚动
                  container.scroll({
                    top: relativeTop,
                    behavior: "smooth",
                  });
                }
              }
            }}
            onChange={() => {
              affixRef.current?.updatePosition();
            }}
            items={menu.map((e: never) => ({
              key: e,
              href: `#${e}`,
              title: e,
            }))}
          />
        </Affix>
      </Col>
    </Row>
  );
};
export default Layout;
