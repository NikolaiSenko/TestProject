import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ProfileCard } from './ProfileCard'

export default {
  title: 'entities/ProfileCard',
component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  data: {
    lastname: 'Сенько',
    firstname: 'Николай',
    age: 23,
    currency: Currency.USD,
    country: Country.Armenia,
    city: 'Minsk',
    username: 'admin',
    avatar: 'https://i.pinimg.com/564x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg',
  },
}

export const Dark = Template.bind({})
Dark.args = {
  data: {
    lastname: 'Сенько',
    firstname: 'Николай',
    age: 23,
    currency: Currency.USD,
    country: Country.Armenia,
    city: 'Minsk',
    username: 'admin',
    avatar: 'https://i.pinimg.com/564x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg',
  },
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const WithError = Template.bind({})
WithError.args = { error: 'error' }

export const Loading = Template.bind({})
Loading.args = { isLoading: true }
