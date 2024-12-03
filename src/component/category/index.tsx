import "./styles.less"

const Category=()=> {
  return <div className="ps-sidebar">
    <aside className="ps-widget ps-widget--sidebar ps-widget--category">
      <div className="ps-widget__header">
        <h3 className="ps-widget__title">CATEGORY</h3>
      </div>
      <div className="ps-widget__content">
        <ul className="ps-list--circle">
          <li className="current"><a href="product-listing.html"><span className="circle"></span>All bakery (321)</a>
          </li>
          <li><a href="product-listing.html"><span className="circle"></span>Amazin’ Glazin’</a></li>
          <li><a href="product-listing.html"><span className="circle"></span>The Crusty Croissant</a></li>
          <li><a href="product-listing.html"><span className="circle"></span>The Rolling Pin</a></li>
          <li><a href="product-listing.html"><span className="circle"></span>Skippity Scones</a></li>
          <li><a href="product-listing.html"><span className="circle"></span>Mad Batter</a></li>
          <li><a href="product-listing.html"><span className="circle"></span>Confection Connection</a></li>
        </ul>
      </div>
    </aside>
    <aside className="ps-widget ps-widget--sidebar ps-widget--ads">
      <div className="ps-widget__header">
        <h3 className="ps-widget__title">Ads Banner</h3>
      </div>
      <div className="ps-widget__content"><img src="/mall/image/banner2x.png" alt=""/></div>
    </aside>
    <aside className="ps-widget ps-widget--sidebar ps-widget--best-seller">
      <div className="ps-widget__header">
        <h3 className="ps-widget__title">Best seller</h3>
      </div>
      <div className="ps-widget__content">
        <div className="ps-product--sidebar">
          <div className="ps-product__thumbnail">
            <a className="ps-product__overlay" href="product-detail.html"></a><img src="/mall/image/img-cake-12.jpg"
                                                                                   alt=""/></div>
          <div className="ps-product__content">
            <h4 className="ps-product__title"><a href="product-detail.html">Amazin’ Glazin’</a></h4>
            <p className="ps-product__price">
              <del>£25.00</del>
              £15.00
            </p>
            <a className="ps-btn ps-btn--xs" href="product-detail.html">Purchase</a>
          </div>
        </div>
        <div className="ps-product--sidebar">
          <div className="ps-product__thumbnail">
            <a className="ps-product__overlay" href="product-detail.html"></a><img src="/mall/image/img-cake-3.jpg"
                                                                                   alt=""/></div>
          <div className="ps-product__content">
            <h4 className="ps-product__title"><a href="product-detail.html">The Crusty Croissant</a></h4>
            <p className="ps-product__price">
              <del>£25.00</del>
              £15.00
            </p>
            <a className="ps-btn ps-btn--xs" href="product-detail.html">Purchase</a>
          </div>
        </div>
        <div className="ps-product--sidebar">
          <div className="ps-product__thumbnail">
            <a className="ps-product__overlay" href="product-detail.html"></a><img src="/mall/image/img-cake-7.jpg"
                                                                                   alt=""/></div>
          <div className="ps-product__content">
            <h4 className="ps-product__title"><a href="product-detail.html">The Rolling Pin</a></h4>
            <p className="ps-product__price">
              <del>£25.00</del>
              £15.00
            </p>
            <a className="ps-btn ps-btn--xs" href="product-detail.html">Purchase</a>
          </div>
        </div>
      </div>
    </aside>
    <aside className="ps-widget ps-widget--sidebar ps-widget--tags">
      <div className="ps-widget__header">
        <h3 className="ps-widget__title">TAGS</h3>
      </div>
      <div className="ps-widget__content">
        <ul className="ps-tags">
          <li><a href="#">Cupcake</a></li>
          <li><a href="#">vanila</a></li>
          <li><a href="#">sugar flower</a></li>
          <li><a href="#">vanila</a></li>
          <li><a href="#">coconut</a></li>
          <li><a href="#">vanila</a></li>
        </ul>
      </div>
    </aside>
  </div>
}
export default Category;