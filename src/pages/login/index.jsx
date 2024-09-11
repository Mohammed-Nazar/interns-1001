import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaGooglePlusG, FaApple } from "react-icons/fa";

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="flex justify-center p-2">
      <div className="bg-black/30 backdrop-blur-lg px-6 py-8 sm:px-10 md:px-16 rounded-2xl shadow-lg w-full max-w-md lg:max-w-lg border border-gray-700">
        <h2 className="font-inter text-white text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
          Login
        </h2>

        <p className="text-white font-inter font-normal text-base sm:text-lg mb-4 text-center">
          Enter your phone number to receive the secret code
        </p>

        <div className="flex items-center border border-white rounded-lg overflow-hidden mb-6">
          <span className="bg-white text-green-500 p-3 font-semibold text-lg">
            +964
          </span>
          <input
            type="text"
            className="bg-transparent flex-1 p-2 text-white focus:outline-none"
            placeholder=""
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <button className="bg-transparent text-white text-lg sm:text-xl w-full p-3 rounded-md font-inter font-semibold border border-Green transition-all transform hover:-translate-y-1 hover:shadow-2xl">
          Continue
        </button>

        <p className="text-white font-inter tracking-tighter font-normal mb-6 mt-12 sm:mt-16 text-center">
          Or login using
        </p>

        <div className="flex flex-wrap gap-1 justify-around mt-4">
          <button className="bg-gradient-to-br from-gray-700 to-gray-900 w-16 sm:w-20 h-14 sm:h-16 p-3 flex items-center justify-center rounded-md transition hover:border hover:border-white">
            <FaFacebookF className="text-white text-xl sm:text-2xl" />
          </button>
          <button className="bg-gradient-to-br from-gray-700 to-gray-900 w-16 sm:w-20 h-14 sm:h-16 p-3 flex items-center justify-center rounded-md transition hover:border hover:border-white">
            <FaGooglePlusG className="text-white text-2xl sm:text-3xl" />
          </button>
          <button className="bg-gradient-to-br from-gray-700 to-gray-900 w-16 sm:w-20 h-14 sm:h-16 p-3 flex items-center justify-center rounded-md transition hover:border hover:border-white">
            <FaApple className="text-white text-xl sm:text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
