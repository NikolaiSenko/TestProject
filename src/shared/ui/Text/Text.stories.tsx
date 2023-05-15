import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Text, TextSize, TextTheme } from './Text'
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
  theme: TextTheme.ERROR,
}

export const SizeL = Template.bind({})
SizeL.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  size: TextSize.L,
}

export const SizeM = Template.bind({})
SizeM.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  size: TextSize.M,
}

export const SizeS = Template.bind({})
SizeS.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  size: TextSize.S,
}
