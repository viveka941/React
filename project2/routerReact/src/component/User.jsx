import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-center font-bold text-7xl bg-gray-600 p-4">User : {id}</h1>
    </div>
  );
}
