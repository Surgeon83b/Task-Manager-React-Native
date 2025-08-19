import CustomButton from "@/components/CustomButton";
import { TodoFormData } from "@/types/todo";
import React from "react";
import { Keyboard, StyleSheet, View, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { getFullFormattedDate } from "@/helpers/date";
import FormTextField from "@/components/FormTextField";


type TodoCreatorProps = {
  onClose: () => void;
  onAddTodo: (todoData: TodoFormData) => void;
};

const TodoCreator: React.FC<TodoCreatorProps> = ({ onClose, onAddTodo }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<TodoFormData>({
    defaultValues: {
      title: "",
      description: "",
      date: "",
      location: "",
    },
  });

  const onSubmit = (data: TodoFormData) => {
    const { title, description, date, location } = data;
    Keyboard.dismiss();
    onAddTodo({
      title,
      description,
      date: getFullFormattedDate(new Date(data.date)),
      location,
    });
    reset();
    onClose();
  };

  const allFields = watch();
  const isValid = Object.values(allFields).every(field => field.trim().length > 0);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Controller
          control={control}
          rules={{
            required: "Title is required",
            minLength: {
              value: 3,
              message: "Title must be at least 3 characters",
            },
            maxLength: {
              value: 100,
              message: "Title must be less than 100 characters",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormTextField
              label="Task Title*"
              placeholder="Enter task title"
              placeholderTextColor={'white'}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              errorMessage={errors.title?.message}
              autoCapitalize="sentences"
              returnKeyType="next"
            />
          )}
          name="title"
        />

        <Controller
          control={control}
          rules={{
            maxLength: {
              value: 500,
              message: "Description must be less than 500 characters",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormTextField
              label="Description"
              placeholder="Enter task description (optional)"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              errorMessage={errors.description?.message}
              multiline
              numberOfLines={3}
              textAlignVertical="top"
              autoCapitalize="sentences"
              returnKeyType="next"
            />
          )}
          name="description"
        />

        <Controller
          control={control}
          rules={{
            required: "Date is required",
            pattern: {
              value: /^\d{4}-\d{2}-\d{2}$/,
              message: "Please use format YYYY-MM-DD",
            },
            validate: (value) => {
              const date = new Date(value);
              return !isNaN(date.getTime()) || "Please enter a valid date";
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormTextField
              label="Date*"
              placeholder="YYYY-MM-DD"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              errorMessage={errors.date?.message}
              keyboardType="numbers-and-punctuation"
              returnKeyType="next"
            />
          )}
          name="date"
        />

        <Controller
          control={control}
          rules={{
            maxLength: {
              value: 200,
              message: "Location must be less than 200 characters",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormTextField
              label="Location"
              placeholder="Enter location (optional)"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              errorMessage={errors.location?.message}
              autoCapitalize="words"
              returnKeyType="done"
            />
          )}
          name="location"
        />
        <View style={styles.controls}>
          <CustomButton
            label="Add Task"
            onPress={handleSubmit(onSubmit)}
            disabled={!isValid}
            size="large"
            style={styles.button}
          />
          <CustomButton
            label="Close"
            onPress={onClose}
            size="large"
            style={styles.button}
            variant="secondary"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    paddingHorizontal: 10,
    gap: 10,
  },
  button: {
    marginTop: 8,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    gap: 12
  }
});

export default TodoCreator;
