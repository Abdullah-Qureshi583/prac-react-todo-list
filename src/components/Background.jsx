import React from "react";

const Background = ({ children }) => {
  return (
    <div className="bg-zinc-900 text-white w-full h-screen fixed selection:text-amber-400 ">
      <div className="bg-black h-[25vh] w-full fixed -z-10" />
      {children}
    </div>
  );
};

export default Background;
