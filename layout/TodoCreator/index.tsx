import CustomButton from "@/components/CustomButton";
import CustomTextInput from "@/components/CustomTextInput";
import { Todo } from "@/types/todo";
import React, { useEffect, useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";

type TodoCreatorProps = {
  onAddTodo: (title: Todo["title"]) => void;
};

const TodoCreator: React.FC<TodoCreatorProps> = ({ onAddTodo }) => {
  const [text, setText] = useState("");
  const [inputError, setInputError] = useState(false);

  const onPressAdd = () => {
    if (!text) {
      setInputError(true);
      return;
    }
    Keyboard.dismiss();
    onAddTodo(text);
    setText("");
  };

  useEffect(() => {
    if (inputError && text) {
      setInputError(false);
    }
  }, [text]);

  return (
    <View style={styles.container}>
      <CustomTextInput
        placeholder="Add a task..."
        value={text}
        onChangeText={setText}
        isError={inputError}
      />
      <CustomButton label="+" onPress={onPressAdd} disabled={inputError} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    paddingHorizontal: 10,
    gap: 10,
  },
});

export default TodoCreator;
