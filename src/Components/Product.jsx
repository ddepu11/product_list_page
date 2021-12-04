import styled from "styled-components";

const Product = ({ title, price, size, soldBy, brand, idealFor, image }) => {
  return (
    <Wrapper>
      <div className="image">
        <img src={image} />
      </div>

      <div className="info">
        <h2 className="title">{title}</h2>
        <h3 className="price">Price: {price}</h3>
        <h4 className="size">Size: {size}</h4>
        <h4 className="sold_by">Sold By: {soldBy}</h4>
        <h4 className="brand">Brand: {brand}</h4>
        <h4 className="ideal_for">
          Ideal for:{" "}
          {idealFor.map((item) => (
            <span key={item}>{item}&nbsp;&nbsp;</span>
          ))}
        </h4>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 5px 5px;

  .image {
    width: 200px;
    height: 300px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .title,
  .brand,
  .size,
  .sold_by,
  .ideal_for,
  .price {
    font-size: 1em;
    font-weight: 300;
  }
`;

export default Product;
