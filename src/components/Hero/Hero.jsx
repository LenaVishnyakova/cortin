import "./Hero.css";

import Button from "../Button/Button";

import yellowCurtain from "../../images/hero/yellow-curtains.png";

import sortImg1 from "../../images/hero/logo-sort-1.png";
import sortImg2 from "../../images/hero/logo-sort-2.png";
import sortImg3 from "../../images/hero/logo-sort-3.png";
import sortImg4 from "../../images/hero/logo-sort-4.png";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__content">
        <h1 className="hero__title">Римские шторы</h1>
        <span className="hero__subtitle">
          Изготавливаем римские шторы с учётом всех ваших пожеланий
        </span>
        <div className="hero__buttons">
          <Button>Хочу заказать</Button>
          <Button buttonWhite={true}>Хочу стать дилером</Button>
        </div>
        <ul className="hero__sorts">
          <li className="hero__sort">
            <img
              src={sortImg1}
              alt="sort of curtains"
              className="hero__sort-img"
            />
            <span className="hero__sort-title">День-ночь</span>
          </li>
          <li className="hero__sort">
            <img
              src={sortImg2}
              alt="sort of curtains"
              className="hero__sort-img"
            />
            <span className="hero__sort-title">С автоматикой</span>
          </li>
          <li className="hero__sort">
            <img
              src={sortImg3}
              alt="sort of curtains"
              className="hero__sort-img"
            />
            <span className="hero__sort-title">С окантовкой</span>
          </li>
          <li className="hero__sort">
            <img
              src={sortImg4}
              alt="sort of curtains"
              className="hero__sort-img"
            />
            <span className="hero__sort-title">На косое окно</span>
          </li>
        </ul>
      </div>
      <img
          src={yellowCurtain}
          alt="yellow curtains"
          className="hero__img-curtains"
        />
    </section>
  );
};

export default Hero;
