import React from "react";
 
export default function Name({ name }) {
  const myName = name ? name : "Anoymous";
  return (
    <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
      {myName}
    </p>
  );
}