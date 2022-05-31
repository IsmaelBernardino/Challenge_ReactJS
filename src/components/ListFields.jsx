import React from "react";
import data from "../data.json";

const ListFields = () => {
  return (
    <div className="flex flex-col bg-slate-500 p-4 rounded-xl">
      <p className="text-white mb-2 font-semibold uppercase">Lista de campos disponibles</p>
      {data.map((component) => {
        return (
          <div className="bg-white mb-2 p-2 rounded-lg" key={component.id}>
            <p>Type of input {component.component}</p>
            <label className="block">{component.label}:</label>
            {component.type === "select" ? 
            <select className='border-2 border-slate-500 rounded-md outline-none'>
              <option value="">select</option>
              <option value="México">México</option>
              <option value="USA">USA</option>
              <option value="Colombia">Colombia</option>
            </select> : 
            <input type={component.type} placeholder={component.component} className='border-2 border-slate-500 rounded-md outline-none' />}
          </div>
        );
      })}
    </div>
  );
};

export default ListFields;
