import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/_styles/globals.css";
const preview: Preview = {
  parameters: {
    // backgrounds: {
    //   default: "bgColor",
    //   values: [
    //     { name: "bgColor", value: "#3b5998" },
    //     { name: "cardColor", value: "#3b5998" },
    //   ],
    // },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
