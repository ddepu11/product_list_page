import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  SET_FILTER,
} from "../actions/productActions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_FILTER:
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case FILTER_PRODUCTS:
      const { size, brand, idealFor } = action.payload;

      let newProducts = [...state.products];

      if (size !== "all") {
        newProducts = [...newProducts.filter((item) => item.size === size)];
      }

      if (brand !== "all") {
        newProducts = [...newProducts.filter((item) => item.brand === brand)];
      }

      if (idealFor !== "all") {
        newProducts = [
          ...newProducts.filter((item) => item.idealFor.includes(idealFor)),
        ];
      }

      if (state.filters.sortBy === "highToLow") {
        newProducts = [...newProducts.sort((a, b) => b.price - a.price)];
      }

      if (state.filters.sortBy === "lowToHigh") {
        newProducts = [...newProducts.sort((a, b) => a.price - b.price)];
      }

      return {
        ...state,
        filteredProducts: [...newProducts],
      };

    case CLEAR_FILTERS:
      return {
        ...state,
        filteredProducts: [...state.products],
        filters: {
          size: "all",
          brand: "all",
          idealFor: "all",
          sortBy: "select",
        },
      };

    default:
      return { ...state };
  }
};

export default reducer;
