import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCountrys,
  filterByContinents,
  getCountryContinents,
  filterCreated,
  orderByName,
  orderByArea,
} from "../../redux/actions";
import Search from "../../components/Search/Search";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const continents = useSelector((state) => state.continents);
  //console.log(continents);
  const [currentPage, setCurrentPage] = useState(1);

  const handleContinents = (e) => {
    e.preventDefault();
    dispatch(filterByContinents(e.target.value));
    setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(getCountryContinents());
  }, [dispatch]);

  const handleReload = () => {
    dispatch(getAllCountrys());
  };

  const handleFilterCreate = (e) => {
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1);
  };

  const handleDortName = (e) => {
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
  };
  const handleOrderArea = (e) => {
    dispatch(orderByArea(e.target.value));
    setCurrentPage(1);
  };

  return (
    <>
      <Search currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="botonContainer">
        <button onClick={handleReload} className="botonReload">
          !Reload
        </button>
      </div>

      <div className="container">
        <div className="containerChild">
          <h3>Filter By:</h3>
          <label>
            Origin
            <select onChange={(ev) => handleFilterCreate(ev)}>
              <option value="all">All</option>
              <option value="api">Api</option>
              <option value="created">Created</option>
            </select>
          </label>
          <label>
            Continents
            <select name="continents" onChange={(ev) => handleContinents(ev)}>
              <option value="all">All</option>
              {continents.map((type) => (
                <option key={type.name} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="containerChild">
          <h3>Order By :</h3>
          <label>
            Name
            <select onChange={(e) => handleDortName(e)}>
              <option value="default">Default</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
          </label>
          <label>
            Area
            <select onChange={(ev) => handleOrderArea(ev)}>
              <option value="default">Default</option>
              <option value="asc">Area Min</option>
              <option value="desc">Area Max</option>
            </select>
          </label>
        </div>
      </div>
      <Cards currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default Home;
