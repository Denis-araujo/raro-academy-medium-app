import React from "react";

export type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  cor?: string
  onClick?: () => void
};

export const Button: React.FC<ButtonProps> = ({
  type,
  children,
  disabled,
  cor,
  onClick
}) => {
  return (
      <button
        type={ type }
        disabled={disabled}
        className={cor}
        onClick={onClick}
      >
        { children }
      </button>
  );
};