import React from "react";

const InputBox = () => {
  return (
    <div className="mb-4">
      <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        // value={formData.name}
        onChange={"handleChange"}
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Enter your name"
      />
    </div>
  );
};

export default InputBox;
