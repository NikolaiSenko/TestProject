import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { Text } from 'shared/ui/Text/Text'
import { Card, CardTheme } from './Card'
export default {
   title: 'shared/Card',
   component: Card,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card { ...args } />

export const Normal = Template.bind({})
Normal.args = {
   children: <Text title={'Test'} />
}
export const Oulined = Template.bind({})
Oulined.args = {
   children: <Text title={'Test'} />,
   theme: CardTheme.OUTLINED
}
