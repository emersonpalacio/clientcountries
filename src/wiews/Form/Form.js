import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getCountryContinents, postCountry } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./Form.module.css";

const validate = (state) => {
  const error = {};

  if (state.name.length < 3 || state.name.length > 255) {
    error.name = "Name must be between 3 and 255 characters!";
  }

  if (state.flag && !/^http.+.\.(jpg|jpeg|gif|png|webp)$/.test(state.flag)) {
    error.flag = "Invalid image!";
  }
  //https://i.ibb.co/RbzPYj5/flag-Neutra.png

  if (state.continents.length > 2 || state.continents.length < 1) {
    error.continents = "You must choose one or two continents!";
  }

  if (state.name.length < 3 || state.name.length > 255) {
    error.name = "Name must be between 3 and 255 characters!";
  }

  if (state.capital.length < 2 || state.capital.length > 255) {
    error.capital = "capital must be between 3 and 255 characters!";
  }
  if (state.subregion.length < 2 || state.subregion.length > 255) {
    error.subregion = "subregion must be between 3 and 255 characters!";
  }

  return error;
};

const initialState = {
  name: "",
  capital: "",
  subregion: "",
  area: "",
  population: "",
  continents: [],
};

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const continents = useSelector((state) => state.continents);

  //me creo un estado local donde me guarde la info del formulario
  //ese estado inicial va a ser un objeto con las props que necesita el POST
  const [input, setInput] = useState(initialState);

  const [touch, setTouch] = useState({});

  const errors = validate(input);

  const isFormValid = Object.keys(errors).length === 0;

  //manja mis cambios en los inputs
  const handleChange = (ev) => {
    const { name, value } = ev.target;
    const convertToNumber =
      name !== "flag" &&
      name !== "name" &&
      name !== "continents" &&
      name !== "capital" &&
      name !== "subregion";

    setInput({
      ...input,
      [name]: convertToNumber ? Number(value) : value,
    });
    //console.log(setInput);
  };

  const handleSelect = (ev) => {
    if (!input.continents.includes(ev.target.value)) {
      setInput({
        ...input,
        //cuando elija el type, me tre todo y concatena el target valuye
        //Va agregando en un array todo lo que va seleccionando
        continents: [...input.continents, ev.target.value],
      });
      //setInput(Array.from(ev.target.continents, (option) => option.value));
    }
    console.log(setInput);
  };
  //console.log(handleSelect);
  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (isFormValid) {
      dispatch(postCountry(input));
      alert("Country created successfully!");
      //reinicio el form
      setInput(initialState);
      //useHistory, te redirige a la ruta que yo le diga
      history.push("/home");
    }
  };

  const handleDeleteType = (elem) => {
    //traigo una copya del estadoinput y lo mapeo para quedarme con los typos distintos al que me manda el evento
    const filterDelete = input.continents.filter((type) => type !== elem);

    //seteo el estado input
    setInput({
      ...input,
      continents: filterDelete,
    });
  };

  const handleBlur = (ev) => {
    setTouch({
      ...touch,
      [ev.target.name]: true,
    });
  };

  //hace un dispatch para los types
  //cuando se monte el componente que traiga los types
  useEffect(() => {
    dispatch(getCountryContinents());
  }, [dispatch]);
  //console.log(dispatch);

  return (
    <div className={style.container}>
      <form onSubmit={(e) => handleSubmit(e)} className={style.form}>
        <h2>CREATE YOUR country!</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            required
            value={input.name}
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touch.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="image">Flag</label>
          <input
            type="text"
            value={input.flag || ""}
            id="flag"
            name="flag"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.flag && touch.flag && <p>{errors.flag}</p>}
        </div>
        <div>
          <label htmlFor="capital">capital:</label>
          <input
            type="text"
            required
            value={input.capital}
            id="capital"
            name="capital"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.capital && touch.capital && <p>{errors.capital}</p>}
        </div>
        <div>
          <label htmlFor="heightMin">subregion:</label>
          <input
            type="text"
            required
            value={input.subregion}
            id="subregion"
            name="subregion"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.subregion && touch.subregion && <p>{errors.subregion}</p>}
        </div>
        <div>
          <label htmlFor="heightMax">area km^2:</label>
          <input
            min={1}
            max={255}
            type="number"
            required
            value={input.heightMax}
            id="area"
            name="area"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.area && touch.area && <p>{errors.area}</p>}
        </div>
        <div>
          <label htmlFor="population">population:</label>
          <input
            min={1}
            max={255}
            type="number"
            required
            value={input.population}
            id="population"
            name="population"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.population && touch.population && <p>{errors.population}</p>}
        </div>

        <label>
          continents
          <select
            name="filterByContinents"
            onChange={handleSelect}
            disabled={input.continents.length >= 2}
            onBlur={handleBlur}
          >
            <option value="all">All</option>
            {continents.map((type) => (
              <option key={type.name} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
          {errors.continents && touch.continents && (
            <p className={style.errorType}>{errors.continents}</p>
          )}
        </label>
        <ul>
          {input.continents.map((elem) => (
            <li key={elem} className={style.listaTypes}>
              {elem}
              <button
                className={style.delete}
                type="button"
                onClick={() => handleDeleteType(elem)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
        <button className={style.create} type="submit" disabled={!isFormValid}>
          CREATE
        </button>
      </form>
    </div>
  );
};

export default Form;
