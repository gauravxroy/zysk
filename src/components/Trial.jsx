const Trial = () => {
  return (
    <div className="max-w-2xl mx-auto text-center py-16 px-4">
      <h2 className="text-3xl font-bold mb-4">Start your free trial</h2>

      <p className="text-gray-600 mb-8">
        Join over 4,000+ startups already growing with Untitled.
      </p>

      <div className="flex justify-center gap-4">
        <button className="px-6 py-2.5 text-gray-600 font-medium border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
          Learn more
        </button>
        <button className="px-6 py-2.5 text-white font-medium bg-[#E63F3A] rounded-md hover:bg-red-600 transition-colors">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Trial;
