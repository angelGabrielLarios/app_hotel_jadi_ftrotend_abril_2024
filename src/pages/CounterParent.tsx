import { useState } from "react"
import { CounterChildren } from "./CounterChildren"


export const CounterParent = () => {

    const [counter, setCounter] = useState(0)


    return (
        <>
            <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>add</button>
            <p>CounterParent {counter}</p>
            <CounterChildren counter={counter} />

        </>
    )
}
