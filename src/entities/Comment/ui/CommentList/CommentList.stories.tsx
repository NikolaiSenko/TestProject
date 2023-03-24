import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CommentList } from './CommentList'
export default {
   title: 'entities/CommentList',
   component: CommentList,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList { ...args } />

const comments = [{
  id:'1',
  text: 'Hello World!!',
  user: {id:'1', username: 'Senko' }
},{
  id:'2',
  text: 'Hello Not',
  user: {id:'2', username: 'Petya' }
}
]

export const Normal = Template.bind({})
Normal.args = {
comments: comments
}
