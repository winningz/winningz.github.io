import React from "react";
 
import { FaJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
 
export default function Skills() {
  return (
    <div className="flex flex-wrap justify-center max-w-2xl mx-auto mt-8">
      <Skill title="JS">
        <FaJs className="text-4xl mx-auto inline-block" />
      </Skill>
      <Skill title="Python">
        <FaPython className="text-4xl mx-auto inline-block" />
      </Skill>
      <Skill title="ReactJS">
        <FaReact className="text-4xl mx-auto inline-block" />
      </Skill>
      <Skill title="AWS">
        <FaAws className="text-4xl mx-auto inline-block" />
      </Skill>
    </div>
  );
}
 
function Skill({ title, children }) {
  return (
    <div className="m-4 w-60 flex-none mx-15 text-center p-5 rounded-xl border-2 border-gray-300 shadow-xl">
      {children}
      <p className="text-xl font-semibold mt-4">{title}</p>
    </div>
  );
}