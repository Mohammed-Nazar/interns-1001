import VoucherPaymentForm from "@/components/payment form/VoucherPaymentForm"
import SubscriptionAgreementNotice from "@/components/subscription agreement notice/SubscriptionAgreementNotice"
import React from "react"

const voucher = () => {
  return (
    <>
      <div className="flex flex-col items-start md:items-center w-full md:w-538px min-h-screen px-6 py-12 mx-auto">
        <div className="flex items-center">
          <img
            src="/assets/Voucher_Presentation.png"
            alt="Voucher Presentation image"
          />
        </div>
        <VoucherPaymentForm />
        <SubscriptionAgreementNotice/>
      </div>
    </>
  )
}

export default voucher
