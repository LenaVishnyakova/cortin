import "./Edging.css";

import edging1 from "../../images/edging/edging1.jpg";
import edging2 from "../../images/edging/edging2.jpg";
import edging3 from "../../images/edging/edging3.jpg";
import edging4 from "../../images/edging/edging4.jpg";
import edging5 from "../../images/edging/edging5.jpg";
import edging6 from "../../images/edging/edging6.jpg";
import edging7 from "../../images/edging/edging7.jpg";
import edging8 from "../../images/edging/edging8.jpg";

const Edging = () => {
  return (
    <section className="edging container">
      <div className="edging__description">
        <h2 className="edging__title">Окантовка</h2>
        <div className="edging__subtitle">
          С <span>восьмью</span> вариантами исполнения
        </div>
      </div>
      <div className="edging__wrapper-img">
        <img src={edging1} alt="edging1" className="edging__img" />
        <div className="edging__name">Джестер</div>
      </div>
      <div className="edging__wrapper-img">
        <img src={edging2} alt="edging2" className="edging__img" />
        <div className="edging__name">Чесс</div>
      </div>
      <div className="edging__wrapper-img">
        <img src={edging3} alt="edging3" className="edging__img" />
        <div className="edging__name">Хайвэй</div>
      </div>
      <div className="edging__wrapper-img">
        <img src={edging4} alt="edging4" className="edging__img" />
        <div className="edging__name">Люверсы</div>
      </div>
      <div className="edging__wrapper-img">
        <img src={edging5} alt="edging5" className="edging__img" />
        <div className="edging__name">Кинг</div>
      </div>
      <div className="edging__wrapper-img">
        <img src={edging6} alt="edging6" className="edging__img" />
        <div className="edging__name">Горизонт</div>
      </div>
      <div className="edging__wrapper-img">
        <img src={edging7} alt="edging7" className="edging__img" />
        <div className="edging__name">Виктория</div>
      </div>
      <div className="edging__wrapper-img">
        <img src={edging8} alt="edging8" className="edging__img" />
        <div className="edging__name">Стрим дуо</div>
      </div>
    </section>
  );
};

export default Edging;
