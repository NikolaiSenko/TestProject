import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CommentCard } from './CommentCard'
export default {
  title: 'entities/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
)
const comment = {
  id: '1',
  text: 'Hello World!!',
  user: { id: '1', username: 'Senko' },
}

export const Normal = Template.bind({})
Normal.args = {
  comment: comment
}

export const Loading = Template.bind({})
Loading.args = {
  comment: comment,
  isLoading: true
}

