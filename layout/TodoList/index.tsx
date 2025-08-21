import { Todo } from '@/types';
import { FlatList, View } from 'react-native';
import { TodoItem } from '../TodoItem';

type TodoListProps = {
  todos: Todo[];
  onCheckTodo: (id: Todo['id']) => void;
  onDeleteTodo: (id: Todo['id']) => void;
  onCancelTodo: (id: Todo['id']) => void;
};

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onCheckTodo,
  onDeleteTodo,
  onCancelTodo,
}) => {
  console.log(todos)
  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={(todo) => todo.id.toString()}
        renderItem={({ item }) => {
          const { id, title, status, description, date, location } = item;
          return (
            <TodoItem
              id={id}
              title={title}
              description={description}
              date={date}
              status={status}
              location={location}
              onDelete={onDeleteTodo}
              onCancel={onCancelTodo}
              onCheck={onCheckTodo}
            />
          );
        }}
      />
    </View>
  );
};

export default TodoList;
