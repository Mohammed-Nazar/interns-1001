import React from "react"

const PaymentSuccessful = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center w-full md:w-538px min-h-screen px-6 py-12 md:py-0 mx-auto">
      <div className="flex flex-col items-center mb-8">
        <div className="flex flex-col items-center mb-2">
          <img
            src="/assets/crown_LOGO.svg"
            alt="crown logo for premium subscription"
            className="w-5"
          />
          <img
            src="/assets/1001_White_LOGO.svg"
            alt="1001.tv logo"
            className="w-20 h-10"
          />
        </div>
        <div  className="font-medium text-center text-white text-2xl md:text-3xl mb-8">
          <h2>
            Congratulations! 🎊</h2>
            <h2>Welcome to 1001 TV Premium 👑</h2>
        </div>
        <div className="text-white text-center font-normal text-sm">
          <p>
            Your payment is successful. Enjoy unlimited access to our exclusive,
            ad-free Premium content. Discover a world of top-quality movies and
            series at your fingertips. Happy streaming!
          </p>
        </div>
      </div>
      <div className="w-full px-10">
      <button
        onClick={() => (window.location.href = "/")}
        type="submit"
        className="w-full bg-Green text-NavyN900 font-semibold py-3  rounded-xl hover:bg-opacity-90 transition"
      >
        Start Watching
      </button>
      </div>
      
    </div>
    </>
  )
}

export default PaymentSuccessful
