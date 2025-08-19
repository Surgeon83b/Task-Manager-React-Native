import CustomButton from "@/components/CustomButton";
import CustomText from "@/components/CustomText"
import { Colors } from "@/constants/ui";
import { Status, Todo } from "@/types/todo";
import { View, StyleSheet } from "react-native"

type TodoItemProps = Todo;

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  return (
    <View style={styles.container}>
      <CustomText style={{ textDecorationLine: props.status === Status.COMPLETED ? 'line-through' : 'none' }}>{props.title}</CustomText>
      <View style={styles.controlsContainer}>
        <CustomButton icon="pencil" size='small' />
        <CustomButton icon="trash" size='small' variant='delete' />
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



