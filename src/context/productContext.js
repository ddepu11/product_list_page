import { createContext, useEffect, useReducer } from "react";
import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  SET_FILTER,
} from "../actions/productActions";
import productsData from "../data/products.json";
import reducer from "../reducers/productReducer";

const initialState = {
  products: [...productsData.products],
  filteredProducts: [...productsData.products],
  filters: {
    size: "all",
    brand: "all",
    idealFor: "all",
    sortBy: "select",
  },
};

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filterProducts = (filters) => {
    dispatch({ type: FILTER_PRODUCTS, payload: filters });
  };

  const handleFilters = (e) => {
    const { name, value } = e.target;
    dispatch({ type: SET_FILTER, payload: { name, value } });
  };

  useEffect(() => {
    filterProducts(state.filters);
  }, [state.filters]);

  const handleClearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        filterProducts,
        handleFilters,
        handleClearFilters,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext };
