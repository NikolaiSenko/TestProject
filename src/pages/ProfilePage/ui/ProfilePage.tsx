import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileError,
} from 'entities/Profile'
import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page/Page'

const reducers: ReducersList = {
  profile: profileReducer,
}

export interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({}: ProfilePageProps) => {
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()
  const readonly = useSelector(getProfileReadonly)
  const formData = useSelector(getProfileForm)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileLoading)
  const validateErrors = useSelector(getProfileValidateErrors)
  const { id } = useParams<{ id: string }>()

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('Server error'),
    [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Name and surname'),
    [ValidateProfileError.NO_DATA]: t('Data is missed'),
  }

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ firstname: value || '' }))
    },
    [dispatch]
  )

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }))
    },
    [dispatch]
  )

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          age: Number(value?.replace(/\D+/, '') || 0),
        })
      )
    },
    [dispatch]
  )

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }))
    },
    [dispatch]
  )

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }))
    },
    [dispatch]
  )

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }))
    },
    [dispatch]
  )

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }))
    },
    [dispatch]
  )

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }))
    },
    [dispatch]
  )

  useInitialEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      if (id) {
        dispatch(fetchProfileData(id))
      }
    }
  })

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames('', {}, [])}>
        <ProfilePageHeader />
        {validateErrors?.length &&
          validateErrors.map((err) => (
            <Text
              theme={TextTheme.ERROR}
              text={validateErrorTranslates[err]}
              key={err}
            />
          ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeAge={onChangeAge}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCountry={onChangeCountry}
          onChangeCurrency={onChangeCurrency}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
