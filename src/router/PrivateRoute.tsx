import { ReactElement } from "react"
import { useAuth } from "../hooks"
import { Navigate } from "react-router-dom"


interface Props {
    children: ReactElement
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const PrivateRoute = ({ children }: Props) => {
    const { user } = useAuth()

    if (!user.isAuth) {

        return <Navigate to={'/'} />
    }

    return children
}
