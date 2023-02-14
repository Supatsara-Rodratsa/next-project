import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '../components/Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Button,
  title: 'Component/Button',
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />
export const DefaultButton = Template.bind({})
DefaultButton.args = {
  label: 'Button',
}

export const CircleButton = Template.bind({})
CircleButton.args = {
  label: '+',
  isCircle: true,
}
