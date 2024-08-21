import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <nav className="bg-NavyN900 w-full h-538px flex flex-col lg-flex-row lg:justify-between justify-center items-center py-10 px-4">
        <div className="flex flex-col items-center justify-center gap-6 w-full h-346px">
          <div className="flex flex-col items-center w-full gap-5">
            <div className="flex items-center justify-center w-16 h-12">
              <img
                src="/assets/1001_LOGO.svg"
                alt="1001.tv logo"
                className="w-16 h-auto"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-NavyN70">+964 (780) 133-3323</p>
              <p className="text-NavyN70">support@1001.tv</p>
            </div>

            <div className="flex flex-row items-center justify-between gap-8 text-Green text-xl">
              <FaFacebook />
              <FaInstagram />
              <FaTiktok />
              <FaYoutube />
            </div>
          </div>

          {/** */}
          <div>
            <ul className="text-white flex flex-col items-center gap-6">
              <li>
                <Link href="en/support">Support</Link>
              </li>
              <li>
                <Link href="en/faq">FAQ</Link>
              </li>
              <li>
                <Link href="en/support-center">Support Center</Link>
              </li>
              <li>
                <Link href="en/contact-us">Contact us</Link>
              </li>
            </ul>
          </div>

          <hr className="my-4 border-NavyN70 w-full" />

          <div className="flex flex-col items-center justify-center">
            <p className="text-NavyN600">© 2022 - 1001 All rights reserved.</p>
            <div>
              <ul className="flex flex-row gap-6 text-NavyN600">
                <li>
                  <Link href="en/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="terms-condition">Terms Condition</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Footer;
