import { useMobileResolution } from "../global"


export const useHomeViewt = () => {
    const { isMobile } = useMobileResolution()
    return {
        isMobile
    }
}
