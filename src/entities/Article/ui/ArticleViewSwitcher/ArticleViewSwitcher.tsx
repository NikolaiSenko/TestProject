import { ArticleView } from '../../model/constants/articleConstants'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleViewSwitcher.module.scss'
import SmallIcon from 'shared/assets/icons/small.svg'
import BigIcon from 'shared/assets/icons/big.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'

interface ArticleViewSwitcherProps {
  className?: string
  view: ArticleView
  onViewClick?: (ArticleView: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: SmallIcon,
  },
  {
    view: ArticleView.BIG,
    icon: BigIcon,
  },
]

export const ArticleViewSwitcher = (props: ArticleViewSwitcherProps) => {
  const { className, view, onViewClick } = props

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView)
  }

  return (
    <div className={classNames(cls.ArticleViewSwitcher, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          theme={ButtonTheme.CLEAR}
          key={viewType.view}
          onClick={onClick(viewType.view)}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames('', {
              [cls.notSelected]: viewType.view !== view,
            })}
          />
        </Button>
      ))}
    </div>
  )
}
