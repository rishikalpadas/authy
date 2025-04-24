import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passGen();
  }, [passGen, length, numAllowed, charAllowed]);

  const passwordRef = useRef(null);

  const copyToClipboard = () => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(passwordRef.current.value); 
    alert("Password copied to clipboard");
  }

  // Alternative approach using useEffect
  // This approach will generate a new password every time the component mounts or any of the dependencies change
  // This is not the best approach as it will generate a new password every time the component mounts or any of the dependencies change
  // This can be useful if you want to generate a new password every time the user changes the length, numAllowed or charAllowed
  // But it will not be the best approach if you want to generate a new password only when the user clicks a button

  // useEffect(() => {
  //   let pass = "";
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  //   if (numAllowed) str += "0123456789";
  //   if (charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";
  //   for (let i = 0; i < length; i++) {
  //     pass += str.charAt(Math.floor(Math.random() * str.length + 1));
  //   }
  //   setPassword(pass);
  // }, [length, numAllowed, charAllowed, setPassword])

  return (
    <div className="w-full h-dvh bg-black flex items-center flex-col justify-center">
      <h1 className="font-bold text-3xl text-center text-white pb-5">authy!</h1>
      <div className="p-20 rounded-3xl bg-gray-800">
        <div className="gap-2 flex mb-8">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="bg-amber-50 rounded-full px-4 py-4 text-2xl"
          />
          <button className="bg-blue-500 text-2xl rounded-full px-4 py-4 shadow-xl cursor-pointer text-white" onClick={copyToClipboard}>
            Copy
          </button>
        </div>

        <div className="flex items-start flex-col justify-start">
          <div className="flex gap-x-2">
            <input
              type="range"
              className="cursor-pointer"
              min={8}
              max={16}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />

            <label className="text-amber-600">Length: {length}</label>
          </div>
          <div className="flex gap-x-2">
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
          </div>
          <div className="flex gap-x-2">
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
    </div>
  );
}

export default App;
