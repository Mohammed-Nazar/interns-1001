"use client";
import Link from "next/link"
import React, { useState } from "react"
import {IoCloseSharp } from "react-icons/io5"
import ModalOTP from "./ModalOTP";

const LoginModal = () => {
    const [number, setNumber] = useState("")
    const [showOTP, setShowOTP] = useState(false)

    const getNumber = (e) => {
        const input = e.target.value.replace(/\D/g, "")
        setNumber(input)
    }

    const sendOTP = () => {
        setShowOTP(true)
    }
  return (
    <>
    {showOTP && <ModalOTP tel={number} />}
    <dialog
        dir="rtl"
      className={`fixed backdrop-blur-3xl top-0 left-0 bottom-0 right-0 w-[90vw] backdrop:backdrop-blur-[4px] rounded-3xl backdrop:bg-navy-900/70 bg-navy-700 text-white backdrop:w-screen backdrop:h-screen sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl max-h-[60vh] outline-none focus:outline-none sm:w-[438px] m-auto p-6 z-40`}
      open={!showOTP}
    >
      <div>
        <section className="relative">
          <div className="overflow-hidden transition-transform duration-200 ease-linear">
           <div className="flex justify-between">
           <h2 className="text-xl font-semibold">
              ابدأ الآن للحصول إلى خدمة مميزة
            </h2>
            <div>
            <Link href='/'>

                <IoCloseSharp className="text-2xl"/>
            </Link>
            </div>
           </div>
            <p className="py-4">
              أدخل رقم هاتفك للدخول أو التسجيل. استرد كوبونك فوراً و اكتشف محتوى
              مميز الآن!
            </p>
            <div dir="ltr" className="flex items-center justify-between direction-ltr gap-x-2">
              <div className="flex-shrink-0 w-[88px] h-[56px] border-2 border-navy-300 bg-navy-600 rounded-2xl">
                <div className="custom-select false border-navy-750">
                  <span
                    className="w-[88px] h-[56px] flex items-center justify-center gap-x-2"
                    type="button"
                  >
                    <span
                      className="w-8 h-8 bg-contain bg-no-repeat mt-2.5"
                      style={{
                        backgroundImage:
                          'url("https://flagcdn.com/w40/iq.png")',
                      }}
                    ></span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.10156 15.1484L2.85156 8.89844C2.34375 8.42969 2.34375 7.60938 2.85156 7.14062C3.32031 6.63281 4.14062 6.63281 4.60938 7.14062L10 12.4922L15.3516 7.14062C15.8203 6.63281 16.6406 6.63281 17.1094 7.14062C17.6172 7.60938 17.6172 8.42969 17.1094 8.89844L10.8594 15.1484C10.3906 15.6562 9.57031 15.6562 9.10156 15.1484Z"
                        fill="#757683"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="w-full flex-shrink-1">
                <div className="w-full">
                  <h2 className="font-semibold"></h2>
                  <div className="my-1 flex items-center border-2 rounded-2xl px-2 bg-navy-600 border-navy-300/40 transition duration-200 ease-linear border-navy-300">
                    <input
                      name="number"
                      type="tel"
                      placeholder="رقم الهاتف"
                      autoComplete="off"
                      className="w-full placeholder:text-navy-300 px-2 h-[56px] bg-transparent tracking-wider rounded-xl outline-none focus:outline-none transition duration-300 ease-linear focus:select-text"
                      value={number}
                        onChange={getNumber}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                disabled={number.length < 10 || number.length > 11}
                onClick={sendOTP}
                type="button"
                className={`w-full disabled:bg-navy-600 disabled:border-navy-600 disabled:text-navy-400 h-[56px] p-6 flex items-center justify-center rounded-2xl text-base font-semibold bg-primary hover:bg-primary/90}`}
              >
                <div className="flex gap-1">استمر</div>
              </button>
            </div>
            <p className="text-navy-30 text-sm text-center leading-relaxed pt-2 my-2">
              بالتسجيل، أنت توافق على
              <a
                className="text-primary hover:underline cursor-pointer text-xs font-semibold"
                target="_blank"
                href="/terms-and-conditions"
              >
                &nbsp;شروط الخدمة 
              </a>
              &nbsp; & &nbsp;
              <a
                className="text-primary hover:underline cursor-pointer text-xs font-semibold"
                target="_blank"
                href="/privacy-policy"
              >
                
                سياسة الخصوصية 
              </a>
              <span> الخاصة بـ1001.</span>
            </p>
          </div>
        </section>
      </div>
    </dialog>
    </>
  )
}

export default LoginModal
