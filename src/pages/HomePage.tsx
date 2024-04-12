import { Outlet } from "react-router-dom"
import { Footer, Navbar } from "../components"
import { useHomePage } from "../hooks"


export const HomePage = () => {

    useHomePage()
    return (
        <>
            <Navbar />


            <Outlet />



            <Footer />

        </>
    )
}
