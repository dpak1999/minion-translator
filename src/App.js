/** @format */

import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslated, setIsTranslated] = useState(false);
  const URI = "https://api.funtranslations.com/translate/pig-latin.json";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${URI}?text=${text}`);
    const data = await res.json();

    try {
      if (data) {
        setTranslatedText(data.contents.translated);
        setIsTranslated(true);
      }
    } catch (error) {
      setText("");
      alert(data.error.message);
    }
  };

  return (
    <div className="bg-purple-600 min-h-screen">
      <h1 className="text-white font-bold text-4xl text-center italic font-serif underline">
        Banana Translator
      </h1>
      {isTranslated === false ? (
        <>
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
        </>
      ) : (
        <>
          <div className="flex min-h-screen">
            <form className="m-auto flex">
              <input
                className="rounded-l-lg p-4 w-96 text-white font-bold outline-none cursor-not-allowed"
                placeholder="Enter the text you want to translate"
                disabled
                value={translatedText && translatedText}
              />
              <button
                className="px-8 rounded-r-lg bg-yellow-400  text-white font-bold p-4 uppercase "
                onClick={(e) => {
                  e.preventDefault();
                  setIsTranslated(false);
                  setText("");
                }}
              >
                Translate Again
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
