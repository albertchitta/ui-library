import { style, createVar, styleVariants } from "@vanilla-extract/css";
import { vars } from "./vars.css";
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

export const flexCenter = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  background: vars.colors.primary,
});

const testVar = createVar();
export const localVarStyle = style({
  vars: {
    [testVar]: "red"
  },
  background: testVar
});

export const colorVariant = styleVariants(
  vars.colors,
  // (color: any) => ({ color }),
  (color: any) => ({ background: color }),
);

const colors = {
  "blue-50": "#eff6ff",
  "blue-100": "#dbeafe",
  "blue-200": "#bfdbfe",
  "gray-700": "#374151",
  "gray-800": "#1f2937",
  "gray-900": "#111827",
}

const colorProperties = defineProperties({
  conditions: {
    mobile: {},
    desktop: { "@media": "(min-width: 900px)" }
  },
  defaultCondition: "mobile",
  properties: {
    color: colors,
  }
});

export const sprinkles = createSprinkles(colorProperties);

export const conditionStyle = sprinkles({
  color: {
    mobile: "blue-100",
    desktop: "gray-900",
  }
});
