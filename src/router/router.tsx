import { createBrowserRouter, Navigate } from "react-router-dom";
import { BedRoomInfoPage, ErrorTokenPage, HomePage, LoginAdminPage, LoginPage, RecoveryPasswordPage, RegisterPage, ReservationHistory, ReserveRoomPage, ResetPasswordPage } from "../pages";
import { BedroomsAdminView, BedroomsView, HomeView, LocationView, ReservartionsAdmin, WelcomeAdminView } from "../views";
import { getOneBedroomAPI } from "../API";
import { DashboardAdminPage } from "../pages/DashboardAdminPage";
import { PrivateAdminRoute } from "./PrivateAdminRoute";
import { PrivateRoute } from "./PrivateRoute";
import { ReservationTicket } from "../components";



export const router = createBrowserRouter([
    {
        path: `/`,
        element: <HomePage />,
        children: [
            {
                index: true,
                element: <HomeView />
            },
            {
                path: 'bedrooms',
                element: <BedroomsView />

            },
            {
                path: 'location',
                element: <LocationView />

            }
        ]
    },
    {
        path: `/auth`,
        element: <Navigate to={'/auth/login'} />
    },
    {
        path: `/auth/*`,
        element: <Navigate to={'/auth/login'} />
    },
    {
        path: `/auth/login`,
        element: <LoginPage />
    },
    {
        path: `/auth/admin-login`,
        element: <LoginAdminPage />
    },
    {
        path: `/auth/register`,
        element: <RegisterPage />
    },

    {
        path: `/auth/recovery-password`,
        element: <RecoveryPasswordPage />
    },

    {
        path: `/auth/error-token`,
        element: <ErrorTokenPage />
    },

    {
        path: `/auth/reset-password`,
        element: <ResetPasswordPage />
    },
    {
        path: `reserve/:type`,
        element: <ReserveRoomPage />
    },

    {
        path: `bedroom-info/:id`,
        loader: async ({ params }) => {
            const { id } = params as { id: string }
            const bedroom = await getOneBedroomAPI({ id })
            return bedroom
        },
        element: <BedRoomInfoPage />
    },
    {
        path: 'ticket',
        element: <ReservationTicket />

    },
    {
        path: `admin`,
        element: <PrivateAdminRoute>
            <DashboardAdminPage />
        </PrivateAdminRoute>,

        children: [

            {
                index: true,
                element: <PrivateAdminRoute>
                    <WelcomeAdminView />
                </PrivateAdminRoute>
            },
            {
                path: 'reservations',
                element: <PrivateAdminRoute>
                    <ReservartionsAdmin />
                </PrivateAdminRoute>
            },
            {
                path: 'bedrooms',
                element: <PrivateAdminRoute>
                    <BedroomsAdminView />
                </PrivateAdminRoute>
            }
        ]
    },
    {
        path: 'reservation-history',
        element: <PrivateRoute>
            <ReservationHistory />
        </PrivateRoute>
    }




])