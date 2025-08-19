import { Todo } from "@/types/todo"
import { FlatList, View } from "react-native"
import { TodoItem } from "../TodoItem"

type TodoListProps = {
  todos: Todo[];
  onDeleteTodo: (id: Todo['id']) => void;
};

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onDeleteTodo
}) => {
  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={(todo) => todo.id.toString()}
        renderItem={({ item }) => (
          <TodoItem
            id={item.id}
            title={item.title}
            status={item.status}
            onDelete={onDeleteTodo}
          />
        )}
      />
    </View>
  );
};

export default TodoList;
