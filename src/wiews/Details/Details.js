import { getCountryDetail } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import style from "./Details.module.css";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const coutry = useSelector((state) => state.detail);

  console.log(coutry);

  const [zoom, setZoom] = useState(false);
  function handleZoom() {
    setZoom(!zoom);
  }

  useEffect(() => {
    dispatch(getCountryDetail(id));
  }, [dispatch, id]);

  return (
    <div className={style.card1}>
      <article className={style.card}>
        <p className={style.cardId}>
          <span>Id:</span>
          {coutry.id}
        </p>

        <img
          src={coutry.flag}
          alt="flag"
          className={zoom ? style.zoom : style.card}
          onClick={handleZoom}
        />

        <h2 className={style.cardTitle}>{coutry.name}</h2>
        <div className={style.containerParrafos}>
          <p className={style.parrafos}>
            <span>continent:</span>
            {coutry.continent}
          </p>
          <p className={style.parrafos}>
            <span>capital:</span>
            {coutry.capital}
          </p>
          <p className={style.parrafos}>
            <span>subregion:</span>
            {coutry.subregion}
          </p>
          <p className={style.parrafos}>
            <span>area:</span>
            {coutry.area}
          </p>
          <p className={style.parrafos}>
            <span>population:</span>
            {coutry.population}
          </p>
          <p className={style.cardContent}>
            <span>continent:</span>
            {coutry.continent}
          </p>
        </div>
      </article>
    </div>
  );
};

export default Details;
