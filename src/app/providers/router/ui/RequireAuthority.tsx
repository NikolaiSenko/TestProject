import { useSelector } from 'react-redux'
import { getUserRoles, UserRole } from '@/entities/User'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from '@/shared/const/router'
import { useMemo } from 'react'

interface RequireAuthorityProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export function RequireAuthority({ children, roles }: RequireAuthorityProps) {
    const location = useLocation()
    const userRoles = useSelector(getUserRoles)

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true
        }

        return roles.some((requiredRole) => {
            const hasRole = userRoles?.includes(requiredRole)
            return hasRole
        })
    }, [roles, userRoles])

    if (!hasRequiredRoles) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />
    }

    return children
}
