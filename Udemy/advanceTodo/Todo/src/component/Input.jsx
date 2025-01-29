import React, { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">{label}</label>
      {textarea ? (
        <textarea
          ref={ref}
          className="w-full border border-gray-300 rounded-lg p-2"
          {...props}
        />
      ) : (
        <input
          ref={ref}
          className="w-full border border-gray-300 rounded-lg p-2"
          {...props}
        />
      )}
    </div>
  );
});

export default Input;
