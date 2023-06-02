import {
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import { Portal } from '../Portal/Portal'
import cls from './Modal.module.scss'
import { Overlay } from '../Overlay/Overlay'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'

export interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props

  const { closeModal, isClosing, isMounted } = useModal({
    isOpen,
    onClose,
    animationDelay: 300,
  })

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <Overlay className={cls.overlay} onClick={closeModal} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  )
}
