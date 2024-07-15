import { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberInclude, setnumberInclude] = useState(false);
  const [characterInclude, setcharacterInclude] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const [copy, setCopy] = useState(false);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    if (characterInclude) str += ",./;'[]-=~!@#$%^&*(_+`:<>?{}";
    if (numberInclude) str += "1234567890";
    // console.log("l:", length);
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberInclude, characterInclude]);

  const handleCopy = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setCopy(true);
  }, [password]);
  useEffect(() => {
    generatePassword();
    setCopy(false);
  }, [length, PasswordGenerator, numberInclude, characterInclude]);
  return (
    <>
      <div className="bg-black h-screen w-screen flex items-center justify-center">
        <div className=" bg-slate-500 w-fit h-fit gap-3 align-middle items-center justify-center rounded">
          <div className=" flex w-full items-center m-2 rounded ">
            <input
              type="text"
              className="outline-none w-96 max-w-md p-1"
              defaultValue={password}
              readOnly
              placeholder="password"
              ref={passwordRef}
            ></input>

            <button
              onClick={handleCopy}
              className="button  h-fit rounded-md p-1 bg-blue-500 text-gray-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {copy ? "Copied" : "Copy"}
            </button>
          </div>

          <div className="flex gap-x-4 p-2">
            <input
              type="range"
              min="8"
              max="100"
              className="cursor-pointer"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>

            <input
              type="checkbox"
              defaultChecked={numberInclude}
              onChange={() => setnumberInclude((prev) => !prev)}
            />
            <label>Numbers</label>
            <input
              type="checkbox"
              defaultChecked={characterInclude}
              onChange={() => setcharacterInclude((prev) => !prev)}
            />
            <label>Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
