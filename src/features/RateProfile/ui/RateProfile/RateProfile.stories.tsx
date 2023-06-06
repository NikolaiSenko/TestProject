import { ComponentStory, ComponentMeta } from '@storybook/react'
import RateProfile from './RateProfile'
export default {
  title: 'features/RateProfile',
  component: RateProfile,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RateProfile>

const Template: ComponentStory<typeof RateProfile> = (args) => (
  <RateProfile {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
