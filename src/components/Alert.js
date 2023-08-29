import React from "react";

function Alert({ alert }) {
  return (
    <div className="absolute  w-full z-10">
      {alert && (
        <div className="w-full p-4 bg-zinc-300 shadow-md rounded flex items-center justify-start">
          <div className="text-blue-600 font-semibold">{alert.type}</div>
          <div className="ml-8 text-gray-700 text-md font-medium">
            {alert.message}
          </div>
        </div>
      )}
    </div>
  );
}

export default Alert;
