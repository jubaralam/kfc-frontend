import React from "react";
import ActionButton from "./ActionButton";

export const ActionBanner = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center text-white items-center bg-black  mx-auto py-3">
        <div className="mx-2 ">
          <h2 className="b">LETS ORDER FOR DELIVERY, PICK UP, OR DINE-IN</h2>
        </div>
        <div>
          <ActionButton text="Start Order" redirect="/menu" />
        </div>
      </div>
    </div>
  );
};

export default ActionBanner;
