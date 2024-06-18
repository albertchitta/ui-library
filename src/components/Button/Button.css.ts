import { style, styleVariants } from "@vanilla-extract/css";

export const baseButton = style({
  display: "flex",
  padding: "9px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "6px",
  cursor: "pointer",
});

export const buttonVariants = styleVariants({
  primary: {
    border: "1px solid #35CEDE",
    background: "#35CEDE",
    color: "#1E1F20",
    ":hover": {
      background: "#D8DADA",
      borderColor: "#D8DADA"
    },
    ":active": {
      background: "#C0C3C4",
      borderColor: "#C0C3C4",
    },
    ":disabled": {
      background: "#00373D",
      borderColor: "#00373D",
      color: "#919697",
    },
  },
  secondary: {
    border: "1px solid #00373D",
    background: "#00373D",
    color: "#35CEDE",
    ":hover": {
      border: "1px solid #35CEDE",
    },
    ":active": {
      color: "#9BA4AB",
    },
    ":disabled": {
      background: "#3B3F3F",
      borderColor: "#3B3F3F",
      color: "#919697",
    }
  },
  tertiary: {
    background: "none",
    border: "none",
    ":hover": {
      color: "#35CEDE",
    },
    ":active": {
      color: "#35CEDE",
    },
    ":disabled": {
      color: "#919697",
    }
  },
});
