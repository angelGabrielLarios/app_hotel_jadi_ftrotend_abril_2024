
import { Dispatch, SetStateAction, createContext } from "react";

export interface ActiveReservationTypeContext {
    isActiveReservationGlobal: boolean
    setIsActiveReservationGlobal: Dispatch<SetStateAction<boolean>>
}


export const ActiveReservationContext = createContext<ActiveReservationTypeContext>({
    isActiveReservationGlobal: false,
    setIsActiveReservationGlobal: () => { }
});

