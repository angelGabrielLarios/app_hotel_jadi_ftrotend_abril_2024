
import { useAuth } from "../context";


export const useNavbar = () => {
    const { user } = useAuth()



    return {
        user
    }


}
