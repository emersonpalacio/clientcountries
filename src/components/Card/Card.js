import { Link } from "react-router-dom";

import "./Card.moudule.css";

const Card = ({ countryCard }) => {
  //console.log(countryCard);
  return (
    <div>
      <Link to={`/detail/${countryCard.id}`} className="link">
        <article className="card ">
          <img
            className="cardImage"
            src={
              countryCard.flag
                ? countryCard.flag
                : `https://i.ibb.co/YBfGSN6/image-lobo.png`
            }
            alt={countryCard.name}
          />
          <h2 className="cardTitle">{countryCard.name}</h2>
          <p className="cardTypes">{countryCard.continent}</p>
          <p className="cardTypes">{countryCard.capital}</p>
          <p className="cardTypes">{countryCard.area}</p>
        </article>
      </Link>
    </div>
  );
};

export default Card;
