import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

const reducers: ReducersList = {
  profile: profileReducer,
}

export interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ }: ProfilePageProps) => {
    const dispatch = useAppDispatch()

    useEffect(()=>{
      dispatch(fetchProfileData())
    }, [dispatch])
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
    <div className={classNames('', {}, [])}>
        <ProfileCard/>
    </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
