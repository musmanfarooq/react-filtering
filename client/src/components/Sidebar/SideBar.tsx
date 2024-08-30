import React, { useState, useEffect } from "react";
import { Brand, Model, Products } from "../../data/products.ts";
import filter from "../../pictures/filter.png";
import cross from "../../pictures/cross.png";
import Input from "../Input/Input.tsx";

interface SideBarProps {
  setFilteredProducts: (filteredProducts: any) => void;
  products: Products[];
}

const Sidebar = (props: SideBarProps) => {
  const [selectedModels, setSelectedModels] = useState<Set<string>>(
    new Set(
      props?.products.flatMap((product) =>
        product.brands.flatMap((brand) => brand.models.map((model) => model.id))
      )
    )
  );

  const [selectedVariants, setSelectedVariants] = useState<Set<string>>(
    new Set(
      props?.products.flatMap((product) =>
        product.brands.flatMap((brand) =>
          brand.models.flatMap((model) =>
            model.variants.map((variant) => variant.id)
          )
        )
      )
    )
  );

  const handleModelChange = (modelId: string, variantIds: string[]) => {
    setSelectedModels((prevSelectedModels) => {
      const newSelectedModels = new Set(prevSelectedModels);
      const newSelectedVariants = new Set(selectedVariants);

      if (newSelectedModels.has(modelId)) {
        newSelectedModels.delete(modelId);
        variantIds.forEach((variantId) =>
          newSelectedVariants.delete(variantId)
        );
      } else {
        newSelectedModels.add(modelId);
        variantIds.forEach((variantId) => newSelectedVariants.add(variantId));
      }
      setSelectedVariants(newSelectedVariants);
      return newSelectedModels;
    });
  };

  const handleVariantChange = (
    variantId: string,
    modelId: string,
    variantIds: string[]
  ) => {
    setSelectedVariants((prevSelectedVariants) => {
      const newSelectedVariants = new Set(prevSelectedVariants);
      const newSelectedModels = new Set(selectedModels);

      if (newSelectedVariants.has(variantId)) {
        newSelectedVariants.delete(variantId);
      } else {
        newSelectedVariants.add(variantId);
      }
      if (variantIds.some((id) => newSelectedVariants.has(id))) {
        newSelectedModels.add(modelId);
      } else {
        newSelectedModels.delete(modelId);
      }

      setSelectedModels(newSelectedModels);
      return newSelectedVariants;
    });
  };

  const filteredProducts = props?.products
    .map((product: Products) => ({
      ...product,
      brands: product.brands
        .map((brand: Brand) => ({
          ...brand,
          models: brand.models
            .map((model: Model) => ({
              ...model,
              variants: model.variants.filter((variant) =>
                selectedVariants.has(variant.id)
              ),
            }))
            .filter((model: Model) => model.variants.length > 0),
        }))
        .filter((brand: Brand) => brand.models.length > 0),
    }))
    .filter((product: Products) => product.brands.length > 0);

  useEffect(() => {
    props.setFilteredProducts(filteredProducts);
  }, [selectedModels, selectedVariants, filteredProducts, props]);

  return (
    <>
      <div className="flex gap-2 justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            src={filter}
            alt="filter"
            height={15}
            width={15}
            loading="lazy"
          />
          <h5 className="text-gray-500">FILTERS</h5>
        </div>
        <div>
          <img
            src={cross}
            alt="filter"
            height={20}
            width={20}
            loading="lazy"
            className="hover:cursor-pointer"
            onClick={() => {
              setSelectedModels(new Set());
              setSelectedVariants(new Set());
              props.setFilteredProducts([]);
            }}
          />
        </div>
      </div>
      {props?.products?.map((product: Products) => (
        <div key={product.id}>
          <h2 className="text-xl text-bold text-gray-600 my-3">
            Choose {product?.name}
          </h2>
          {product?.brands.map((brand: Brand) => (
            <div key={brand.id}>
              <hr />
              <h4 className="text-lg text-bold my-2 pl-2">{brand.name}</h4>
              {brand?.models.map((model: Model) => (
                <div key={model.id}>
                  <div className="pl-4 my-2">
                    <Input
                      label={model.name}
                      isChecked={selectedModels.has(model.id)}
                      onChange={() =>
                        handleModelChange(
                          model.id,
                          model.variants.map((v) => v.id)
                        )
                      }
                    />
                  </div>
                  {model.variants.map((variant) => (
                    <div className="pl-10 my-2" key={variant.id}>
                      <Input
                        label={variant.name}
                        isChecked={selectedVariants.has(variant.id)}
                        onChange={() =>
                          handleVariantChange(
                            variant.id,
                            model.id,
                            model.variants.map((v) => v.id)
                          )
                        }
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
          <hr />
        </div>
      ))}
    </>
  );
};

export default Sidebar;
