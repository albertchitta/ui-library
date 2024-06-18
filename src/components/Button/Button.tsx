import * as React from "react";
import { baseButton, buttonVariants } from "./Button.css";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary" | "tertiary";
  disabled: boolean;
  onClick?: () => void;
}

const Button = ({
  text = "Button",
  variant = "primary",
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`${baseButton} ${buttonVariants[variant]}`}
      {...props}
    >
      {text}
    </button>
  )
}

export default Button;
