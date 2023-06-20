import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import { CSSProperties, memo, useMemo } from 'react'
import { AppImage } from '../AppImage'
import UserIcon from '../../assets/icons/default-avatar.svg'
import { Icon } from '../Icon'
import { Skeleton } from '../Skeleton'

export interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
  fallbackInverted?: boolean
}

export const Avatar = memo(
  ({ className, src, size = 100, alt, fallbackInverted }: AvatarProps) => {
    const styles = useMemo<CSSProperties>(() => {
      return {
        width: size,
        height: size,
      }
    }, [size])

    const errorFallback = (
      <Icon
        inverted={fallbackInverted}
        Svg={UserIcon}
        width={size}
        height={size}
      />
    )
    const fallback = <Skeleton width={size} height={size} border="50%" />

    return (
      <AppImage
        alt={alt}
        src={src}
        style={styles}
        className={classNames(cls.Avatar, {}, [className])}
        errorFallback={errorFallback}
        fallback={fallback}
      />
    )
  }
)
