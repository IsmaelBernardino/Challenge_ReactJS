import React, { useState } from "react";
import Inputs from "./Inputs";

const Form = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [select, setSelect] = useState("");

  const addText = () => {
    setText(<input type="text" placeholder="i am a text" className="w-full" />);
  };
  const deleteText = () => {
    setText(null);
  };
  const addNumber = () => {
    setNumber(<input type="number" placeholder="i am a number" className="w-full" />);
  };
  const deleteNumber = () => {
    setNumber(null);
  };
  const addDate = () => {
    setDate(<input type="date" className="w-full" />);
  };
  const deleteDate = () => {
    setDate(null);
  };
  const addSelect = () => {
    setSelect(
      <select className="w-full" >
        <option value="">select</option>
        <option value="México">México</option>
        <option value="USA">USA</option>
        <option value="Colombia">Colombia</option>
      </select>
    );
  };
  const deleteSelect = () => {
    setSelect(null);
  };

  return (
    <div>
      <p className="text-center">Add or Delete a input</p>
      <div className="flex gap-4 mb-2">
        <Inputs text='text' add={addText} set={deleteText} />
        <Inputs text='number' add={addNumber} set={deleteNumber} />
        <Inputs text='date' add={addDate} set={deleteDate} />
        <Inputs text='select' add={addSelect} set={deleteSelect} />
      </div>
      <form className="bg-slate-400 p-4 rounded-md">
        <p className="text-center text-white">FORM</p>
        <div className="mb-2">{text}</div>
        <div className="mb-2">{number}</div>
        <div className="mb-2">{date}</div>
        <div className="mb-2">{select}</div>
      </form>
    </div>
  );
};

export default Form;
