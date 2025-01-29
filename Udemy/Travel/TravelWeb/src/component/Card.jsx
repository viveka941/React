import React from "react";

export default function Card({ url, title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all">
      <img src={url} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}
