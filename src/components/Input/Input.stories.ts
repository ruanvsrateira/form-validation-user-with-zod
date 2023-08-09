import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Text: Story = {
  args: {
    type: 'text',
    label: 'Digite seu nome',
    placeholder: 'Nome',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    label: 'Digite sua senha',
    placeholder: '********',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    label: 'Digite seu email',
    placeholder: 'john@example.com',
  },
};