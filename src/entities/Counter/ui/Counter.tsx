import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { getCounterValue } from '../modal/selectors/getCounterValue/getCounterValue'
import { counterActions } from '../modal/slice/counterSlice'

export const Counter = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)

  const onIncrement = () => {
    dispatch(counterActions.increment())
  }
  const onDecrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button
        data-testid="increment-btn"
        theme={ButtonTheme.OUTLINE}
        onClick={onIncrement}
      >
        {t('increment')}
      </Button>
      <Button
        data-testid="decrement-btn"
        theme={ButtonTheme.OUTLINE}
        onClick={onDecrement}
      >
        {t('decrement')}
      </Button>
    </div>
  )
}
