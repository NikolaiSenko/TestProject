import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import Avatar from 'shared/assets/tests/storybook.jpg'

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>
const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [
  StoreDecorator({
    profile: {
      form: {
        lastname: 'Сенько',
        firstname: 'Николай',
        age: 23,
        currency: Currency.USD,
        country: Country.Armenia,
        city: 'Minsk',
        username: 'admin',
        avatar: 'https://i.pinimg.com/564x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg',
      },
      readonly: true,
    },
  }),
]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        lastname: 'Сенько',
        firstname: 'Николай',
        age: 23,
        currency: Currency.USD,
        country: Country.Armenia,
        city: 'Minsk',
        username: 'admin',
        avatar: 'https://i.pinimg.com/564x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg',
      },
      readonly: true,
    },
  }),
]
