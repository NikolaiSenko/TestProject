import AboutIcon from '@/shared/assets/icons/about.svg'
import MainIcon from '@/shared/assets/icons/main.svg'
import ProfileIcon from '@/shared/assets/icons/profile-icon.svg'
import ArticlesIcon from '@/shared/assets/icons/articles.svg'
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/const/router'
import { SidebarItemType } from '../types/sidebar'
import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      text: 'main page',
      Icon: MainIcon,
    },
    {
      path: getRouteAbout(),
      text: 'about:about page',
      Icon: AboutIcon,
    },
  ]

  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData?.id),
        text: 'profile:profile page',
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        text: 'articles:articles',
        Icon: ArticlesIcon,
        authOnly: true,
      }
    )
  }

  return sidebarItemsList
})
