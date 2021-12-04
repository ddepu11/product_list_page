import styled from "styled-components";
import { ProductsProvider } from "../context/productContext";
import Filters from "../Screens/Home/Filters/Filters";
import Products from "../Screens/Home/Products/Products";

const App = () => {
  return (
    <Wrapper className="container flex">
      <ProductsProvider>
        <Filters />
        <Products />
      </ProductsProvider>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  gap: 0 10px;
  padding: 50px 0 0 0;
  justify-content: space-between;
  align-items: flex-start;
`;

export default App;
