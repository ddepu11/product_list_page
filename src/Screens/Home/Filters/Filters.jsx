import styled from "styled-components";

const Filters = () => {
  return (
    <Wrapper>
      <h2>Filters</h2>

      <div className="filters">
        <div className="size">
          <h3>Size</h3>

          <div className="sizes">
            <div className="row">
              <input type="radio" id="small" name="size" />
              <label htmlFor="small">Small</label>
            </div>

            <div className="row">
              <input type="radio" id="medium" name="size" />
              <label htmlFor="medium">Medium</label>
            </div>

            <div className="row">
              <input type="radio" id="large" name="size" />
              <label htmlFor="large">Large</label>
            </div>

            <div className="row">
              <input type="radio" id="xl" name="size" />
              <label htmlFor="xl">XL</label>
            </div>
          </div>
        </div>

        <div className="brand">
          <h3>Brand</h3>

          <div className="brands">
            <select name="brand" id="brands">
              <option value="adidas">Adidas</option>
              <option value="nike">Nike</option>
            </select>
          </div>
        </div>

        <div className="ideal_for">
          <h3>Ideal For</h3>

          <div className="ideals">
            <div className="row">
              <input type="radio" id="men" name="idealFor" />
              <label htmlFor="men">Men</label>
            </div>

            <div className="row">
              <input type="radio" id="women" name="idealFor" />
              <label htmlFor="women">Women</label>
            </div>

            <div className="row">
              <input type="radio" id="boys" name="idealFor" />
              <label htmlFor="boys">Boys</label>
            </div>

            <div className="row">
              <input type="radio" id="girls" name="idealFor" />
              <label htmlFor="girls">Girls</label>
            </div>
          </div>
        </div>

        <button>Clear Filters</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 5px 5px;
  width: 24%;
  border: 1px solid red;
`;

export default Filters;
