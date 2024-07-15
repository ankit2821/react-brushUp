import React from "react";
import { useState } from "react";

function BgChanger() {
  const [background, setBackground] = useState("#002541");

  const handleBackground = (e) => {
    console.log(e.target.value);
    setBackground(e.target.value);
  };
  return (
    <>
      <div
        className="flex justify-center h-screen content-end items-end pb-10  w-full"
        style={{ backgroundColor: background }}
      >
        <div className=" flex justify-between content-center w-3/4 bg-white h-fit align-middle py-3 px-2 gap-4 rounded">
          <button
            value="#ef4444"
            onClick={handleBackground}
            className="button w-full h-10 rounded-md p-2 bg-red-500 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            Red
          </button>
          <button
            value="#3b82f6"
            onClick={handleBackground}
            className="button w-full h-10  rounded-md p-2 bg-blue-500 text-gray-950 over:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            Blue
          </button>
          <button
            value="#22c55e"
            onClick={handleBackground}
            className="button w-full h-10  rounded-md p-2 bg-green-500 text-gray-950 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            Green
          </button>
          <button
            value="#8b5cf6"
            onClick={handleBackground}
            className="button w-full h-10  rounded-md p-2 bg-violet-500 text-gray-950 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            Violet
          </button>
          <button
            value="#6366f1"
            onClick={handleBackground}
            className="button w-full h-10  rounded-md p-2 bg-indigo-500 text-gray-950 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            Indigo
          </button>
          <button
            value="#eab308"
            onClick={handleBackground}
            className="button w-full h-10  rounded-md p-2 bg-yellow-500 text-gray-950 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            Yellow
          </button>
          <button
            value="#f97316"
            onClick={handleBackground}
            className="button w-full h-10  rounded-md p-2 bg-orange-500 text-gray-950 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            Orange
          </button>
          <button
            value="#a855f7"
            onClick={handleBackground}
            className="button w-full h-10  rounded-md p-2 bg-purple-500 text-gray-950 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            Purple
          </button>
        </div>
      </div>
    </>
  );
}

export default BgChanger;
