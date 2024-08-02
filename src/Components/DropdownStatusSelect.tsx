import React, { useState, useEffect, useRef } from "react";

interface DropdownStatusSelectProps {
  onSelect: (value: string) => void;
}

const DropdownStatusSelect: React.FC<DropdownStatusSelectProps> = ({
  onSelect,
}) => {
  const [selected, setSelected] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    { value: "draft", label: "Draft", disabled: false },
    { value: "in-progress", label: "In Progress", disabled: false },
    { value: "completed", label: "Completed", disabled: false },
  ];

  // Function to handle clicks outside of the dropdown
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  // Event listener for clicks outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle option selection
  const handleOptionClick = (value: string) => {
    setSelected(value);
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative mt-6 w-[494px] max-w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-3 rounded-lg border border-solid border-zinc-500 text-neutral-500 w-full bg-white font-poppins font-light pr-4 justify-between"
      >
        {selected
          ? options.find((option) => option.value === selected)?.label
          : "Select Status"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clipPath="url(#clip0_400_370)">
            <path
              d="M17 7.0001L15.5 5.6001L8 13.0001L0.5 5.6001L-1 7.0001L8 16.0001L17 7.0001Z"
              fill="#707070"
            />
          </g>
          <defs>
            <clipPath id="clip0_400_370">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="matrix(0 1 -1 0 20 0)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border border-solid border-[#858585] rounded-lg mt-1 z-10 shadow-lg">
          {!selected && (
            <button
              onClick={() => handleOptionClick("")}
              className="block px-4 py-2 font-light text-black w-full text-left hover:bg-gray-100 font-poppins cursor-not-allowed"
              disabled
            >
              Select Status
            </button>
          )}
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={`block px-4 py-2 font-light text-black w-full text-left hover:bg-gray-100 font-poppins ${
                option.disabled ? "cursor-not-allowed text-gray-400" : ""
              }`}
              disabled={option.disabled}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownStatusSelect;
