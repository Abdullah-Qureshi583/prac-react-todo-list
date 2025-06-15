import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const RenderTodos = ({ todos, setTodos, setInput, inputRef }) => {
  const handleIsCompleted = (todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  const handleDelete = (todo) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id === todo.id));
  };

  const handleUpdate = (todo) => {
    setInput(todo);
    inputRef.current.focus();
  };
  return (
    <div className="flex flex-col gap-2 px-4 ">
      {/* todo item */}
      {todos
        ? todos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center bg-zinc-800 px-4  rounded-md"
            >
              {/* input and name */}
              <div className="flex grow  gap-4 items-center py-3">
                <input
                  checked={todo.isCompleted}
                  onChange={() => {
                    handleIsCompleted(todo);
                  }}
                  type="checkbox"
                  className="w-5 h-5 rounded-full border-2 aspect-square border-gray-400 checked:bg-cyan-600 checked:border-gray-600 appearance-none cursor-pointer"
                />

                <p className="">{todo.text}</p>
              </div>
              <div className="flex gap-3 items-center">
                <button onClick={() => handleUpdate(todo)} className="">
                  <CiEdit
                    className="hover:-scale-x-110 size-5 md:size-6 hover:text-green-400 cursor-pointer"
                    // size={24}
                  />
                </button>
                <button onClick={() => handleDelete(todo)} className="">
                  <MdDeleteForever
                    className="hover:-scale-x-110 hover:text-red-400 size-5 md:size-6 cursor-pointer"
                    size={24}
                  />
                </button>
              </div>
            </div>
          ))
        : "No todos available"}
    </div>
  );
};

export default RenderTodos;
