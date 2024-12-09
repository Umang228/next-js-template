import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Subscribe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch p-6 rounded-lg">
      {/*  Image  */}
      <div className="flex justify-center items-center h-full w-full">
        <img
          src="/subscribe.webp"
          className="rounded-lg object-cover w-full h-full"
          alt="Subscribe"
        />
      </div>

      {/* Right Content */}
      <div className="bg-pink-50 p-6 rounded-xl flex flex-col justify-center h-full">
        <h2 className="text-2xl font-medium mb-4">
          S'inscrire & économiser <span className="text-blue-300">10%</span>
        </h2>
        <p className="text-gray-600 mb-6">
          Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most
          opportunity didn't. Yet busy any meeting shark light marginalised 4-blocker message. Productize
          corporate nail caught synergy highlights lunch. Company another pushback items dear or any.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <input
            type="email"
            placeholder="john@doe.com"
            className="flex-1 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="bg-blue-300 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition flex items-center gap-2 justify-center w-full sm:w-auto"
          >
            S'INSCRIRE
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
