import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Text, TextTheme } from './Text'
export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Lorem ipsum dolor, sit amet consectetur',
  text: 'Lorem ipsum dolor, sit amet consectetur',
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
  title: 'Lorem ipsum dolor, sit amet consectetur',
}

export const OnlyText = Template.bind({})
OnlyText.args = {
  text: 'Lorem ipsum dolor, sit amet consectetur',
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  title: 'Lorem ipsum dolor, sit amet consectetur',
  text: 'Lorem ipsum dolor, sit amet consectetur',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
  title: 'Lorem ipsum dolor, sit amet consectetur',
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
  text: 'Lorem ipsum dolor, sit amet consectetur',
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]


export const ErrorText = Template.bind({})
ErrorText.args = {
  title: 'Lorem ipsum dolor, sit amet consectetur',
  text: 'Lorem ipsum dolor, sit amet consectetur',
  theme: TextTheme.ERROR
}
