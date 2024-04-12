import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { AuthProvider } from './context/auth/AuthProvider'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { ActiveReservationProvider } from './context/isActiveReservation'

const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID
ReactDOM.createRoot(document.getElementById('root')!).render(
  <PayPalScriptProvider
    options={{
      clientId,
      currency: 'MXN'
    }}
  >
    <AuthProvider>

      <ActiveReservationProvider>
        <RouterProvider
          router={router}
        />
      </ActiveReservationProvider>

    </AuthProvider>
  </PayPalScriptProvider>

)
