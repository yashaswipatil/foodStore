const Shimmer = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Grid container */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array(12)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="animate-pulse rounded-2xl bg-white p-4 shadow-md"
            >
              {/* Image placeholder */}
              <div className="h-40 w-full rounded-xl bg-gray-200"></div>

              {/* Text lines */}
              <div className="mt-4 space-y-3">
                <div className="h-4 w-3/4 rounded bg-gray-200"></div>
                <div className="h-3 w-1/2 rounded bg-gray-200"></div>
                <div className="h-3 w-2/3 rounded bg-gray-200"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
