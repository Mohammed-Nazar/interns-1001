"use client";

import { insertHyphens } from "@/reuseableFunctions/insertHyphens";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const RedeemVoucher = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [voucherCode, setVoucherCode] = useState("");
  const [button, setButton] = useState(true);

  const content = {
    title:
      "استرد كوبونك و اكتشف عالمًا لا نهائيًا من الترفيه مع 1001 Premium TV",
    perks: [
      { text: "بدون إعلانات ، بدون إنقطاع." },
      { text: "اكتشف المحتوى قبل الكل ، كن أول من يشاهد." },
      { text: "استمتع بأروع عروض 1001 الحصرية." },
    ],
    links: {
      privacyPolicy: "/privacy-policy",
      termsAndConditions: "/terms-and-conditions",
      support: "/contact",
    },
  };

  const getVoucherCode = (e) => {
    const text = insertHyphens(e.target.value);
    setVoucherCode(text);
    setButton(text.length > 0 ? false : true);
  };

  return (
    <main
      dir="rtl"
      className="py-10 grid grid-cols-1 md:grid-cols-2 md:pt-16 bg-subscription-gradient bg-cover object-cover min-h-screen"
    >
      <section className="md:order-last relative  mt-10 md:mt-5 z-0">
        <Image
          draggable={false}
          src="/Voucher-Presentation.svg"
          alt="Voucher Presentation"
          width={100}
          height={100}
          className="w-10/12 md:w-full  md:absolute left-28 z-0"
        />
      </section>
      <section className="mx-4 md:mr-10 mt-16 w-10/12 md:mt-0 md:w-8/12 text-white">
        <div id="subscription-title">
          <div className="flex flex-col items-center w-fit">
            <Image
              draggable={false}
              src="/Premium.svg"
              alt="Premium image"
              className="w-3.5"
              width={100}
              height={100}
            />
            <Image
              draggable={false}
              src="/Logo.svg"
              alt="1001 Logo"
              className="w-14"
              width={100}
              height={100}
            />
          </div>

          <h1 className="font-ar-600 text-3xl mt-2">{content.title}</h1>
        </div>
        <div className="my-6">
          <ul className="font-ar-400">
            {content.perks.map((i, index) => (
              <li key={index} className="relative my-4 flex items-center">
                <span className="bg-primary inline-flex items-center p-2 rounded-full ml-2">
                  <Image
                    draggable={false}
                    src="/correct-signal.svg"
                    width={7}
                    height={7}
                    alt="Correct Signal w-5 h-5"
                  />
                </span>
                <span className="text-xl">{i.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="w-full">
            <h2 className="font-semibold text-xl font-ar-500">
              ادخل رمز الكوبون
            </h2>
            <div
              className={`my-1 flex items-center border-[1px] rounded-2xl px-2 bg-navy-600 transition duration-200 ease-linear ${
                isFocused ? "border-[#13CB5C]" : "border-navy-300/40"
              }`}
            >
              <svg
                width="24"
                height="19"
                viewBox="0 0 24 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.25 0.75H20.75C22.1172 0.75 23.25 1.88281 23.25 3.25V15.75C23.25 17.1562 22.1172 18.25 20.75 18.25H3.25C1.84375 18.25 0.75 17.1562 0.75 15.75V3.25C0.75 1.88281 1.84375 0.75 3.25 0.75ZM4.5 13.875C4.5 14.2266 4.77344 14.5 5.125 14.5H7.625C7.9375 14.5 8.25 14.2266 8.25 13.875C8.25 13.5625 7.9375 13.25 7.625 13.25H5.125C4.77344 13.25 4.5 13.5625 4.5 13.875ZM9.5 13.875C9.5 14.2266 9.77344 14.5 10.125 14.5H15.125C15.4375 14.5 15.75 14.2266 15.75 13.875C15.75 13.5625 15.4375 13.25 15.125 13.25H10.125C9.77344 13.25 9.5 13.5625 9.5 13.875Z"
                  fill="#757683"
                ></path>
              </svg>
              <input
                name="code"
                type="text"
                placeholder="XXXX-XXXX-XXXX"
                autoComplete="off"
                className="w-full placeholder:text-navy-300 px-2 h-[56px] bg-transparent tracking-wider rounded-xl outline-none focus:outline-none transition duration-300 ease-linear focus:select-text"
                dir="ltr"
                onChange={getVoucherCode}
                value={voucherCode}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <div
                class={`${voucherCode.length > 0 ? "visible" : "hidden"}`}
                onClick={() => setVoucherCode("")}
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 20.5C4.45312 20.5 0 16.0469 0 10.5C0 4.99219 4.45312 0.5 10 0.5C15.5078 0.5 20 4.99219 20 10.5C20 16.0469 15.5078 20.5 10 20.5ZM6.83594 7.33594C6.44531 7.72656 6.44531 8.3125 6.83594 8.66406L8.67188 10.5L6.83594 12.3359C6.44531 12.7266 6.44531 13.3125 6.83594 13.6641C7.1875 14.0547 7.77344 14.0547 8.125 13.6641L9.96094 11.8281L11.7969 13.6641C12.1875 14.0547 12.7734 14.0547 13.125 13.6641C13.5156 13.3125 13.5156 12.7266 13.125 12.3359L11.2891 10.5L13.125 8.66406C13.5156 8.3125 13.5156 7.72656 13.125 7.33594C12.7734 6.98438 12.1875 6.98438 11.7969 7.33594L9.96094 9.17188L8.125 7.33594C7.77344 6.98438 7.1875 6.98438 6.83594 7.33594Z"
                    fill="#757683"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <button
                disabled={button}
                type="button"
                class="w-full h-[56px] disabled:bg-navy-600 disabled:text-navy-400 p-6 flex items-center justify-center rounded-2xl text-base font-semibold bg-primary hover:bg-primary/90 "
              >
                <div class="flex gap-1">استمر ️</div>
              </button>
            </div>
          </div>
          <div className="my-3">
            <p className="text-navy-70 text-xs">
              باسترداد الكوبون، أنت توافق على
              <a href={content.links.privacyPolicy} className="text-primary">
                &nbsp;سياسة الخصوصية&nbsp;
              </a>
              و
              <a
                href={content.links.termsAndConditions}
                className="text-primary"
              >
                &nbsp;شروط خدمة&nbsp;
              </a>
              الخاصة بـ1001. إذا كنت بحاجة إلى أي مساعدة في استرداد الكوبون،
              يُرجى
              <a href={content.links.support} className="text-primary">
                &nbsp;الاتصال بفريق الدعم&nbsp;
              </a>
              الخاص بنا.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RedeemVoucher;
