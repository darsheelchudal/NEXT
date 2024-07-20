import React from "react";

const productDetails = ({ params }: { params: { productId: String } }) => {
  return (
    <div>
      {" "}
      <h1>Products details {params.productId}</h1>
    </div>
  );
};

export default productDetails;
