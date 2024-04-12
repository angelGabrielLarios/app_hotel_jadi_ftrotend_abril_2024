import { useEffect } from "react"
import { useAuth } from "../context";
import { useNavigate } from "react-router-dom";


export const useHomePage = () => {
    const { user } = useAuth()
    const navgiate = useNavigate()
    useEffect(() => {
        document.title = `Inicio`;

        if (user.role === 'admin') {
            navgiate('/admin')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

}
