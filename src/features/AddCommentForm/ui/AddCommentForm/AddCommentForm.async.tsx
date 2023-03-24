import { FC, lazy } from 'react'
import { AddCommentFormProps } from './AddCommentForm'
/* eslint-disable */
export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(async () => await new Promise(resolve => {
  // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
  setTimeout(() => { resolve(import('./AddCommentForm')) }, 500)
}))
