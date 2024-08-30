import React from "react";

interface InputProps {
  label: string;
  isChecked?: boolean;
  onChange?: () => void;
}

const Input = ({ label, isChecked = false, onChange }: InputProps) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 accent-black rounded-lg"
      />
      <label className="ms-2 text-sm font-medium text-gray-900">
        {label}
      </label>
    </div>
  );
};

export default Input;
