import React from "react";

const page = ({
  params,
}: {
  params: { reviewsId: String; productId: String };
}) => {
  return (
    <div>
      <h1>
        Review {params.reviewsId} for Product {params.productId}
      </h1>
    </div>
  );
};

export default page;
