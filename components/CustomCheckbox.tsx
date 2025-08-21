import { Colors } from '@/constants/ui';
import { Ionicons } from '@expo/vector-icons';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';

type CustomCheckboxProps = TouchableOpacityProps & {
  checked: boolean;
  onCheck: () => void;
};

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onCheck,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      style={[props.style, props.disabled && { opacity: 0.5 }]}
      onPress={onCheck}
    >
      <Ionicons
        name={checked ? 'checkmark-circle' : 'ellipse-outline'}
        size={24}
        color={getCheckboxColor(checked, !!props.disabled)}
      />
    </TouchableOpacity>
  );
};

const getCheckboxColor = (checked: boolean, disabled: boolean): string => {
  if (disabled) {
    return Colors.DISABLED;
  }
  return checked ? Colors.SUCCESS : Colors.PRIMARY_TEXT;
};

const styles = StyleSheet.create({
  disabled: {
    color: 'red',
  },
});
