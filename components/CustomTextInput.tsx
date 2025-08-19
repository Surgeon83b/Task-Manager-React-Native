import { Colors } from "@/constants/ui";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type CustomTextInputProps = TextInputProps & {
  isError?: boolean;
};

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  isError,
  ...props
}) => {
  return (
    <TextInput
      style={[style.input, props.style, isError ? style.error : null]}
      {...props}
      placeholderTextColor={Colors.PLACEHOLDER}
    />
  );
};

const style = StyleSheet.create({
  input: {
    padding: 8,
    color: Colors.PRIMARY_TEXT,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY_BORDER,
    flex: 1,
  },
  error: {
    borderColor: Colors.PRIMARY_RED,
  },
});

export default CustomTextInput;
