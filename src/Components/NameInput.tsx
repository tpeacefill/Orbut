import React, { useState } from "react";

interface NameInputProps {
  id: string;
  name: string;
  placeholder: string;
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NameInput: React.FC<NameInputProps> = ({
  id,
  name,
  placeholder,
  className = "",
  value,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        id={id}
        name={name}
        placeholder={isFocused || value ? "" : placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`px-4 ${
          isFocused || value ? "pt-5 pb-1" : "pt-2.5 pb-2.5"
        } w-full text-base rounded-lg border border-neutral-300 text-neutral-600 font-poppins ${className}`}
        style={{ minHeight: "60px" }}
      />
      {(isFocused || value) && (
        <label
          htmlFor={id}
          className="absolute top-1/2 left-4 text-xs text-[#674FFF] font-poppins transform -translate-y-1/2 bg-transparent px-1"
        >
          {placeholder}
        </label>
      )}
    </div>
  );
};

export default NameInput;
