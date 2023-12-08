import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Resul = ({ data, del, edit }) => {
  return (
    <div>
      <table className="flex items-center justify-center flex-col">
        <thead className="w-[100%]">
          <tr className="flex justify-between   sm:justify-around p-2 ">
            <th className="text-xs sm:text-lg ">Description</th>
            <th className="text-xs sm:text-lg">Amount</th>
            <th className="mr-[15px] text-xs sm:text-lg ">Action</th>
          </tr>
        </thead>
        <tbody className=" w-[100%]">
          {!data
            ? " "
            : data.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className="flex justify-between sm:justify-around p-2"
                  >
                    <td className="w-[33%] font-medium text-start sm:text-center text-xs sm:text-xl">
                      {" "}
                      {item.description}{" "}
                    </td>
                    <td className="w-[33%] text-center text-xs sm:text-xl">
                      {" "}
                      {item.amount}{" "}
                    </td>
                    <td className="flex justify-center  items-center w-[33%] text-center">
                      {" "}
                      <AiFillEdit
                        onClick={() => edit(item)}
                        className="mx-2 text-xs sm:text-xl"
                      />{" "}
                      <AiFillDelete
                        onClick={() => del(item.id)}
                        className="mx-2 text-xs sm:text-xl"
                      />{" "}
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default Resul;
