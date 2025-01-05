import React, { useState } from "react";

export default function BackgroundChnage() {
  const [color, setColor] = useState("white");
  return (
    <div>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fiexd flex flex-wrap justify-center inset-x-0 px-2 bottom-12">
          <div className="flex flex-wrap justify-center gap-3 shadow-sm bg-red-800 rounded-3xl p-4">
            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 font-bold rounded-full shadow-lg text-white"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 font-bold rounded-full shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 font-bold rounded-full shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 font-bold rounded-full shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              yellow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
