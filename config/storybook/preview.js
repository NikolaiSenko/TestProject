import { addDecorator } from '@storybook/react'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import { Theme } from '@/shared/const/theme'
import { SuspenseDecorator } from '@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  themes: {
    default: 'brown',
    list: [
      { name: 'brown', class: Theme.BROWN, color: '#8d730b' },
      { name: 'light', class: Theme.LIGHT, color: '#908d8d' },
      { name: 'dark', class: Theme.DARK, color: '#1e1802' },
    ],
  },
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator)
addDecorator(SuspenseDecorator)
