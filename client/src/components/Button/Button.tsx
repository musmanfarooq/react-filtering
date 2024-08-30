import React from "react";

interface ButtonProps {
  buttonText?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      type="button"
      className="text-white bg-gradient-to-r from-blue-700 to-cyan-500 hover:from-blue-800 hover:to-cyan-600 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 "
    >
      {props.buttonText || "Not Avaliable"}
    </button>
  );
};

export default Button;
