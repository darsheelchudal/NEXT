import React from "react";

const page = ({
  params,
}: {
  params: { reviewId: String; productId: String };
}) => {
  return (
    <div>
      Review {params.reviewId} and Product {params.productId}
    </div>
  );
};

export default page;
