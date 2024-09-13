"use client";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-dark">
      <div className="container mx-auto pb-2">
        {/* Footer Bottom */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>

        <div className="flex flex-wrap pt-2">
          {/* Logo and Social Media */}
          <div className="w-full px-2 ">
            <div className="flex flex-col items-center justify-center  lg:justify-center lg:justify-between">
              {/* Social Media Links */}
              <div className="mt-2 flex space-x-4 md:mt-0">
                <a
                  href="https://www.facebook.com"
                  className="text-blue-600 hover:text-blue-400"
                  aria-label="Facebook"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://www.twitter.com"
                  className="text-blue-400 hover:text-blue-300"
                  aria-label="Twitter"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://www.instagram.com"
                  className="text-pink-600 hover:text-pink-400"
                  aria-label="Instagram"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  className="text-blue-700 hover:text-blue-500"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Café Severino. All rights
                reserved.
              </p>
              <p className="text-sm">Website Gawa ni Mj</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
