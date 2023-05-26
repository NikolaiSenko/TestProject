import { Story } from '@storybook/react'
import { Suspense } from 'react'

export const SuspenseDecorator = (StroyComponent: Story) => (
  <Suspense>
    <StroyComponent />
  </Suspense>
)
