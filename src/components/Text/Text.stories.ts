import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../index";

const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExtraLarge: Story = {
};

export const Large: Story = {
};

export const Medium: Story = {
};

export const Small: Story = {
};

export const ExtraSmall: Story = {
};
