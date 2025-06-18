import type { StoryObj, Meta } from "@storybook/nextjs-vite";

import NftPreviewCardPage from "./nft-preview-card-page";

const meta = {
  title: "Page/NFTPreviewCardPage",
  component: NftPreviewCardPage,
  tags: ["autodocs"],
} satisfies Meta<typeof NftPreviewCardPage>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userName: "user name",
  },
};
