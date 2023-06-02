import AboutIcon from '@/shared/assets/icons/about.svg'
import MainIcon from '@/shared/assets/icons/main.svg'
import ProfileIcon from '@/shared/assets/icons/profile-icon.svg'
import ArticlesIcon from '@/shared/assets/icons/articles.svg'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { SidebarItemType } from '../types/sidebar'
import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: RoutePath.main,
      text: 'main page',
      Icon: MainIcon,
    },
    {
      path: RoutePath.about,
      text: 'about:about page',
      Icon: AboutIcon,
    },
  ]

  if (userData) {
    sidebarItemsList.push(
      {
        path: `${RoutePath.profile}${userData?.id}`,
        text: 'profile:profile page',
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        text: 'articles:articles',
        Icon: ArticlesIcon,
        authOnly: true,
      }
    )
  }

  return sidebarItemsList
})
