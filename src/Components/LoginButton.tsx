import React from "react";

interface LoginButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  type = "submit",
  className = "",
  isActive = false,
  onClick,
  children,
}) => {
  return (
    <button
      type={type}
      disabled={!isActive}
      onClick={onClick}
      className={`px-8 py-4 mt-8 w-full max-w-md text-lg font-semibold font-poppins text-white rounded-full border ${
        isActive
          ? "bg-[#3F20FF] border-[#3F20FF]"
          : "bg-[#BFB5FF] border-[#BFB5FF]"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default LoginButton;
