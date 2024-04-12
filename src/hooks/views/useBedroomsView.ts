import { useEffect, useState } from "react";
import { IBedroomResponse, getBedroomsAPI } from "../../API";

export const useBedroomsView = () => {
    const [bedrooms, setBedrooms] = useState<IBedroomResponse[]>([])
    useEffect(() => {
        document.title = `Inicio`;
    }, [])

    useEffect(() => {
        (async () => {
            try {
                const newBedrooms = await getBedroomsAPI()
                setBedrooms(newBedrooms)
            } catch (error) {
                console.log(error)
            }
        })();
    }, [])


    return {
        bedrooms
    }

}
