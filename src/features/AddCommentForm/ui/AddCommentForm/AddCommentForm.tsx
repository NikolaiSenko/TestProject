import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AddCommentForm.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { Button } from 'shared/ui/Button/Button'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  addCommentActions,
  addCommentReducer,
} from '../../model/slice/addCommentSlice'
import { useSelector } from 'react-redux'
import {
  getAddCommentError,
  getAddCommentText,
} from '../../model/selectors/AddCommentSelectors'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentReducer,
}

const AddCommentForm = (props: AddCommentFormProps) => {
  const { className, onSendComment } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const text = useSelector(getAddCommentText)
  const error = useSelector(getAddCommentError)

  const onChangeComment = useCallback(
    (value: string) => {
      dispatch(addCommentActions.setText(value))
    },
    [dispatch]
  )

  const onSendHandler = useCallback(() => {
    onSendComment(text || '')
    onChangeComment('')
  }, [onChangeComment, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          className={cls.input}
          placeholder={t('Enter your comment')}
          value={text}
          onChange={onChangeComment}
        />
        <Button onClick={onSendHandler}>{t('Send')}</Button>
      </div>
    </DynamicModuleLoader>
  )
}

export default AddCommentForm
