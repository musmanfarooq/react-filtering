import React from "react";
import { Brand, Model, Products } from "../../data/products.ts";
import Card from "../Card/Card.tsx";
import FilterPills from "../FilterPills/FilterPills.tsx";

interface MainContentProps {
  filteredProducts: any;
}

const MainContent = (props: MainContentProps) => {
  return (
    <div>
      <FilterPills products={props.filteredProducts} />
      <p className="my-3 text-gray-400 pl-4 text-lg uppercase">
        Showing Result for the filters you applied
      </p>
      {props?.filteredProducts?.length > 0 ? (
        props?.filteredProducts?.map((product: Products) => (
          <div key={product.id}>
            {product.brands.map((brand: Brand) => (
              <div key={brand.id} className="brand-container">
                {brand.models.map((model: Model) => (
                  <Card
                    key={model.id}
                    title={model.name}
                    buttonText={model.price}
                    variants={model.variants}
                    description={model.description}
                  />
                ))}
              </div>
            ))}
          </div>
        ))
      ) : (
        <div>
          <h4 className="text-3xl flex justify-center uppercase text-gray-700 pt-10">
            No Data Available for Currently Applied Filters
          </h4>
        </div>
      )}
    </div>
  );
};

export default MainContent;
