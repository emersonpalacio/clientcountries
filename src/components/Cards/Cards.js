import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountrys, clearCountryFilter } from "../../redux/actions";

import Paginado from "../Paginado/Paginado";

//import "./Cards.module.css";
import style from "./Cards.module.css";

const Cards = (props) => {
  const dispatch = useDispatch();
  const { allCountry, filteredCountry } = useSelector((state) => state);
  const country = filteredCountry.length ? filteredCountry : allCountry;
  useEffect(() => {
    dispatch(getAllCountrys());

    return () => dispatch(clearCountryFilter());
  }, [dispatch]);

  //creamos otro estado local para almacenar cuantos personajes quiero por pagina
  const [charactersPerPage /*setCharactersPerPage*/] = useState(12);

  //creamos una constante donde me guardo el indice del ultimo personaje
  const indexOfLastCharacter = props.currentPage * charactersPerPage;

  //declaro otra constante con el indice del primer personaje
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;

  //personajes que van a estar en mi pagina actual
  //El slice toma un array y agarra una porcion delo que le pase por parametro(indexOfFirstCharacter, indexOfLastCharacter)
  const currentCharacters = country?.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  //declaro una const paginado que recibe un numero de pagina
  //y seteo la pagina en ese numero de pagina
  const paginado = (pageNumber) => {
    props.setCurrentPage(pageNumber);
  };

  return (
    <>
      <div>
        <>
          <div className={style.cardContainer}>
            {currentCharacters?.map((count) => (
              <Card key={count.id} countryCard={count}></Card>
            ))}
          </div>
        </>
      </div>
      <Paginado
        charactersPerPage={charactersPerPage}
        country={country.length}
        paginado={paginado}
      />
    </>
  );
};

export default Cards;
