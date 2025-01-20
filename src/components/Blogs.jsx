import blog1 from "../assets/blog-1.png";
import blog2 from "../assets/blog-2.png";
import blog3 from "../assets/blog-3.png";
import bloguser1 from "../assets/blog-1user.png";
import bloguser2 from "../assets/blog-2user.png";
import bloguser3 from "../assets/blog-3user.png";
import { GoArrowUpRight } from "react-icons/go";
const Blog = () => {
  return (
    <>
      {" "}
      <div className="px-8 py-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-[#E63F3A] text-sm">Our blog</span>
            <h2 className="text-2xl font-semibold mt-1">Lastest blog posts</h2>
            <p className="text-gray-600 mt-2">
              Tool and strategies modern teams need to help their companies
              grow.
            </p>
          </div>
          <button className="bg-[#E63F3A] text-white px-4 py-2 rounded-md hover:bg-red-600">
            View all posts
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group cursor-pointer ">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={blog1}
                alt="UX review presentations"
                className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="text-[#E63F3A] text-sm">Design</span>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold mt-2">
                  UX review presentations
                </h3>
                <GoArrowUpRight size={24} color="gray" />
              </div>
              <p className="text-gray-600 mt-2">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
              <div className="flex items-center  gap-3 mt-4">
                <img
                  src={bloguser1}
                  alt="Olivia Rhye"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium">Olivia Rhye</span>
                <span className="text-sm text-gray-500">20 Jan 2024</span>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={blog2}
                alt="Migrating to Linear 101"
                className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="text-[#E63F3A] text-sm">Product</span>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold mt-2">
                  Migrating to Linear 101
                </h3>
                <GoArrowUpRight size={24} color="gray" />
              </div>
              <p className="text-gray-600 mt-2">
                Linear helps streamline software projects, sprints, tasks, and
                bug tracking. Here&apos;s how to get started.
              </p>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={bloguser2}
                  alt="Phoenix Baker"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium">Phoenix Baker</span>
                <span className="text-sm text-gray-500">19 Jan 2024</span>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={blog3}
                alt="Building your API stack"
                className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="text-[#E63F3A] text-sm">
                Software Engineering
              </span>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold mt-2">
                  Building your API stack
                </h3>
                <GoArrowUpRight size={24} color="gray" />
              </div>
              <p className="text-gray-600 mt-2">
                The rise of RESTful APIs has been met by a rise in tools for
                creating, testing, and managing them.
              </p>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={bloguser3}
                  alt="Lana Steiner"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium">Lana Steiner</span>
                <span className="text-sm text-gray-500">18 Jan 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
