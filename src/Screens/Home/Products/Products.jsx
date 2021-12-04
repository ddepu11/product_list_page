import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Product from "../../../Components/Product";
import { ProductsContext } from "../../../context/productContext";

const Products = () => {
  const { filteredProducts, sortProducts } = useContext(ProductsContext);

  const [sortBy, setSortBy] = useState("select");

  useEffect(() => {
    sortBy !== "select" && sortProducts(sortBy);
  }, [sortBy]);

  const handleSort = (e) => {
    const { value } = e.target;
    setSortBy(value);
  };

  return (
    <Wrapper className="flex">
      <div className="sort_by_div">
        <label htmlFor="sort_by">Sort By Price</label>

        <select name="sortBy" id="sort_by" value={sortBy} onChange={handleSort}>
          <option value="highToLow">High-to-Low</option>
          <option value="lowToHigh">Low-to-High</option>
          <option value="select" disabled>
            Select
          </option>
        </select>
      </div>

      <div className="products flex">
        {filteredProducts.map((item) => (
          <Product {...item} key={item.id} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 5px 5px;
  width: 74%;
  /* border: 1px solid white; */
  flex-direction: column;
  align-items: flex-start;

  .sort_by_div {
    label {
      margin-right: 20px;
    }
    select {
      padding: 2px 4px;
      font-size: 0.9em;
    }
  }

  .products {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px 5px;
    margin-top: 20px;
  }
`;

export default Products;
