// eslint-disable-next-line senko-plugin/layer-import
import '@/app/styles/index.scss'
import { Story } from '@storybook/react'

export const StyleDecorator = (story: () => Story) => story()
