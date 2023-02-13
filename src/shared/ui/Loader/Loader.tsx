import { classNames } from 'shared/lib/classNames/classNames'
import './Loader.scss'

export interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames('lds-default', {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
