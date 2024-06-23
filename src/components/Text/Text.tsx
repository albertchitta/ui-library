import * as React from "react";

interface TextProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

const Text = ({
  size = "md",
  children,
}: TextProps) => {
  return (
    <span>
      {children}
    </span>
  )
}

export default Text;
