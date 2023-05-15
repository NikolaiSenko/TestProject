import { ButtonHTMLAttributes, memo, ReactNode } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
  OUTLINE_INVERTED = 'outlineInverted',
  CLEAR_INVERTED = 'clerInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
  isButton?: boolean
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square,
    size = ButtonSize.M,
    disabled,
    isButton = true,
    ...otherProps
  } = props

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  }

  const additionals: Array<string | undefined> = [
    className,
    cls[theme],
    cls[size],
  ]

  return isButton ? (
    <button
      className={classNames(cls.Button, mods, additionals)}
      {...otherProps}
      disabled={disabled}
    >
      {}
      {children}
    </button>
  ) : (
    <span
      className={classNames(cls.Button, mods, additionals)}
      {...otherProps}
    >
      {}
      {children}
    </span>
  )
})
