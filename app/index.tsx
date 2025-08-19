import CustomButton from "@/components/CustomButton";
import { Colors } from "@/constants/ui";
import useTodo from "@/hooks/useTodo";
import Header from "@/layout/Header";
import TodoCreator from "@/layout/TodoCreator";
import TodoList from "@/layout/TodoList";
import { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";

export default function Index() {
  const [isAddForm, setIsAddForm] = useState(false);
  const {
    todos,
    completedTodos,
    onAddTodo,
    onDeleteTodo,
    isLoading,
  } = useTodo();

  if (isLoading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Header totalTodos={todos.length} completedTodos={completedTodos.length} />
      {!isAddForm && <CustomButton icon='add' size='small' onPress={() => setIsAddForm(true)} style={styles.addButton} />}
      {isAddForm && <TodoCreator onAddTodo={onAddTodo} onClose={() => setIsAddForm(false)} />}
      <TodoList
        todos={todos}
        onDeleteTodo={onDeleteTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BACKGROUND
  },
  addButton: {
    margin: 8
  }
});
