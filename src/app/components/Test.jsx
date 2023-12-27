import React from "react";

const Test = () => {
  return (
    <div className="grid grid-cols-6 gap-4 ">
      <div className="col-start-2 col-span-4  bg-red-300">01</div>
      <div className="col-start-1 col-end-3  bg-blue-500">02</div>
      <div className="col-end-7 col-span-2  bg-gray-600">03</div>
      <div className="col-start-1 col-end-7  bg-yellow-700 text-yellow-50">
        04
      </div>
    </div>
  );
};

export default Test;
