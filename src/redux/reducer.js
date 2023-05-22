import {
  GET_ALL_COUNTRYS,
  GET_COUNTRY_DETAIL,
  GET_COUNTRY_BY_NAME,
  FILTER_BY_CONTINENTS,
  GET_COUNTRY_CONTINENTS,
  FILTER_CREATED,
  ORDER_BY_NAME,
  ORDER_BY_AREA,
} from "./actionsTypes";

const initialState = {
  allCountry: [],
  filteredCountry: [],
  detail: {},
  continents: [],
  copyCountrys: [],
};

export const reducer = (state = initialState, action) => {
  const countryOrder = [
    ...(state.filteredCountry.length
      ? state.filteredCountry
      : state.allCountry),
  ];
  switch (action.type) {
    case GET_ALL_COUNTRYS:
      return {
        ...state,
        allCountry: action.payload,
        copyCountrys: action.payload,
        filteredCountry: [],
      };
    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        allCountry: action.payload,
      };
    case FILTER_BY_CONTINENTS:
      if (action.payload === "all") {
        return {
          ...state,
          filteredCountry: state.allCountry,
        };
      }

      return {
        ...state,
        filteredCountry: state.allCountry.filter((count) =>
          count.continent?.includes(action.payload)
        ),
      };
    case GET_COUNTRY_CONTINENTS:
      return {
        ...state,
        continents: action.payload,
      };

    case FILTER_CREATED:
      if (action.payload === "all") {
        return {
          ...state,
          filteredCountry: state.allCountry,
        };
      }

    case ORDER_BY_NAME:
      if (action.payload === "default") {
        return {
          ...state,
          filteredCountry: countryOrder.sort((a, b) => a.id - b.id),
        };
      }
      return {
        ...state,
        filteredCountry: countryOrder.sort((a, b) =>
          action.payload === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        ),
      };

    case ORDER_BY_AREA:
      if (action.payload === "default") {
        return {
          ...state,
          filteredCountry: countryOrder.sort((a, b) => a.id - b.id),
        };
      }

      return {
        ...state,
        filteredCountry: countryOrder.sort((a, b) =>
          action.payload === "asc" ? a.area - b.area : b.area - a.area
        ),
      };

    default:
      return state;
  }
};
