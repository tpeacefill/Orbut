import React, { ReactNode } from "react";

interface CardProps {
  title: string;
  count: string;
  percentage: string;
  comparisonText: string;
  svgIcon: ReactNode;
  backgroundColor?: string;
  textColor?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  count,
  percentage,
  comparisonText,
  svgIcon,
  textColor = "text-green-600",
  backgroundColor = "bg-green-300 bg-opacity-30",
}) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start py-6 px-4 w-full rounded-lg border border-solid border-stone-300 max-md:px-5 max-md:mt-8">
        <p className="text-base font-normal font-poppins text-black">{title}</p>
        <div className="flex gap-2 mt-14 whitespace-nowrap max-md:mt-10">
          <h1 className="text-2xl font-poppins font-semibold text-black">
            {count}
          </h1>
          <div
            className={`flex flex-1 px-1 py-1.5 text-base ${textColor} rounded-md ${backgroundColor}`}
          >
            <div className="object-contain shrink-0 my-auto aspect-[1.7] w-[17px]">
              {svgIcon}
            </div>
            <div>{percentage}</div>
          </div>
        </div>
        <p className="mt-2 text-sm text-neutral-600 font-poppins">
          {comparisonText}
        </p>
      </div>
    </div>
  );
};

export default Card;
