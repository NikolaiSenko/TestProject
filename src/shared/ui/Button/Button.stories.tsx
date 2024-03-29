import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { Button, ButtonSize, ButtonTheme } from './Button'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text',
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
}
export const ClearInverted = Template.bind({})
ClearInverted.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED,
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
}

export const OutlineInverted = Template.bind({})
OutlineInverted.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE_INVERTED,
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
}

export const Size_M = Template.bind({})
Size_M.args = {
  children: 'Text',
  size: ButtonSize.M,
}

export const Size_L = Template.bind({})
Size_L.args = {
  children: 'Text',
  size: ButtonSize.L,
}

export const Size_XL = Template.bind({})
Size_XL.args = {
  children: 'Text',
  size: ButtonSize.XL,
}

export const Square = Template.bind({})
Square.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
}

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
}

export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  disabled: true
}
