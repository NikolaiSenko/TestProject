import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AvatarDropdown } from './AvatarDropdown'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { UserRole } from '@/entities/User'
export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AvatarDropdown>

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
  <AvatarDropdown {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [
  StoreDecorator({
    user: {
      authData: {
        id: '3',
        roles: [UserRole.ADMIN],
        avatar:
          'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
      },
    },
  }),
]
