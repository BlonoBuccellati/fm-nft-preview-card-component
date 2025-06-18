import type { StoryObj, Meta } from "@storybook/nextjs-vite";

import CreatorInfo from "./creator-info";

const meta = {
  title: "NftCard/CreatorInfo",
  component: CreatorInfo,
  tags: ["autodocs"],
} satisfies Meta<typeof CreatorInfo>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userName: "user name",
  },
};
