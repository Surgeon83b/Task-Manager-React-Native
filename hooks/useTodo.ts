import { Status, Todo } from "@/types/todo";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEY } from "@/constants/storage";

const defaultTodos:Todo[] = [
  {
    id: 1,
    title: "Buy milk",
    status: Status.INPROGRESS
  },
  {
    id: 2,
    title: "Running",
    status: Status.COMPLETED
  },
  {
    id: 3,
    title: "Cycling",
    status: Status.INPROGRESS
  }
];

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);
  const [isLoading, setIsLoading] = useState(false);

  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      } else {
        setTodos(defaultTodos);
      }
    } catch (e) {
      setTodos(defaultTodos);
    } finally {
      setIsLoading(false);
    }
  };

  const saveTodos = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (e) {
      console.log(e);
    }
  };

  const onAddTodo = (title: Todo["title"]) => {
    setTodos([...todos, { id: Number(new Date()), title, status: Status.INPROGRESS }]);
  };

  const onDeleteTodo = (id: Todo['id'])=>{
      setTodos(todos.filter(todo=>todo.id !== id));
  }

  const completedTodos = todos.filter((todo) => todo.status===Status.COMPLETED);

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      saveTodos();
    }
  }, [todos]);

  return {
    onAddTodo,
    onDeleteTodo,
    todos,
    completedTodos,
    isLoading,
  };
};

export default useTodo;
