import { useEffect } from "react"


export const useHomePage = () => {

    useEffect(() => {
        document.title = `Inicio`;
    }, [])

}
