import React from "react";
 
export default function Position({ title }) {
  if (title) {
    return (
      <p className="text-xl sm:text-2xl font-semibold text-gray-900">{title}</p>
    );
  } else {
    return null;
  }
}