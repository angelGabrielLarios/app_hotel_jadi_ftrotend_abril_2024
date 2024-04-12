import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context"


export const useNavbarAdmin = () => {

    const { logout, user } = useAuth()

    const navigate = useNavigate()
    return {
        logout,
        user,
        navigate
    }
}



