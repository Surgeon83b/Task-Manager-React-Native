import { Colors } from '@/constants';
import { StyleSheet, View, Text } from 'react-native';
import CustomTextInput, { CustomTextInputProps } from './CustomTextInput';

interface FormTextFieldProps extends CustomTextInputProps {
  errorMessage?: string;
  label?: string;
}

export const FormTextField: React.FC<FormTextFieldProps> = ({
  errorMessage,
  label,
  isError,
  ...inputProps
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <CustomTextInput {...inputProps} isError={isError || !!errorMessage} />
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    color: Colors.PRIMARY_TEXT,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    marginLeft: 4,
  },
  errorText: {
    color: Colors.PRIMARY_RED,
    fontSize: 12,
    marginTop: 4,
    marginLeft: 8,
    fontStyle: 'italic',
  },
});
