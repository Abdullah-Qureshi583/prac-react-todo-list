const Input = ({ input, setInput, handleSubmit,inputRef }) => {
  const handleInputChange = (e) => {
    setInput({ ...input, text: e.target.value });
  };

  return (
    <div className="w-full  mx-auto mt-12 flex flex-col md:flex-row gap-2 justify-center items-center">
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        ref={inputRef}
        type="text"
        value={input.text}
        name="text"
        onChange={handleInputChange}
        placeholder="Add a new task"
        className="w-full bg-zinc-800 h-12 px-4 rounded-md overflow-x-auto text-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
      />
      <button
        onClick={() => handleSubmit()}
        className="w-full cursor-pointer md:w-fit bg-cyan-600 whitespace-nowrap px-4 py-2 rounded-md h-12"
      >
        Add Todo
      </button>
    </div>
  );
};

export default Input;
