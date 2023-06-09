import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NotificationItem } from './NotificationItem'
export default {
  title: 'entities/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationItem>

const Template: ComponentStory<typeof NotificationItem> = (args) => (
  <NotificationItem {...args} />
)

const notification = {
  id: '1',
  title: 'Уведомление 1',
  description: 'Произошло какое-то событие',
  userId: '2',
}

export const Normal = Template.bind({})
Normal.args = { notification }
