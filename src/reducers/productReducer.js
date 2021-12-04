import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  SORT_PRODUCTS,
} from "../actions/productActions";

const reducer = (state, action) => {
  switch (action.type) {
    case SORT_PRODUCTS:
      const sortBy = action.payload;

      if (sortBy === "highToLow") {
        console.log(sortBy);
        return {
          ...state,
          filteredProducts: [
            ...state.products.sort((a, b) => b.price - a.price),
          ],
        };
      }

      if (sortBy === "lowToHigh") {
        return {
          ...state,
          filteredProducts: [
            ...state.products.sort((a, b) => a.price - b.price),
          ],
        };
      }

    case FILTER_PRODUCTS:
      const { filterBy, filterValue } = action.payload;

      if (filterBy === "size") {
        return {
          ...state,
          filteredProducts: [
            ...state.products.filter((item) => item.size === filterValue),
          ],
        };
      }

      if (filterBy === "brand") {
        return {
          ...state,
          filteredProducts: [
            ...state.products.filter((item) => item.brand === filterValue),
          ],
        };
      }

      if (filterBy === "idealFor") {
        return {
          ...state,
          filteredProducts: [
            ...state.products.filter((item) =>
              item.idealFor.includes(filterValue)
            ),
          ],
        };
      }

    case CLEAR_FILTERS:
      return {
        ...state,
        filteredProducts: [...state.products],
      };

    default:
      return { ...state };
  }
};

export default reducer;
