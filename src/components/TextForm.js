import React from "react";
import { useState } from "react";

function TextForm({ showalert }) {
  // event for uppercase
  const buttonclicked = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    showalert("Converted to uppercase", "Success");
  };
  // event occuring for lower case
  const buttonlow = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    showalert("Converted to LowerCase", "Success");
  };

  //   clearing the text
  const Clear = () => {
    let newtext = "";
    settext(newtext);
    showalert("Text Is Cleared", "Success");
  };
  // for removing extra spaaces from the text

  const removeSpace = () => {
    let newText = text.split(/[ ]+/);
    settext(newText.join(" "));
    showalert("Spaces Are Removed", "Success");
  };

  //  copying the text

  const Copy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    showalert("Copied To Clipboard", "Success");
  };
  // setting text so that user can enter value
  const handleupchange = (e) => {
    settext(e.target.value);
  };
  // use state hook for text and after setting the text
  const [text, settext] = useState("");
  return (
    <div>
      {/* text area div  */}
      <div className="mb-4 flex flex-col items-center justify-center">
        {/* Label for textarea */}
        <label
          className="block font-bold text-2xl m-5 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900  bg-clip-text text-transparent"
          htmlFor="message"
        >
          Place Your Text Here
        </label>
        {/* textarea input */}
        <textarea
          id="message"
          name="message"
          rows={8}
          placeholder="paste your content here .. "
          className="px-4 w-3/4 py-2 rounded border-2 border-gray-500 focus:ring focus:ring-blue-400"
          value={text}
          onChange={handleupchange}
        ></textarea>
      </div>
      {/* Words and characters count div */}
      <div className="flex flex-col md:flex-row items-center justify-center md:items-center md:justify-center">
        <div className="md:mr-10 mb-4 md:mb-0">
          {/* words count */}
          <span className="md:m-2 block md:inline font-semibold md:text-xl text-md bg-gradient-to-b from-gray-900 to-gray-600  bg-clip-text text-transparent">
            Words:
            {
              text.split(/\s+/).filter((word) => {
                return word.length !== 0;
              }).length
            }
          </span>
          {/* characters count */}
          <span className="md:m-2 block md:inline font-semibold md:text-xl text:md bg-gradient-to-b from-gray-900 to-gray-600  bg-clip-text text-transparent">
            Character: {text.length}
          </span>
        </div>
      </div>
      {/* buttons for conversions */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-3 m-5">
        {/* button for uppercase conversion */}
        <div className="grid grid-cols-3">
          <button
            className="py-2 px-4 mx-2 bg-gradient-to-r from-slate-500 to-yellow-100 rounded md:text-lg md:font-bold md:inline font-medium text-sm block"
            onClick={Copy}
            disabled={text.length === 0}
          >
            Copy Text
          </button>
          <button
            className="py-2 px-4 mx-2 bg-gradient-to-r from-slate-500 to-yellow-100 rounded md:text-lg md:font-bold md:inline font-medium text-sm block"
            onClick={Clear}
            disabled={text.length === 0}
          >
            Clear Text
          </button>
          <button
            className="py-2 px-4 mx-2 bg-gradient-to-r from-slate-500 to-yellow-100 rounded md:text-lg md:font-bold md:inline font-medium text-sm block"
            onClick={removeSpace}
            disabled={text.length === 0}
          >
            Remove Space
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 ">
          <button
            className="py-2 px-4 bg-gradient-to-r from-slate-500 to-yellow-100 rounded md:text-lg md:font-bold md:inline font-medium text-sm block mx-2"
            onClick={buttonclicked}
            disabled={text.length === 0}
          >
            Convert To Uppercase
          </button>
          {/* button for lowercase conversion */}
          <button
            className="py-2 px-4 bg-gradient-to-r from-slate-500 to-yellow-100 rounded md:text-lg md:font-bold md:inline font-medium text-sm block mx-2"
            onClick={buttonlow}
            disabled={text.length === 0}
          >
            Convert To LowerCase
          </button>
        </div>
        {/* for clearing the text */}
      </div>

      {/* minutes read for the text */}

      <div className="flex items-center justify-center flex-col">
        <h2 className="block font-bold text-2xl my-2 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 bg-clip-text text-transparent">
          Preview
        </h2>
        <p className="mt-4 mx-4 md:my-2 w-10/12">{text}</p>
        <span className="mt-4 font-semibold md:text-xl text-md bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Minutes Read: {0.08 * text.split(" ").length} min
        </span>
      </div>
    </div>
  );
}

export default TextForm;
