import { ComponentStory, ComponentMeta } from '@storybook/react'
import ForbiddenPage from './ForbiddenPage'
export default {
  title: 'pages/AdminPanelPage',
  component: ForbiddenPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ForbiddenPage>

const Template: ComponentStory<typeof ForbiddenPage> = (args) => (
  <ForbiddenPage {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
