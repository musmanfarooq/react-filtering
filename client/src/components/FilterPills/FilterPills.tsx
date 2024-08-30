import React from "react";
import { Products } from "../../data/products";

interface FilterPillsProps {
  products: any;
}

const FilterPills = (props: FilterPillsProps) => {
  const formatProductData = (products: Products[]) => {
    return products?.flatMap((product) =>
      product?.brands?.flatMap((brand) =>
        brand?.models?.map((model) => {
          const variantNames = model.variants
            .map((variant) => variant.name)
            .join(", ");
          return `${model.name}, ${variantNames}`;
        })
      )
    );
  };
  const formattedData = formatProductData(props?.products);

  return (
    <>
      <p className="p-4 text-2xl text-gray-400">Applied Filters</p>
      {formattedData?.length > 0 ? (
        formattedData?.map((data: any) => (
          <div
            key={data.id}
            className="mx-4 bg-white rounded-2xl inline-flex p-2 justify-center items-center gap-3 mb-3"
          >
            <div className="flex gap-3">{data}</div>
          </div>
        ))
      ) : (
        <p className="p-4 text-gray-400">No Filters Applied</p>
      )}
    </>
  );
};

export default FilterPills;
