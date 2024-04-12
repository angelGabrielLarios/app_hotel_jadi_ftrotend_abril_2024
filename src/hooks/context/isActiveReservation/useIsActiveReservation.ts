import { useContext } from "react";
import { ActiveReservationContext } from "../../../context/isActiveReservation";


export const useIsActiveReservation = () => {
    const context = useContext(ActiveReservationContext);
    if (!context) {
        throw new Error('useIsActiveReservation must be used within an useIsActiveReservationProvider');
    }
    return context;
}
