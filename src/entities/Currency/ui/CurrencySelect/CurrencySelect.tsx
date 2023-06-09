import { memo, useCallback } from 'react'
import { Currency } from '../../model/types/currency'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Select } from '@/shared/ui/Select'
import { ListBox } from '@/shared/ui/Popups'

export interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
]
export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, value, onChange, readonly } = props
  const { t } = useTranslation('profile')

  const onChangeHandler = useCallback((value: string) =>{
    onChange?.(value as Currency)
  },[onChange])
 
  return (
    <ListBox
      className={classNames('', {}, [className])}
      label={t('Currency')}
      items={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
      direction='top right'
    />
  )
})
