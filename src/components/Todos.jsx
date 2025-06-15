import React, { useState } from "react";
import RenderTodos from "./RenderTodos";

const Todos = ({ setInput, todos, setTodos, inputRef }) => {
  const tabs = ["All Todos", "Incomplete Todos", "Completed Todos"];
  const [activeTab, setactiveTab] = useState("All Todos");

  return (
    <div className=" mt-12  flex flex-col gap-3">
      {/* header */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2 gap-y-4 ">
        <div className="flex gap-2 text-lg font-semibold">
          <p className=" text-cyan-600">All Todos</p>
          <div className="bg-zinc-800  rounded-full aspect-square size-8 flex items-center justify-center">
            {todos ? todos.length : 0}
          </div>
        </div>
        {/* tabs */}
        <div className="text-sm flex items-center gap-1 md:gap-3 text-gray-400">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`border-2 ${
                activeTab === tab ? "text-white" : ""
              } p-2 py-1 md:py-2  md:px-4 rounded-md text-center hover:cursor-pointer transition-all duration-150 hover:font-bold hover:text-white`}
              onClick={() => setactiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
      {/* todos */}
      {activeTab === "Incomplete Todos" ? (
        <RenderTodos
          setInput={setInput}
          todos={todos.filter((todo) => todo.isCompleted === false)}
          setTodos={setTodos}
        />
      ) : activeTab === "Completed Todos" ? (
        <RenderTodos
          setInput={setInput}
          todos={todos.filter((todo) => todo.isCompleted === true)}
          setTodos={setTodos}
        />
      ) : (
        <RenderTodos setInput={setInput} todos={todos} setTodos={setTodos} inputRef={inputRef} />
      )}
    </div>
  );
};

export default Todos;
