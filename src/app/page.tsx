// src/app/page.tsx
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import styles from "./animations.module.css";

// Metadata should be defined in a file or context that is server-side only
export const metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="max-w-screen -top-4 mx-auto h-[400px] overflow-hidden lg:h-[700px]">
        <div className="relative ">
          {/* Background Image */}
          <img
            className="w-full object-cover "
            src="/images/cafe_severino_trimmed.jpg"
            alt="Cafe Severino"
          />
        </div>
      </div>

      {/* Content Sections */}
      <div
        className="max-w-screen mx-auto py-12"
        style={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 9%, rgba(0,0,0,0) 93%, rgba(0,0,0,1) 100%), url(/images/wood.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <a href="/page1">
          <button className="relative mr-4 inline-block h-48 w-48  overflow-hidden rounded-lg shadow-lg hover:animate-ping ">
            <img
              className="m-auto h-full w-full object-cover"
              src="https://cdn-icons-png.flaticon.com/512/5470/5470133.png"
              alt="Hot Chocolate with Cookies"
            />
          </button>
        </a>

        <div className="relative mx-4 inline-block h-48 w-48 overflow-hidden rounded-lg shadow-lg">
          <img
            className="m-auto h-full w-full object-cover"
            src="https://cdn-icons-png.flaticon.com/512/2007/2007864.png"
            alt="Hot Chocolate with Cookies"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <a href="/page1">
              {/* <button
                className="absolute bottom-2 mx-auto transform rounded-md border-white bg-white px-4 py-2 font-bold text-black transition-transform hover:scale-105 hover:bg-gray-200"
                style={{ left: "50%", transform: "translateX(-50%)" }}
              >
                LOCATION
              </button> */}
            </a>
          </div>
        </div>

        <div className="relative mx-4 inline-block h-48 w-48 overflow-hidden rounded-lg shadow-lg">
          <img
            className="m-auto h-full w-full object-cover"
            src="https://cdn-icons-png.flaticon.com/512/7662/7662360.png"
            alt="Hot Chocolate with Cookies"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <a href="/page1">
              {/* <button
                className="absolute bottom-2 mx-auto transform rounded-md border-white bg-white px-4 py-2 font-bold text-black transition-transform hover:scale-105 hover:bg-gray-200"
                style={{ left: "50%", transform: "translateX(-50%)" }}
              >
                BOOK NOW
              </button> */}
            </a>
          </div>
        </div>

        <div className="relative mx-4 inline-block h-48 w-48 overflow-hidden rounded-lg shadow-lg">
          <img
            className="m-auto h-full w-full object-cover"
            src="https://cdn-icons-png.flaticon.com/512/3986/3986687.png"
            alt="Hot Chocolate with Cookies"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <a href="/page1">
              {/* <button
                className="absolute bottom-2 mx-auto transform rounded-md border-white bg-white px-4 py-2 font-bold text-black transition-transform hover:scale-105 hover:bg-gray-200"
                style={{ left: "50%", transform: "translateX(-50%)" }}
              >
                GALLERY
              </button> */}
            </a>
          </div>
        </div>
      </div>

      <div className="my-0 grid grid-cols-2 gap-4 bg-stone-300 ">
        <div className="h-full w-full">
          <p className="font-regular p-2  text-center text-sm text-black">
            Severino&lsquo;s Coffee Shop, also known as Cafe Severino @Kalumala
            Heights, is more than just a coffee shop. It&lsquo;s a community
            gathering place where people can connect with nature, enjoy
            delicious coffee, and find their sense of belonging.
          </p>
        </div>
        <div className="relative h-full w-full">
          <img
            className="m-auto h-full w-full object-cover"
            src="/images/coffee_shop.jpg"
            alt="Hot Chocolate with Cookies"
          />
        </div>
      </div>
    </div>
  );
}
