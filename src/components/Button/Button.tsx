import * as React from "react";
import { baseButton, buttonColorVariants, buttonSizeVariants } from "./Button.css";
import { Text } from "../index";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  disabled: boolean;
  onClick?: () => void;
}

const Button = ({
  text = "Button",
  variant = "primary",
  size = "md",
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`
        ${baseButton}
        ${buttonColorVariants[variant]}
        ${buttonSizeVariants[size]}
      `}
      {...props}
    >
      <Text>
        {text}
      </Text>
    </button>
  )
}

export default Button;
