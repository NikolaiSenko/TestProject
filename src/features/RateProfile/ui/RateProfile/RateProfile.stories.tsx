import { ComponentStory, ComponentMeta } from '@storybook/react'
import RateProfile from './RateProfile'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
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
Normal.args = { profileId: '1' }
Normal.decorators = [
  StoreDecorator({
    user: {
      authData: { id: '1' },
    },
  }),
]
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/profile-ratings?userId=1&profileId=1`,
      method: 'GET',
      status: 200,
      response: [
        {
          rate: 4,
        },
      ],
    },
  ],
}
