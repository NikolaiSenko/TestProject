import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/main.svg'
import ProfileIcon from 'shared/assets/icons/profile-icon.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'main page',
    Icon: MainIcon
  },
  {
    path: RoutePath.about,
    text: 'about:about page',
    Icon: AboutIcon
  },
  {
    path: RoutePath.profile,
    text: 'profile:profile page',
    Icon: ProfileIcon
  },
]
