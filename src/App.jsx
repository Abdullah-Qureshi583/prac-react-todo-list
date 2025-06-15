import { useEffect, useRef, useState } from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Todos from "./components/Todos";
import { v4 as uuidv4 } from "uuid";
const App = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const inputRef = useRef(null);
  const [input, setInput] = useState({
    text: "",
    isCompleted: false,
    id: uuidv4(),
  });
  const [todos, setTodos] = useState([]);

  // load prev todos
  useEffect(() => {
    inputRef.current.focus();
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      console.log(
        "The stored todos are in the local: ",
        JSON.parse(storedTodos)
      );
      setTodos(JSON.parse(storedTodos));
      setIsInitialLoad(false);
    }
  }, []);

  const handleSubmit = () => {
    if (input["text"].trim() === "") return;
    if (todos.some((todo) => todo.id === input.id)) {
      setTodos((prevTodos) =>
        prevTodos.map((t) =>
          t.id === input.id ? { ...t, text: input.text } : t
        )
      );
    } else {
      setTodos((prevTodos) => [...prevTodos, input]);
    }
    setInput({ text: "", isCompleted: false, id: uuidv4() });
  };

  // save todos to local storage
  useEffect(() => {
    if (!isInitialLoad) localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, isInitialLoad]);

  return (
    <div>
      <Background>
        <Foreground>
          <Heading />
          <Input
            input={input}
            setInput={setInput}
            inputRef={inputRef}
            handleSubmit={handleSubmit}
          />
          <Todos
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            inputRef={inputRef}
          />
        </Foreground>
      </Background>
    </div>
  );
};

export default App;
