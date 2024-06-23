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
  fontStyle: typography.action.fontStyle,
  fontWeight: typography.action.fontWeight,
});

export const buttonColorVariants = styleVariants({
  primary: {
    border: `1px solid ${colors.action1}`,
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
    border: `1px solid ${colors.action2}`,
    background: colors.action2,
    color: colors.action1,
    ":hover": {
      border: `1px solid ${colors.action1}`,
    },
    ":active": {
      color: colors.gray4,
    },
    ":disabled": {
      background: colors.gray5,
      borderColor: colors.gray5,
      color: colors.gray4,
    }
  },
  tertiary: {
    background: "none",
    border: "none",
    ":hover": {
      color: colors.action1,
    },
    ":active": {
      color: colors.action1,
    },
    ":disabled": {
      color: colors.gray4,
    }
  },
});

export const buttonSizeVariants = styleVariants({
  xs: {
    padding: "9px",
    fontSize: typography.action.fontSize.xs,
    lineHeight: typography.action.lineHeight.xs,
  },
  sm: {
    padding: "12px",
    fontSize: typography.action.fontSize.sm,
    lineHeight: typography.action.lineHeight.sm,
  },
  md: {
    padding: "15px",
    fontSize: typography.action.fontSize.md,
    lineHeight: typography.action.lineHeight.md,
  },
  lg: {
    padding: "18px",
    fontSize: typography.action.fontSize.lg,
    lineHeight: typography.action.lineHeight.lg,
  },
  xl: {
    padding: "21px",
    fontSize: typography.action.fontSize.xl,
    lineHeight: typography.action.lineHeight.xl,
  }
});
