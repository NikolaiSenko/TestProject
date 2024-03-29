import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import cls from './Page.module.scss'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUIScrollBYPath, uiActions } from '@/features/UI'
import { useLocation } from 'react-router-dom'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import { StateSchema } from '@/app/providers/StoreProvider'
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle'
import { TestProps } from '@/shared/types/tests'

interface PageProps extends TestProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const scrollPosition = useSelector((state: StateSchema) =>
    getUIScrollBYPath(state, pathname)
  )

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  })

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })

  const onScrollHandler = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      uiActions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop,
      })
    )
  }, 500)

  return (
    <main
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className])}
      onScroll={onScrollHandler}
      data-testid={props['data-testid'] ?? 'Page'}
    >
      {children}
      {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
    </main>
  )
})
