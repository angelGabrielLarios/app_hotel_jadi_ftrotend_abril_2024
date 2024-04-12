import { useState } from "react"


export const useLocationView = () => {

    const [isLoadingMap, setIsLoadingMap] = useState(true)

    const loadMap = () => setIsLoadingMap(false)

    return {
        loadMap,
        isLoadingMap
    }
}
