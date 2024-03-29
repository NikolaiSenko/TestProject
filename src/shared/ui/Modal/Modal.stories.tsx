import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { Modal } from './Modal'
export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, beatae.',
}

export const ModalDark = Template.bind({})
ModalDark.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, beatae.',
}
ModalDark.decorators = [ThemeDecorator(Theme.DARK)]
