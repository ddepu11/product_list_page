import styled from "styled-components";

const Products = () => {
  return (
    <Wrapper>
      <div className="sort_by_div">
        <label htmlFor="sort_by">Sort By Price</label>

        <select name="sortBy" id="sort_by">
          <option value="highToLow">High-to-Low</option>
          <option value="lowToHigh">Low-to-High</option>
        </select>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 5px 5px;
  width: 74%;
  border: 1px solid white;
`;

export default Products;
