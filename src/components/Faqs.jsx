import { MdAddCircleOutline } from "react-icons/md";
import { LuCircleMinus } from "react-icons/lu";
import bloguser1 from "../assets/blog-1user.png";
import bloguser2 from "../assets/blog-2user.png";
import bloguser3 from "../assets/blog-3user.png";
function Faqs() {
  return (
    <>
      <div className="w-full bg-white py-8 px-4 mt-6">
        {" "}
        {/* Reduced vertical padding */}
        <div className="max-w-4xl mx-auto space-y-4">
          {" "}
          {/* Reduced space between sections */}
          <div className="text-center">
            <h2 className="font-bold leading-tight text-[#101828] sm:text-3xl xl:text-4xl font-pj">
              Frequently asked questions
            </h2>
            <p className="text-base leading-7 text-[#475467] sm:mt-8 font-pj">
              Everything you need to know about the product and billing.
            </p>
          </div>
          {/* FAQ 1 */}
          <details className="group rounded-lg p-4 [&_summary::-webkit-details-marker]:hidden">
            {" "}
            {/* Reduced padding */}
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="font-medium">Is there a free trial available?</h2>
              <span className="relative flex items-center size-5 shrink-0">
                <MdAddCircleOutline
                  className="text-gray-500 group-open:hidden"
                  size={24}
                />
                <LuCircleMinus
                  className="text-gray-500 hidden group-open:block"
                  size={24}
                />
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              Yes, you can try us for free for 30 days. If you want, we’ll
              provide you with a free, personalized 30-minute onboarding call to
              get you up and running as soon as possible.
            </p>
          </details>
          <hr />
          {/* FAQ 2 */}
          <details className="group rounded-lg p-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="font-medium">Can I change my plan later?</h2>
              <span className="relative flex items-center size-5 shrink-0">
                <MdAddCircleOutline
                  className="text-gray-500 group-open:hidden"
                  size={24}
                />
                <LuCircleMinus
                  className="text-gray-500 hidden group-open:block"
                  size={24}
                />
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
          <hr />
          {/* FAQ 3 */}
          <details className="group rounded-lg p-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="font-medium">What is your cancellation policy?</h2>
              <span className="relative flex items-center size-5 shrink-0">
                <MdAddCircleOutline
                  className="text-gray-500 group-open:hidden"
                  size={24}
                />
                <LuCircleMinus
                  className="text-gray-500 hidden group-open:block"
                  size={24}
                />
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciun
            </p>
          </details>
          <hr />
          {/* FAQ 4 */}
          <details className="group rounded-lg p-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="font-medium">How do I change my account email?</h2>
              <span className="relative flex items-center size-5 shrink-0">
                <MdAddCircleOutline
                  className="text-gray-500 group-open:hidden"
                  size={24}
                />
                <LuCircleMinus
                  className="text-gray-500 hidden group-open:block"
                  size={24}
                />
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culaliquid libero nesciun
            </p>
          </details>
        </div>
      </div>
      <div className="max-w-xl mx-auto text-center py-12 px-4">
        <div className="flex justify-center mb-6">
          <div className="flex -space-x-4">
            <img
              src={bloguser1}
              alt="img-1"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <img
              src={bloguser2}
              alt="img-2"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <img
              src={bloguser3}
              alt="img-3"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-3">Still have questions?</h2>

        <p className="text-gray-600 mb-6">
          Can&apos;t find the answer you&apos;re looking for? Please chat to our
          friendly team.
        </p>

        <button className="bg-[#E63F3A] hover:bg-red-600 text-white font-medium px-6 py-2.5 rounded-md transition-colors">
          Get in touch
        </button>
      </div>
    </>
  );
}

export default Faqs;
