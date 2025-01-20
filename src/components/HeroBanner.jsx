import HeroImg from "../assets/hero.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoPlayCircleOutline } from "react-icons/io5";
const HeroBanner = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 min-h-screen py-16">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center  gap-2 mb-6">
          <div className="flex items-center justify-center gap-3 p-[4px]    bg-[#FFF7F7] border-[1px] border-[#E63F3A] rounded-full">
            <span className="px-3 py-1 text-sm border-[1px] border-[#E63F3A] text-red-600 rounded-full">
              New feature
            </span>
            <a
              href="#"
              className="text-sm text-[#E63F3A] hover:text-red-400 inline-flex items-center"
            >
              Check out the team dashboard
            </a>
            <IoIosArrowRoundForward color="#E63F3A" />
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-6 text-[#101828]">
          Beautiful analytics to grow smarter
        </h1>

        <p className="text-xl text-[#475467] mb-8 max-w-2xl mx-auto">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button className="inline-flex items-center px-4 py-2 rounded-full gap-2 border-[1px] border-gray-500 text-gray-500 hover:bg-gray-200">
            <IoPlayCircleOutline size={20} />
            Demo
          </button>
          <button className="px-4 py-2 rounded-full bg-[#E63F3A] text-white hover:bg-red-600">
            Sign up
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden" style={{ height: "400px" }}>
        <div className="relative rounded-lg overflow-hidden ">
          <img
            src={HeroImg}
            alt="Example"
            className="w-full object-cover"
            style={{
              height: "100%",
              objectPosition: "top",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
