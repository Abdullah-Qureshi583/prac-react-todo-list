import React from "react";

const Foreground = ({ children }) => {
  return (
    <div
      className=" 
      px-4 md:px-[10vw] lg:px-[20vw]  z-10 mx-auto l h-full  w-full overflow-y-auto  py-8
    

    "
    >
      {children}
    </div>
  );
};

export default Foreground;
