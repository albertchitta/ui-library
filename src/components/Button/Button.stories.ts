import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../index";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    text: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    text: "Button",
  }
}

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    text: "Button",
  }
}
