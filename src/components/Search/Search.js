import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Search.css";
import { getCountryByName } from "../../redux/actions";

const Search = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInpuutChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCountryByName(name));
    props.setCurrentPage(1);
    setName("");
  };
  return (
    <form onSubmit={handleSubmit} className="searchBar">
      <input
        className=""
        type="text"
        onChange={(e) => handleInpuutChange(e)}
        placeholder="NAME..."
        value={name}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        SEARCH
      </button>
    </form>
  );
};

export default Search;
