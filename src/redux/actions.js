import {
  GET_ALL_COUNTRYS,
  CLEAR_COUNTRY_FILTERS,
  GET_COUNTRY_DETAIL,
  GET_COUNTRY_BY_NAME,
  FILTER_BY_CONTINENTS,
  GET_COUNTRY_CONTINENTS,
  FILTER_CREATED,
  ORDER_BY_NAME,
  ORDER_BY_AREA,
} from "./actionsTypes";
import axios from "axios";

export const getAllCountrys = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/country`);
      dispatch({
        type: GET_ALL_COUNTRYS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const clearCountryFilter = () => {
  return {
    type: CLEAR_COUNTRY_FILTERS,
  };
};

export const getCountryDetail = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/country/${id}`);
      dispatch({
        type: GET_COUNTRY_DETAIL,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getCountryByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/country?name=${name}`
      );
      return dispatch({
        type: GET_COUNTRY_BY_NAME,
        payload: data,
      });
    } catch (error) {
      window.alert("Country not found or incomplete name ");
      console.log(error.message);
    }
  };
};

export const filterByContinents = (payload) => {
  return {
    type: FILTER_BY_CONTINENTS,
    payload,
  };
};

export const getCountryContinents = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get(`http://localhost:3001/continent`);
      return dispatch({
        type: GET_COUNTRY_CONTINENTS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filterCreated = (payload) => {
  return {
    type: FILTER_CREATED,
    payload,
  };
};

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};
export const orderByArea = (payload) => {
  return {
    type: ORDER_BY_AREA,
    payload,
  };
};

export const postCountry = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/country`,
        payload
      );
      return response;
    } catch (error) {
      console.log(error.message);
    }
  };
};
