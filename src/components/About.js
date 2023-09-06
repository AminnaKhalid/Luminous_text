import React from "react";
import Navbar from "./Navbar";
import bg3 from "../bg3.jpg";
export default function About() {
  return (
    <>
      <div
        className="w-fit min-h-screen"
        style={{
          backgroundImage: `url(${bg3})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Navbar title={"Luminous Text"} />
        <div className=" px-8">
          <h1 className="flex my-4 mx-8 font-bold md:text-4xl text-2xl text-neutral-800">
            About Website
          </h1>
          <div className="grid md:grid-cols-3  grid-cols-1 my-4 md:gap-8 gap-4">
            <div className=" border-2 border-gray-500 p-4 shadow-lg shadow-neutral-600 hover:shadow-xl hover:shadow-gray-600">
              <p className="p-4 text-2xl text-neutral-800 font-bold">
                Paste your text
              </p>
              <span className="p-2 font-medium text-md indent-8 text-left m-2 block">
                On the main page, you'll find a designated text area. Paste your
                text into this area from your clipboard or type it directly. it
                will automatically calculate and display the character count and
                word count.
              </span>
            </div>
            <div className=" border-2 border-gray-500 p-4 shadow-lg shadow-neutral-600 hover:shadow-xl hover:shadow-gray-600">
              <p className="p-4 text-2xl font-bold text-neutral-800">
                Transformation Options
              </p>
              <span className="p-2 font-medium text-md indent-8 text-left m-2 block">
                Below the character and word count, you'll find buttons labeled
                "Convert to Lowercase" and "Convert to Uppercase." Click on the
                appropriate button to instantly transform your text
              </span>
            </div>
            <div className=" border-2 border-gray-500 p-4 shadow-lg shadow-neutral-600 hover:shadow-xl hover:shadow-gray-600 ">
              <p className="p-4 text-2xl font-bold text-neutral-800">
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
