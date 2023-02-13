import { lazy } from 'react'
/* eslint-disable */
export const MainPageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error
  // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
  setTimeout(() => { resolve(import('./MainPage')) }, 100000)
}))
