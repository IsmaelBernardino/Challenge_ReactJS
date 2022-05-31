import { useState } from "react";
import Form from "./components/Form";
import ListFields from "./components/ListFields";

function App() {

  const [page, setPage] = useState('')

  return (
    <div className="min-h-screen flex flex-col items-center p-10">
      <div className="flex gap-4 mb-8">
        <a href='#' onClick={() => setPage('form')} className='text-white bg-slate-400 border-2 border-slate-500 rounded-md p-2'>Go to Form</a>
        <a href='#' onClick={() => setPage('list')} className='text-white bg-slate-400 border-2 border-slate-500 rounded-md p-2'>Go to List Fields</a>
      </div>
      {page == 'list' ? <ListFields /> : <Form />}
    </div>
  );
}

export default App;
