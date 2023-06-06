import { ComponentStory, ComponentMeta } from '@storybook/react'
import RateArticle  from './RateArticle'
export default {
   title: 'features/RateArticle',
   component: RateArticle,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof RateArticle>

const Template: ComponentStory<typeof RateArticle> = (args) => <RateArticle { ...args } />

export const Normal = Template.bind({})
Normal.args = {

}
