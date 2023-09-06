


function Result({ data , del, edit}) {

  

  


  return (
    <div>
          

                <div className="flex justify-around flex-wrap ">
                <div>
                  <h3 className="txt-ceenter text-black font-medium mr-1 ">
                    Description
                  </h3>
                  <ul className="my-2 p-1">
                    {data.map((item) => (
                      <li key={item.id}>{item.description}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="txt-ceenter text-black font-medium mr-4">Amount</h3>
                  <ul className="my-2 p-1">
                    {
                    data.map((item)=>(
                     <li className="my-1 " key={item.id}>{item.amount}</li>

                    )
                    )}
                    
                  </ul>
                </div>
                <div>
                  <h3 className=" my-2 txt-ceenter text-black font-medium mr-4">
                    Action
                  </h3>
                     {
                       data.map((item)=> (
                        <div key={item.id}  className="flex justify-around">
                        <button
                          type="submit"
                          onClick={() => edit(item)}
                          className="m-1 cursor-pointer bg-[#38225c] h[35px] text-white  w-[50px] text-[10px] p-1 rounded-md outline-none border-none hover:bg-[#ffffff] hover:text-black focus:ring-4"
                        >
                          EDIT
                        </button>
                        <button
                          onClick={() => del(item.id)}
                          type="submit"
                          className="m-1 bg-[#e22525] h[35px] text-white  w-[50px] text-[10px] p-1 rounded-md outline-none border-none hover:bg-[#ffffff] hover:text-black focus:ring-4"
                        >
                          DELET
                        </button>
                      </div>
                       ))

                     }
                </div>
              </div>
        
            

        
    </div>
  );
}

export default Result;
