import React from "react"
import { UserContext } from "../Context/UserContext"
import { useContext } from "react"


const SuccessLoginModal = () => {
    const { user, setUser } = useContext(UserContext)


    const redeemVoucher = () => {
        setUser(true)
    }
  return (
    <dialog
      dir="rtl"
      className="fixed backdrop-blur-3xl top-0 left-0 bottom-0 right-0 w-[90vw] backdrop:backdrop-blur-[4px] rounded-3xl backdrop:bg-navy-900/70 bg-navy-700 text-white backdrop:w-screen backdrop:h-screen sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl max-h-[80vh] outline-none focus:outline-none sm:w-[438px] m-auto p-6 z-40"
      open
    >
      <div>
        <section className="relative">
          <div className="overflow-hidden transition-transform duration-200 ease-linear">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold font-ar-600">
                مرحبًا بك في 1001
              </h2>
            </div>
            <p className="py-4 font-ar-300">
              لقد سجلت دخولك الآن بنجاح! استرد كوبونك وافتح عالمًا من الترفيه.
              خطوة واحدة متبقية للبدء في الاستمتاع بمحتوى 1001 الحصري.
            </p>

            <div className="mb-2">
              <button
              onClick={redeemVoucher}
                type="button"
                className={`w-full h-[56px] p-6 flex items-center justify-center rounded-2xl text-base font-semibold bg-primary hover:bg-primary/90}`}
              >
                <div className="flex gap-1 text-navy-800 font-ar-600 text-lg">استرد كوبونك الآن</div>
              </button>
            </div>
          </div>
        </section>
      </div>
    </dialog>
  )
}

export default SuccessLoginModal
