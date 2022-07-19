import React from "react";
import CardItem from "./cardItem";
import "./cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Lets Reach Out To The Needy</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Lorem ipsom and id come add you later "
              label="Charity"
              path="contribution"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Lorem ipsom and id come add you later "
              label="Charity"
              path="contribution"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-5.jpg"
              text="Lorem ipsom and id come add you later "
              label="Charity"
              path="contribution"
            />
            <CardItem
              src="images/img-3.jpg"
              text="Lorem ipsom and id come add you later "
              label="Charity"
              path="contribution"
            />
            <CardItem
              src="images/img-6.jpg"
              text="Lorem ipsom and id come add you later "
              label="Charity"
              path="contribution"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
