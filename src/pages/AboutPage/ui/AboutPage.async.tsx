import { lazy } from 'react'
/* eslint-disable */

export const AboutPageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error
  // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
  setTimeout(() => { resolve(import('./AboutPage')) }, 500)
}))
