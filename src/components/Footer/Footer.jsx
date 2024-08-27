"use client"
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


const Footer = () => {
  return (
    <footer dir="rtl" className="bg-navy-900 px-20 py-14 ">
      <div className="flex flex-col md:flex-row md:justify-between md:grid-cols-2 pb-5 mb-5 border-b-[2px] border-navy-800">
        <div className="text-navy-70 flex flex-col gap-6 col-span-1 w-fit">
          <Image src="/LogoGreen.svg" width={60} height={60} />
          <div className="flex flex-col w-fit mb-2">
            <span>support@1001.tv</span>
            <span dir="ltr">+964(780)133-3323</span>
          </div>
          <ul className="flex gap-8 text-2xl text-primary">
            <li className="cursor-pointer"><FaFacebook/></li>
            <li className="cursor-pointer"><FaTiktok/></li>
            <li className="cursor-pointer"><FaInstagram/></li>
            <li className="cursor-pointer"><FaYoutube/></li>
          </ul>
        </div>
        <div className="my-5 flex flex-col gap-2 md:flex-row md:gap-20">
          <div>
            <h4 className="font-ar-600 text-navy-50">بدء الاستخدام</h4>
            <ul>
              <li className="font-ar-400 text-navy-70 cursor-pointer my-3">
                كيف يعمل 1001 ؟
              </li>
              <li className="font-ar-400 text-navy-70 cursor-pointer my-3">
                الحساب
              </li>
              <li className="font-ar-400 text-navy-70 cursor-pointer my-3">
                استرداد كوبون
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-ar-600 text-navy-50">الشركة</h4>
            <ul>
              <li className="font-ar-400 text-navy-70 cursor-pointer my-3">
                من نحن ؟
              </li>
              <li className="font-ar-400 text-navy-70 cursor-pointer my-3">
                الوظائف
              </li>
              <li className="font-ar-400 text-navy-70 cursor-pointer my-3">
                الصحافة
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-ar-600 text-navy-50">الدعم</h4>
            <ul>
              <li className="font-ar-400 text-navy-70 cursor-pointer my-3">
                الأسئلة الشائعة
              </li>
              <li className="font-ar-400 text-navy-70 cursor-pointer my-3">
                مركز الدعم
              </li>
              <li className="font-ar-400 text-navy-70 cursor-pointer my-3">
                اتصل بنا
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4 text-navy-100 font-ar-400 ">
        <div>
          <span>© 2022 - 1001 جميع الحقوق محفوظة</span>
        </div>
        <div className="flex gap-8">
          <span className="cursor-pointer">سياسة الخصوصية</span>
          <span className="cursor-pointer">شروط الاستخدام</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
