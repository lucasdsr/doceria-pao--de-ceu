import React from "react";

import PropTypes from "prop-types";

const Product = ({ product: { name, price, src } }) => (
  <div>
    <img
      src={src}
      alt={name}
      style={{
        width: 250,
        height: 160,
        objectFit: "cover",
        borderRadius: 5,
        boxShadow: "-5px 5px 5px rgba(0, 0, 0, 0.3)",
      }}
    />
    <div style={{ padding: 10, position: "relative", bottom: 55 }}>
      <div
        style={{
          color: "white",
          fontSize: 14,
          fontWeight: 500,
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
        }}
      >
        {name}
      </div>
      <div
        style={{
          color: "#21C856",
          fontSize: 14,
          fontWeight: 500,
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
        }}
      >
        R$ {price}
      </div>
    </div>
  </div>
);

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
