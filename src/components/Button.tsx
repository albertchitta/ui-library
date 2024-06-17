import * as React from "react";

interface ButtonProps {
  text: string;
  variant: string;
  onClick?: () => void;
}

const Button = ({
  text = "Button",
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className=""
      {...props}
    >
      {text}
    </button>
  )
}

export default Button;
