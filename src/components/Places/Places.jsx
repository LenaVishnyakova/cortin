import "./Places.css";

import place1 from "../../images/places/place1.jpg";
import place2 from "../../images/places/place2.jpg";
import place3 from "../../images/places/place3.jpg";

const Places = () => {
  return (
    <section className="places container">
      <div className="places__top">
        <div className="places__place">
          <img src={place1} alt="place1" className="places__img" />
          <h3 className="places__title">На окно</h3>
        </div>
        <div className="places__place">
          <h3 className="places__title">На проём</h3>
          <img src={place2} alt="place2" className="places__img" />
        </div>
      </div>
      <div className="places__place-bottom">
        <img src={place3} alt="place3" className="places__img" />
        <h3 className="places__title">На стену, в проём</h3>
      </div>
    </section>
  );
};

export default Places;
