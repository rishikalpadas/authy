import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="w-full h-dvh bg-black flex items-center flex-col justify-center">
      <h1 className="font-bold text-3xl text-center text-white pb-5">authy!</h1>
      <div className="p-20 rounded-3xl bg-gray-800">
        <div className="gap-2 flex mb-8">
          <input
            type="text"
            value={"Hello World"}
            readOnly
            className="bg-amber-50 rounded-full px-4 py-4 text-2xl"
          />
          <button className="bg-blue-500 text-2xl rounded-full px-4 py-4 shadow-xl cursor-pointer text-white">
            Copy
          </button>
        </div>

        <div className="flex items-center justify-center gap-x-1.5">
          <input
            type="range"
            className="cursor-pointer"
            min={8}
            max={30}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />

          <label className="text-amber-600">Length: {length}</label>

          <input
            type="checkbox"
            className=""
            id="allowNum"
            defaultChecked={numAllowed}
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="allowNum" className="text-amber-600">
            Numbers
          </label>

          <input
            type="checkbox"
            className=""
            id="allowChar"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />

          <label htmlFor="allowChar" className="text-amber-600">
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
