import { useState } from "react"


export const useDashboardAdminPage = () => {

    const [isShowMenu, setIsShowMenu] = useState(true)

    const toogleShowMenu = () => setIsShowMenu(!isShowMenu)
    return {
        isShowMenu,
        toogleShowMenu
    }
}
