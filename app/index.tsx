import { CustomButton } from '@/components';
import { Colors } from '@/constants/ui';
import { sortTodos } from '@/helpers/sort';
import useTodo from '@/hooks/useTodo';
import Header from '@/layout/Header';
import { SortSelector } from '@/layout/SortSelector';
import TodoCreator from '@/layout/TodoCreator';
import TodoList from '@/layout/TodoList';
import { SortDirection, SortOption } from '@/types';
import { useMemo, useState } from 'react';
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native';

export default function Index() {
  const [isAddForm, setIsAddForm] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const {
    todos,
    completedTodos,
    onAddTodo,
    onDeleteTodo,
    onCheckTodo,
    onCancelTodo,
    isLoading,
  } = useTodo();

  const sortedTodos = useMemo(
    () => sortTodos(todos, sortBy, sortDirection),
    [todos, sortBy, sortDirection]
  );

  const handleSortChange = (
    newSortBy: SortOption,
    newDirection: SortDirection
  ) => {
    setSortBy(newSortBy);
    setSortDirection(newDirection);
  };

  if (isLoading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Header
        totalTodos={todos.length}
        completedTodos={completedTodos.length}
      />

      <SortSelector
        sortBy={sortBy}
        direction={sortDirection}
        onSortChange={handleSortChange}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {!isAddForm && (
          <CustomButton
            icon="add"
            size="small"
            onPress={() => setIsAddForm(true)}
            style={styles.addButton}
          />
        )}

        {isAddForm && (
          <TodoCreator
            onAddTodo={onAddTodo}
            onClose={() => setIsAddForm(false)}
          />
        )}

        <TodoList
          todos={sortedTodos}
          onDeleteTodo={onDeleteTodo}
          onCheckTodo={onCheckTodo}
          onCancelTodo={onCancelTodo}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BACKGROUND,
  },
  addButton: {
    margin: 8,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});
