import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { AppRouter } from './AppRouter'
import {
  getRouteAbout,
  getRouteAdmin,
  getRouteProfile,
} from '@/shared/const/router'
import { screen } from '@testing-library/react'
import { UserRole } from '@/entities/User'

describe('app/router/AppRouter', function () {
  test('Page should render', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout(),
    })

    const page = await screen.findByTestId('AboutPage')
    expect(page).toBeInTheDocument()
  })

  test('Should redirect when not found page', async () => {
    componentRender(<AppRouter />, {
      route: '/12312',
    })

    const page = await screen.findByTestId('NotFoundPage')
    expect(page).toBeInTheDocument()
  })

  test('Should redirect to Forbidden page', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: { authData: {}, _inited: true },
      },
    })

    const page = await screen.findByTestId('ForbiddenPage')
    expect(page).toBeInTheDocument()
  })

  test('Should allow to Admin Panel', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: { authData: { roles: [UserRole.ADMIN] }, _inited: true },
      },
    })

    const page = await screen.findByTestId('AdminPanelPage')
    expect(page).toBeInTheDocument()
  })

  test('Should Redirect as not authorized user', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1')
    })

    const page = await screen.findByTestId('MainPage')
    expect(page).toBeInTheDocument()
  })
})
