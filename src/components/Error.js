import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
      {/* 404 Visual */}
      <div className="relative mb-4">
        <span className="select-none text-[120px] font-bold leading-none text-slate-200 md:text-[180px]">
          404
        </span>

        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl">
          🍽️
        </span>
      </div>

      {/* Heading */}
      <h1 className="mb-3 text-2xl font-semibold tracking-tight text-slate-800 md:text-4xl">
        Oops! Page <span className="italic text-orange-500">not found.</span>
      </h1>

      {/* Description */}
      <p className="mb-8 max-w-md text-sm leading-relaxed text-slate-500">
        Looks like this page got lost in the kitchen. Let’s get you back on
        track.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/")}
        className="rounded-full bg-orange-500 px-6 py-2 text-sm font-medium text-white transition hover:bg-orange-600"
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorComponent;
