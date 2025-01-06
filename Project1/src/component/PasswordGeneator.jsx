import React, { useCallback, useEffect, useRef, useState } from "react";

export default function PasswordGenerator() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPassword = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, charAllowed, PasswordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto p-6 shadow-lg rounded-lg my-8 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold text-center mb-6">
        Password Generator
      </h1>

      {/* Password Display Section */}
      <div className="flex items-center shadow-md rounded-lg overflow-hidden mb-6">
        <input
          type="text"
          value={password}
          ref={passwordRef}
          className="w-full px-4 py-2 bg-gray-700 text-gray-300 focus:outline-none"
          placeholder="Generated Password"
          readOnly
        />
        <button
          onClick={copyPassword}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 transition"
        >
          Copy
        </button>
      </div>

      {/* Controls Section */}
      <div className="space-y-4">
        {/* Length Slider */}
        <div className="flex items-center gap-4">
          <input
            type="range"
            min={6}
            max={15}
            value={length}
            onChange={(e) => setlength(e.target.value)}
            className="w-full cursor-pointer"
          />
          <span className="text-lg font-semibold">Length: {length}</span>
        </div>

        {/* Number Checkbox */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="numberInput"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            className="cursor-pointer h-5 w-5 bg-gray-700 border-gray-500 focus:ring-blue-500"
          />
          <label htmlFor="numberInput" className="text-sm font-medium">
            Include Numbers
          </label>
        </div>

        {/* Character Checkbox */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="charInput"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            className="cursor-pointer h-5 w-5 bg-gray-700 border-gray-500 focus:ring-blue-500"
          />
          <label htmlFor="charInput" className="text-sm font-medium">
            Include Special Characters
          </label>
        </div>
      </div>

      {/* Generate Button */}
      <div className="mt-6 text-center">
        <button
          onClick={PasswordGenerator}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded transition"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}
