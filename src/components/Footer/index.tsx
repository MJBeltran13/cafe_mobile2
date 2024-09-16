"use client";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-dark dark:bg-gray-dark">
      <div className="container mx-auto pb-2">
        {/* Footer Bottom */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        <div className="flex flex-wrap pt-2">
          {/* Logo and Social Media */}
          <div className="h-px w-full bg-white dark:bg-white"></div>
          <div className="w-full px-2 ">
            <div className="flex flex-col items-center justify-center  lg:justify-center lg:justify-between">
              <div className="mt-2 text-center">
                <p className="text-sm text-gray-400 dark:text-gray-400">
                  Kalumala Heights, Brgy. Alagao, Bauan, Philippines
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-400">
                  0917 819 9632
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-400">
                  cafeseverino522@gmail.com
                </p>
              </div>
            </div>
            <div className="mb-12 mt-2 text-left">
              <p className=" text-sm text-gray-300 dark:text-gray-300">
                &copy; {new Date().getFullYear()} Café Severino. All rights
                reserved.
              </p>
              {/* <p className="text-sm">Website Gawa ni Mj</p> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
