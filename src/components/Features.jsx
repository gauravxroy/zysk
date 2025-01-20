import Icon1 from "../assets/icon-1.png";
import Icon2 from "../assets/icon-2.png";
import Icon3 from "../assets/icon-3.png";
import Icon4 from "../assets/icon-4.png";
import Icon5 from "../assets/icon-5.png";
import Icon6 from "../assets/icon-6.png";
const Features = () => {
  return (
    <section className="py-10 bg-white sm:py-16   lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-6">
        <div className="text-center ">
          <h3 className="text-[#E63F3A] font-medium">Features</h3>
          <h2 className="text-2xl font-bold leading-tight text-[#101828] sm:text-4xl xl:text-5xl font-pj">
            Analytics that feels like it’s from the future
          </h2>
          <p className="text-base leading-7  text-[#475467] sm:mt-8 font-pj">
            Powerful, self-serve product and growth analytics to help you <br />
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-10 gap-y-10 md:grid-cols-3 md:gap-0 xl:mt-10">
          <div className="md:p-8 lg:p-14">
            <img
              src={Icon6}
              alt=""
              className="border-[1px]  border-gray-300 rounded-md p-1 mx-auto"
            />
            <h3 className="mt-12 text-xl font-bold text-[#101828] font-pj">
              Share team inboxes
            </h3>
            <p className="mt-5 text-base text-[#475467] font-pj">
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 ">
            <img
              src={Icon5}
              alt=""
              className="border-[1px]  border-gray-300 rounded-md p-1 mx-auto"
            />

            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Deliver instant answers
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              An all-in-one customer service platform that helps you balance
              everything your customers need to be happy.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 ">
            <img
              src={Icon4}
              alt=""
              className="border-[1px]  border-gray-300 rounded-md p-1 mx-auto"
            />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Manage your team with reports
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Measure what matters with Untitled’s easy-to-use reports. You can
              filter, export, and drilldown on the data in a couple clicks.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 ">
            <img
              src={Icon3}
              alt=""
              className="border-[1px]  border-gray-300 rounded-md p-1 mx-auto"
            />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Connect with customers
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Solve a problem or close a sale in real-time with chat. If no one
              is available, customers are seamlessly routed to email without
              confusion.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 ">
            <img
              src={Icon2}
              alt=""
              className="border-[1px]  border-gray-300 rounded-md p-1 mx-auto"
            />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Connect the tools you already use
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Explore 100+ integrations that make your day-to-day workflow more
              efficient and familiar. Plus, our extensive developer tools.
            </p>
          </div>

          <div className="md:p-8 lg:p-14">
            <img
              src={Icon1}
              alt=""
              className="border-[1px]  border-gray-300 rounded-md p-1 mx-auto"
            />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Our people make the difference
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              We’re an extension of your customer service team, and all of our
              resources are free. Chat to our friendly team 24/7 when you need
              help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
