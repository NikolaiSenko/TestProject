import { lazy } from 'react'
/* eslint-disable */
export const ProfilePageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error
  // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
  setTimeout(() => { resolve(import('./ProfilePage')) }, 500)
}))
