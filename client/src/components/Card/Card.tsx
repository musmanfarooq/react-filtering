import React from "react";
import Button from "../Button/Button.tsx";
import image from "../../pictures/image.png";
import { Variant } from "../../data/products.ts";

interface CardsProps {
  title: string;
  description?: string;
  buttonText?: string;
  variants: Variant[];
}

const Card = (props: CardsProps) => {
  return (
    <div className="shadow-lg flex gap-5 p-5 m-4 rounded-lg bg-white">
      <div className="flex justify-center p-10 border border-1 border-grey-500 min-w-[350px] bg-[#f0f1f3] rounded-lg">
        <img src={image} alt="none_img" />
      </div>
      <div>
        <div className="flex justify-between items-center gap-4 pb-3">
          <h4 className="text-2xl font-semibold">{props.title}</h4>
          <div className="flex gap-2 items-center">
            {props.variants?.map((variants: any) => (
              <p className="text-gray-400" key={variants.id}>{variants.name}</p>
            ))}
          </div>
        </div>
        <hr />
        <p className="text-gray-600 my-5">
          {props.description || "No Description"}
        </p>
        <Button buttonText={props.buttonText} />
      </div>
    </div>
  );
};

export default Card;
