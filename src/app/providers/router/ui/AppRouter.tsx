import { Suspense, memo, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  AppRouteProps,
  routeConfig,
} from '@/shared/config/routeConfig/routeConfig'
import { PageLoader } from '@/widgets/PageLoader'
import { RequireAuth } from './RequireAuth'
import { RequireAuthority } from './RequireAuthority'

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    )

    const elementAuthCondition = route.authOnly ? (
      <RequireAuth>
        <RequireAuthority roles={route.roles}>{element}</RequireAuthority>
      </RequireAuth>
    ) : (
      element
    )

    return (
      <Route
        key={route.path}
        path={route.path}
        element={elementAuthCondition}
      />
    )
  }, [])

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
})
