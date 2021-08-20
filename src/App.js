/** @format */

import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  };

  return (
    <div className="bg-purple-600 min-h-screen">
      <h1 className="text-white font-bold text-4xl text-center italic font-serif underline">
        Banana Translator
      </h1>

      <div className="flex min-h-screen">
        <form className="m-auto flex" onSubmit={handleSubmit}>
          <input
            className="rounded-l-lg p-4 w-96 text-gray-800 outline-none"
            placeholder="Enter the text you want to translate"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button className="px-8 rounded-r-lg bg-yellow-400  text-white font-bold p-4 uppercase">
            Translate
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
