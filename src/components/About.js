import React from "react";
import Navbar from "./Navbar";

export default function About() {
  return (
    <>
      <Navbar title={"Luminous Text"} />
      <div className="w-fit h-screen">
        <div className=" px-8">
          <h1 className="flex my-4 mx-8 font-bold md:text-4xl text-2xl  bg-gradient-to-r from-blue-700 via-gray-800 to-gray-900  bg-clip-text text-transparent">
            About Website
          </h1>
          <div className="grid md:grid-cols-3  grid-cols-1 my-4 md:gap-8 gap-4">
            <div className=" border-2 border-gray-500 p-4 shadow-lg shadow-gray-300 hover:shadow-xl hover:shadow-gray-600">
              <p className="p-4 text-2xl bg-gradient-to-r from-slate-800 to-yellow-400   bg-clip-text text-transparent font-bold">
                Paste your text
              </p>
              <span className="p-2 font-medium text-md indent-8 text-left m-2 block">
                On the main page, you'll find a designated text area. Paste your
                text into this area from your clipboard or type it directly. it
                will automatically calculate and display the character count and
                word count.
              </span>
            </div>
            <div className=" border-2 border-gray-500 p-4 shadow-lg shadow-gray-300 hover:shadow-xl hover:shadow-gray-600">
              <p className="p-4 text-2xl bg-gradient-to-r from-slate-800 to-yellow-400 font-bold   bg-clip-text text-transparent">
                Transformation Options
              </p>
              <span className="p-2 font-medium text-md indent-8 text-left m-2 block">
                Below the character and word count, you'll find buttons labeled
                "Convert to Lowercase" and "Convert to Uppercase." Click on the
                appropriate button to instantly transform your text
              </span>
            </div>
            <div className=" border-2 border-gray-500 p-4 shadow-lg shadow-gray-300 hover:shadow-xl hover:shadow-gray-600 ">
              <p className="p-4 text-2xl bg-gradient-to-r from-slate-800 to-yellow-400   bg-clip-text text-transparent font-bold">
                Copy and Use
              </p>
              <span className="p-2 font-medium text-md indent-8 text-left m-2 block">
                Once you're satisfied with the character count, word count, or
                text transformation, you can easily copy the modified text back
                to your clipboard for use in your documents, emails, or other
                applications.
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center"></div>
        </div>
      </div>
    </>
  );
}
