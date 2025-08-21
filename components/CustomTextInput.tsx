import { Colors } from '@/constants';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export type CustomTextInputProps = TextInputProps & {
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
  },
  error: {
    borderColor: Colors.PRIMARY_RED,
  },
});

export default CustomTextInput;
