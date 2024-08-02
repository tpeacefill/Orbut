import React from "react";

interface SidePanelButtonProps {
  svg: React.ReactNode;
  text: string;
  background?: string;
  border?: string;
}

const SidePanelButton: React.FC<SidePanelButtonProps> = ({
  svg,
  text,
  background = "bg-zinc-100",
  border = "border-zinc-300",
}) => {
  return (
    <div className="flex flex-col mb-4">
      <button
        className={`flex gap-2 py-3.5 px-4 items-center font-medium whitespace-nowrap rounded-lg border border-solid ${background} ${border} text-stone-950`}
      >
        <span className="shrink-0 w-6 aspect-square">{svg}</span>
        <p className="font-poppins font-normal text-[18px] text-[#3A3A3A]">
          {text}
        </p>
      </button>
    </div>
  );
};

export default SidePanelButton;
