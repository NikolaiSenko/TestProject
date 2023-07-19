import { ComponentStory, ComponentMeta } from '@storybook/react'
import RateArticle from './RateArticle'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
export default {
  title: 'features/RateArticle',
  component: RateArticle,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RateArticle>

const Template: ComponentStory<typeof RateArticle> = (args) => (
  <RateArticle {...args} />
)

export const Normal = Template.bind({})
Normal.args = { articleId: '1' }
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
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
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

