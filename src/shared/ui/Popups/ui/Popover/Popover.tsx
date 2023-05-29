import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Popover.module.scss'
import { Popover as HPopover } from '@headlessui/react'
import { DropdownDirection } from 'shared/types/ui'
import { ReactNode } from 'react'
import { mapDirectionClass } from '../../styles/mapper'
import popupCls from '../../styles/popup.module.scss'

export interface PopoverProps {
  className?: string
  direction?: DropdownDirection
  trigger: ReactNode
  children: ReactNode
}

export const Popover = (props: PopoverProps) => {
  const { className, direction = 'bottom right', trigger, children } = props
  const panelClasses = [mapDirectionClass[direction]]

  return (
    <HPopover
      className={classNames(cls.Popover, {}, [className, popupCls.popup])}
    >
      <HPopover.Button className={popupCls.trigger}>{trigger}</HPopover.Button>

      <HPopover.Panel className={classNames(cls.panel, {}, panelClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  )
}
