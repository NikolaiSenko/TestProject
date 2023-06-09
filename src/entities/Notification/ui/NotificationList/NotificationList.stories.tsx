import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NotificationList } from './NotificationList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import withMock from 'storybook-addon-mock'
export default {
  title: 'entities/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock, StoreDecorator({})],
} as ComponentMeta<typeof NotificationList>

const mockData = {
  url: `${__API__}/notifications`,
  method: 'GET',
  status: 200,
  response: [
    {
      id: '1',
      title: 'Уведомление 1',
      description: 'Произошло какое-то событие',
      userId: '2',
    },
    {
      id: '2',
      title: 'Уведомление 1',
      description: 'Произошло какое-то событие',
      userId: '2',
    },
    {
      id: '3',
      title: 'Уведомление 1',
      description: 'Произошло какое-то событие',
      userId: '2',
    },
  ],
}

const Template: ComponentStory<typeof NotificationList> = (args) => (
  <NotificationList {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.parameters = {
  mockData: [mockData],
}

export const WithLoading = Template.bind({})
WithLoading.args = {}
WithLoading.parameters = {
  mockData: [{ ...mockData, delay: '2000' }],
}
