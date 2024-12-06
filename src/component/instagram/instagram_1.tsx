import "./styles.less";
import {Card2} from "../card/Card_2.tsx";

export const Instagram1 = () => {
  return (
    <div className="container-fluid">
      <div className="section-capture">
        <div className="section-title">
          <span
            className="sub-title animate__fadeInUp animate__animated"
            data-animate="animate__fadeInUp"
          >
            Our instagram shop
          </span>
          <h2
            data-animate="animate__fadeInUp"
            className="animate__fadeInUp animate__animated"
          >
            <span>Follow on instagram</span>
          </h2>
        </div>
      </div>
      <div className="insta-slider">
        <div className="card-item">
          <Card2 />
        </div>
        <div className="card-item">
          <Card2 />
        </div>
        <div className="card-item">3</div>
        <div className="card-item">4</div>
      </div>
      <div className={"insta-button"}>
        <a className="btn btn-style2">Electon Template</a>
      </div>
    </div>
  );
};
