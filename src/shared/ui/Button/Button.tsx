import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
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
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props

  const mods: Record<string, boolean> = {
    [cls.square]: square,
  }

  const additionals: string[] = [className, cls[theme], cls[size]]

  return (
    <button
      className={classNames(cls.Button, mods, additionals)}
      {...otherProps}
    >
      {}
      {children}
    </button>
  )
}
