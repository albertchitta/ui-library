import { style, styleVariants } from "@vanilla-extract/css";
import { colors } from "../../styles/colors.css";
import { typography } from "../../styles/typography.css";

export const baseButton = style({
  display: "flex",
  padding: "9px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "6px",
  cursor: "pointer",
  color: colors.gray8,
  // fontFamily: typography.action.fontFamily,
  fontStyle: typography.action.fontStyle,
  fontWeight: typography.action.fontWeight,
});

export const buttonColorVariants = styleVariants({
  primary: {
    border: `px solid ${colors.action1}`,
    background: colors.action1,
    ":hover": {
      background: colors.gray2,
      borderColor: colors.gray2,
    },
    ":active": {
      background: colors.gray3,
      borderColor: colors.gray3,
    },
    ":disabled": {
      background: colors.action2,
      borderColor: colors.action2,
      color: colors.gray4,
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

export const buttonSizeVariants = styleVariants({
  xs: {
    padding: "9px",
    fontSize: "12px",
    lineHeight: "15px",
  },
  sm: {
    padding: "12px",
    fontSize: "15px",
    lineHeight: "18px",
  },
  md: {
    padding: "15px",
    fontSize: "18px",
    lineHeight: "21px",
  },
  lg: {
    padding: "18px",
    fontSize: "21px",
    lineHeight: "24px",
  },
  xl: {
    padding: "21px",
    fontSize: "24px",
    lineHeight: "27px",
  }
});
