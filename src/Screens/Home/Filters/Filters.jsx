import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ProductsContext } from "../../../context/productContext";

const Filters = () => {
  const { filterProducts, products, clearFilters } =
    useContext(ProductsContext);

  const [filters, setFilters] = useState({
    size: "all",
    brand: "select",
    idealFor: "all",
  });

  // let uniqueBrands = [...new Set()];
  let brands = [];

  products.forEach((item) => {
    brands.push(item.brand);
  });

  brands = Array.from(new Set(brands));

  useEffect(() => {
    filters.size !== "all" && filterProducts("size", filters.size);
  }, [filters.size]);

  useEffect(() => {
    filters.brand !== "select" && filterProducts("brand", filters.brand);
  }, [filters.brand]);

  useEffect(() => {
    filters.idealFor !== "all" && filterProducts("idealFor", filters.idealFor);
  }, [filters.idealFor]);

  const handleFilters = (e) => {
    const { name, value } = e.target;

    setFilters((prevFilters) => {
      return {
        ...prevFilters,
        [name]: value,
      };
    });
  };

  const handleClearFilters = () => {
    setFilters({
      size: "all",
      brand: "select",
      idealFor: "all",
    });

    clearFilters();
  };

  return (
    <Wrapper>
      <h2>Filters</h2>

      <div className="filters flex">
        <div className="size">
          <h3>Size</h3>

          <div className="sizes">
            <div className="row">
              <input
                type="radio"
                id="s"
                name="size"
                value="s"
                onChange={handleFilters}
              />
              <label htmlFor="s">S</label>
            </div>

            <div className="row">
              <input
                type="radio"
                id="m"
                name="size"
                value="m"
                onChange={handleFilters}
              />
              <label htmlFor="m">M</label>
            </div>

            <div className="row">
              <input
                type="radio"
                id="l"
                name="size"
                onChange={handleFilters}
                value="l"
              />
              <label htmlFor="l">L</label>
            </div>

            <div className="row">
              <input
                type="radio"
                id="xl"
                name="size"
                onChange={handleFilters}
                value="xl"
              />
              <label htmlFor="xl">XL</label>
            </div>
          </div>
        </div>

        <div className="brand">
          <h3>Brand</h3>

          <div className="brands">
            <select name="brand" id="brands" onChange={handleFilters}>
              {brands.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}

              <option value="select" disabled selected>
                Select
              </option>
            </select>
          </div>
        </div>

        <div className="ideal_for">
          <h3>Ideal For</h3>

          <div className="ideals">
            <div className="row">
              <input
                type="radio"
                id="men"
                name="idealFor"
                value="men"
                onChange={handleFilters}
              />
              <label htmlFor="men">Men</label>
            </div>

            <div className="row">
              <input
                type="radio"
                id="women"
                name="idealFor"
                value="women"
                onChange={handleFilters}
              />
              <label htmlFor="women">Women</label>
            </div>

            <div className="row">
              <input
                type="radio"
                id="boys"
                name="idealFor"
                value="boys"
                onChange={handleFilters}
              />
              <label htmlFor="boys">Boys</label>
            </div>

            <div className="row">
              <input
                type="radio"
                id="girls"
                name="idealFor"
                value="girls"
                onChange={handleFilters}
              />
              <label htmlFor="girls">Girls</label>
            </div>
          </div>
        </div>

        <button onClick={handleClearFilters}>Clear Filters</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 5px 5px;
  width: 24%;
  height: 100vh;

  .filters {
    margin-top: 40px;
    height: 70%;
    /* border: 1px solid red; */
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    h3 {
      margin-bottom: 10px;
    }

    input {
      margin-right: 10px;
    }
  }
`;

export default Filters;
