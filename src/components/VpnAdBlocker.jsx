import Image from "next/image";
import Link from "next/link";
import React from "react";

const VpnAdBlocker = () => {
  return (
    <main className="bg-main backdrop-blur-xl object-cover h-screen flex justify-center items-center relative">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <Image
        src="/BlurredBrokenTv.svg"
        height={100}
        width={100}
        className="w-11/12 absolute z-0 blur-[2px] md:w-5/12"
      />

      <div className="flex justify-center items-center z-20 flex-col mx-10 md:mb-10">
        <h1 className="text-primary font-bold text-2xl inter-600 md:text-3xl">
          Oops! Something’s wrong
        </h1>
        <p className="text-center mt-4 text-white font-semibold inter-600 md:w-5/12">
          Heads Up! For the best streaming experience, please disable any VPN or
          ad-blocker extensions. This helps ensure all content display
          correctly. Thanks for your understanding!
        </p>
        <div className="my-4 flex gap-x-2">
          <button className="px-6 py-2 border-[2px] border-primary rounded-xl text-primary inter-600">
            Refresh
          </button>
          <Link href="/">
            <button className="bg-primary px-6 py-2 rounded-xl font-light text-navy-800 inter-600">
              Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default VpnAdBlocker;
