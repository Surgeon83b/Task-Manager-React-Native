import CustomButton from "@/components/CustomButton";
import CustomText from "@/components/CustomText"
import { Colors } from "@/constants/ui";
import { Status, Todo } from "@/types/todo";
import { useState } from "react";
import { View, StyleSheet, Vibration } from "react-native"
import DeleteTodoModal from "../Modals/DeleteTodoModal";

type TodoItemProps = Todo & {
  onDelete: (id: Todo['id']) => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  status,
  onDelete,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const onPressDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const onConfirmDelete = () => {
    onDelete(id);
    Vibration.vibrate(50);
  };

  return (
    <View style={styles.container}>
      <CustomText style={{ textDecorationLine: status === Status.COMPLETED ? 'line-through' : 'none' }}>{title}</CustomText>
      <View style={styles.controlsContainer}>
        <CustomButton icon="pencil" size='small' />
        <CustomButton icon="trash" size='small' variant='delete' onPress={onPressDelete} />
        <DeleteTodoModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} onDelete={onConfirmDelete} />
      </View>
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: Colors.SECONDARY_BACKGROUND,
  },
  headerMain: {
    marginBottom: 24,
    alignItems: 'center',
    gap: 8
  },
  controlsContainer: {
    flexDirection: "row",
    gap: 5,
  },
})
