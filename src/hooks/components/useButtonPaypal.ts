import { useEffect, useRef } from "react"


export const useButtonPaypal = ({ amount_value }: { amount_value: number }) => {
  const amountValueRef = useRef(amount_value)
  const modalPaymentSuccessRef = useRef<HTMLDialogElement | null>(null)
  useEffect(() => {
    amountValueRef.current = amount_value
  }, [amount_value])
  return {
    amountValueRef,
    modalPaymentSuccessRef
  }


}

