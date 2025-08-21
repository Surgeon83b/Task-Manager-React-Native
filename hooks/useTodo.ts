import { Status, Todo, TodoFormData } from '@/types';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEY } from '@/constants/storage';

const defaultTodos: Todo[] = [
  {
    id: 1,
    title: 'Buy milk',
    description: 'Descr 1',
    status: Status.INPROGRESS,
    date: 'today',
    location: 'Minsk',
  },
  {
    id: 2,
    title: 'Running',
    description: 'Descr 2',
    status: Status.COMPLETED,
    date: 'today',
    location: 'Brest',
  },
  {
    id: 3,
    title: 'Cycling',
    description: 'Descr 3',
    status: Status.INPROGRESS,
    date: 'today',
    location: 'Moscow',
  },
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

  const onAddTodo = (todoData: TodoFormData) => {
    setTodos([
      ...todos,
      { ...todoData, id: Number(new Date()), status: Status.INPROGRESS },
    ]);
  };

  const onDeleteTodo = (id: Todo['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onCheckTodo = (id: Todo['id']) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status:
                todo.status === Status.COMPLETED
                  ? Status.INPROGRESS
                  : Status.COMPLETED,
            }
          : todo
      )
    );
  };

  const onCancelTodo = (id: Todo['id']) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status:
                todo.status === Status.CANCELLED
                  ? Status.INPROGRESS
                  : Status.CANCELLED,
            }
          : todo
      )
    );
  };

  const completedTodos = todos.filter(
    (todo) => todo.status === Status.COMPLETED
  );

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
    onCheckTodo,
    onCancelTodo,
    todos,
    completedTodos,
    isLoading,
  };
};

export default useTodo;
