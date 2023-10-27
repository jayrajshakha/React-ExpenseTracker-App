import Resul from "./Result";
import { useState } from "react";

function ExpenseTrach() {
  const [description, setDescription] = useState("");

  const [amount, setAmount] = useState("");

  const [data, setData] = useState([]);

  const [editedid, setEditedid] = useState(null);

  function submiter(e) {
    e.preventDefault();

    if (editedid) {
      const newData = data.map((e) =>
        e.id === editedid ? { id: editedid, description, amount } : e
      );

      setData(newData);
      setAmount(0);
      setDescription("");
      setEditedid(null);
      
    } else {
      setData([...data, { id: Date.now(), description, amount }]);
      setAmount(0);
      setDescription("");
    }
  }

  function del(t) {
    setData(data.filter((e) => e.id !== t));
  }

  function edit(t) {
    setAmount(t.amount);
    setDescription(t.description);
    setEditedid(t.id);

  }

  return (
    <div className=" m-w-[100vw] sm:w-[90%] h-[90vh] sm:h-[90%] rounded-xl bg-[#c0def2]">
      <h1 className="text-center text-2xl text-black m-2 p-2 font-bold ">
        Transaction
      </h1>

      <Resul data={data} del={del} edit={edit} />

      <div className="bg-[#678192] h-[200px] w-[90vw] p-2 m-2 sm:p-0 sm:w-[33%] sm:mx-auto mt-[100px] sm:mt-[100px]  shadow-slate-400 border-[2px] border-white rounded-lg">
        <h1 className="text-center font-bold my-2 text-white">
          Add Your Transaction
        </h1>
        <form
          onSubmit={submiter}
          className="w-[100%] flex flex-col justify-center "
        >
          <input
            onChange={(e) => setDescription(e.target.value)}
            name="expenseName"
            value={description}
            type="text"
            placeholder="Description"
            id=""
            className="w-[90%] mx-auto bg-transparent text-white outline-none border-[2px] rounded-md p-2 my-[4px]"
          />
          <input
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            name="amount"
            type="number"
            placeholder="Amount"
            className="w-[90%] mx-auto bg-transparent text-white outline-none border-[2px] rounded-md p-2 my-[4px]"
            id=""
          />
          <button
            type="submit"
            className="w-[90%] mx-auto bg-[#5c8196] placeholder-white text-white outline-none border-[2px] rounded-md p-1 my-[4px] hover:bg-white hover:text-black"
          >
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
}

export default ExpenseTrach;
