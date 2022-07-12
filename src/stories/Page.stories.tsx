import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Page } from "./Page";

export default {
  title: "Example/Page",
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Page>;

// eslint-disable-next-line react/function-component-definition, react/jsx-props-no-spreading
const Template: ComponentStory<typeof Page> = () => <Page />;

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const loginButton = await canvas.getByRole("button", { name: /Log in/i });
  await userEvent.click(loginButton);
};
