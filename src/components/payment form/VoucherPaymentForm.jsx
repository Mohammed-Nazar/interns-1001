import React, { useState } from "react"
import { FaTimesCircle } from "react-icons/fa"
import { CiCreditCard2 } from "react-icons/ci"

const VoucherPaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("")

  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\D/g, "") // Remove all non-digit characters
    const formatted = cleaned.match(/.{1,4}/g)?.join(" ") || "" // Group digits in blocks of four
    return formatted
  }

  const handleCardNumberChange = (e) => {
    setCardNumber(formatCardNumber(e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle the payment submission logic here
    console.log("Payment submitted")
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="w-full px-0 md:px-10">
        <div className="mb-4 relative">
          <label
            className="block text-white text-sm font-medium mb-2"
            htmlFor="cardNumber"
          >
            Redeem your voucher
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-2 text-white">
              <CiCreditCard2 />
            </span>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="xxxx-xxxx-xxxx-xxxx"
              value={cardNumber}
              onChange={handleCardNumberChange}
              className="w-full pl-8 p-2 text-white bg-NavyN600 border border-NavyN300 focus:outline-none focus:bg-NavyN750 focus:border-Green rounded-lg"
            />
            {cardNumber && (
              <button
                type="button"
                onClick={() => setCardNumber("")}
                className="absolute right-2 bg-transparent"
              >
                <FaTimesCircle className="text-white" />
              </button>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-4 text-center text-white bg-NavyN600 rounded-lg opacity-50"
        >
          Redeem & Subscribe
        </button>
      </form>
    </>
  )
}

export default VoucherPaymentForm
