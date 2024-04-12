import { ReactElement } from "react"
import { useAuth } from "../hooks"
import { Navigate } from "react-router-dom"

interface Props {
    children: ReactElement
}
export const PrivateAdminRoute = ({ children }: Props) => {
    const { user } = useAuth()

    if (user.role !== 'admin') {
        return <Navigate to={'/'} />
    }

    return children
}
