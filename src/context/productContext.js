import { createContext, useReducer } from "react";
import { CLEAR_FILTERS, FILTER_PRODUCTS, SORT_PRODUCTS } from "../actions/productActions";
import productsData from "../data/products.json";
import reducer from "../reducers/productReducer";

const initialState = {
  products: [...productsData.products],
  filteredProducts: [...productsData.products],
};

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sortProducts = (sortBy) => {
    dispatch({ type: SORT_PRODUCTS, payload: sortBy });
    console.log(sortBy);
  };

  const filterProducts = (filterBy, filterValue) => {
    dispatch({ type: FILTER_PRODUCTS, payload: { filterBy, filterValue } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <ProductsContext.Provider
      value={{ ...state, sortProducts, filterProducts, clearFilters }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext };
