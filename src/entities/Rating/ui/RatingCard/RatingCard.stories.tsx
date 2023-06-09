import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RatingCard } from './RatingCard'

export default {
  title: 'entities/RatingCard',
  component: RatingCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RatingCard>

const Template: ComponentStory<typeof RatingCard> = (args) => (
  <RatingCard {...args} />
)

export const Normal = Template.bind({})
Normal.args = { title: 'Оцените ...' }
export const WithRate = Template.bind({})
WithRate.args = { rate: 4 }
export const WithFeedback = Template.bind({})
WithFeedback.args = { title: 'Оцените ...', feedbackTitle: 'Оставьте ваш отзыв!', hasFeedback: true }
