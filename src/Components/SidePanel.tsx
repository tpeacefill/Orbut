import React from "react";
import { useNavigate } from "react-router-dom";
import SidePanelButton from "./SidePanelButton";

interface ButtonProps {
  svg: React.ReactNode;
  buttonText: string;
  background?: string;
  border?: string;
}

interface SidePanelProps {
  buttons: ButtonProps[];
}

const SidePanel: React.FC<SidePanelProps> = ({ buttons }) => {
  const navigate = useNavigate();

  const handleSvgClick = () => {
    navigate("/login");
  };

  return (
    <div className="hidden lg:flex flex-col pt-11 pr-4 pl-8 max-w-full border-r border-neutral-400 w-full lg:w-[352px] h-full">
      <div className="flex gap-5 text-3xl text-black whitespace-nowrap items-center mb-14">
        <h1 className="flex-auto text-[28px] text-[#02208D] font-krona">
          Orbùt
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          onClick={handleSvgClick}
          className="cursor-pointer"
        >
          <path
            d="M3 3.25C3 2.284 3.784 1.5 4.75 1.5H10.25C10.4489 1.5 10.6397 1.57902 10.7803 1.71967C10.921 1.86032 11 2.05109 11 2.25C11 2.44891 10.921 2.63968 10.7803 2.78033C10.6397 2.92098 10.4489 3 10.25 3H4.75C4.6837 3 4.62011 3.02634 4.57322 3.07322C4.52634 3.12011 4.5 3.1837 4.5 3.25V20.75C4.5 20.888 4.612 21 4.75 21H10.25C10.4489 21 10.6397 21.079 10.7803 21.2197C10.921 21.3603 11 21.5511 11 21.75C11 21.9489 10.921 22.1397 10.7803 22.2803C10.6397 22.421 10.4489 22.5 10.25 22.5H4.75C4.28587 22.5 3.84075 22.3156 3.51256 21.9874C3.18437 21.6592 3 21.2141 3 20.75V3.25ZM19.006 12.75H10.75C10.5511 12.75 10.3603 12.671 10.2197 12.5303C10.079 12.3897 10 12.1989 10 12C10 11.8011 10.079 11.6103 10.2197 11.4697C10.3603 11.329 10.5511 11.25 10.75 11.25H19.006L15.706 7.766C15.5746 7.62077 15.5052 7.42989 15.5126 7.23416C15.5201 7.03843 15.6038 6.85338 15.7459 6.71858C15.888 6.58379 16.0773 6.50993 16.2731 6.51281C16.469 6.51569 16.6559 6.59508 16.794 6.734L21.294 11.484C21.4261 11.6233 21.4997 11.808 21.4997 12C21.4997 12.192 21.4261 12.3767 21.294 12.516L16.794 17.266C16.6559 17.4049 16.469 17.4843 16.2731 17.4872C16.0773 17.4901 15.888 17.4162 15.7459 17.2814C15.6038 17.1466 15.5201 16.9616 15.5126 16.7658C15.5052 16.5701 15.5746 16.3792 15.706 16.234L19.006 12.75Z"
            fill="black"
          />
        </svg>
      </div>
      <div className=" flex-col pr-5">
        {buttons.map((button, index) => (
          <SidePanelButton
            key={index}
            svg={button.svg}
            text={button.buttonText}
            background={button.background}
            border={button.border}
          />
        ))}
      </div>
    </div>
  );
};

export default SidePanel;
