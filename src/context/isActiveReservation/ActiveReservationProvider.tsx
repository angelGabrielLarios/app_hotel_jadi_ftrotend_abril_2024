import { ReactElement, useState } from "react";
import { ActiveReservationContext } from "./ActiveReservationContext";


export const ActiveReservationProvider = ({ children }: { children: ReactElement }) => {


    const [isActiveReservationGlobal, setIsActiveReservationGlobal] = useState(false)



    return (
        <ActiveReservationContext.Provider value={{ isActiveReservationGlobal, setIsActiveReservationGlobal }}>
            {children}
        </ActiveReservationContext.Provider>
    );
};