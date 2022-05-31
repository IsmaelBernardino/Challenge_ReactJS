import React from "react";

const Inputs = ({text ,add, set}) => {
  return (
    <div className="flex flex-col gap-2">

      <button
        className="bg-slate-400 text-white p-2 rounded-md border-2 border-slate-500"
        onClick={add}
      >
        {text}
      </button>
      <button
        className="bg-red-400 text-white p-2 rounded-md border-2 border-red-500"
        onClick={set}
      >
        Delete
      </button>
    </div>
  );
};

export default Inputs;
