import type { StoryObj, Meta } from "@storybook/nextjs-vite";

import NftCard from "./nft-card";

const meta = {
  title: "NftCard/NftCard",
  component: NftCard,
  tags: ["autodocs"],
} satisfies Meta<typeof NftCard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userName: "user name",
    price: 1000.23,
    title: "Title",
    description: "description",
    lastUpdatedDate: 31,
  },
};
