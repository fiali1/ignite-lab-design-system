import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text/Text';
import { Checkbox } from "./Checkbox";

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Remind me for 30 days</Text>
        </div>
      );
    }
  ]
} as Meta;

export const Default: StoryObj = {};
