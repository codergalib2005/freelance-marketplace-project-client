import React from "react";

const Loader = () => {
  return (
    <div>
      <div
        style={{ minHeight: "90vh" }}
        className="flex items-center justify-center"
      >
        <span className="main-loader"></span>
      </div>
    </div>
  );
};

export default Loader;
