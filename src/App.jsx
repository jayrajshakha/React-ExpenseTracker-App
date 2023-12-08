import ExpenseTrach from "./Components/ExpenseTrach";

function App() {
  return (
    <div className="w-[100] h-[100vh]  bg-[#5c8196] grid place-items-center">
      <ExpenseTrach />
      <div className="fixed bottom-10 mx-auto p-3 sm:p-0 sm:bottom-8  justify-center items-center">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="" className="hover:underline">
            Jay-Rajshakha™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
}

export default App;
