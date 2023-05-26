import { Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (StroyComponent: Story) => (
  <BrowserRouter>
    <StroyComponent />
  </BrowserRouter>
)
