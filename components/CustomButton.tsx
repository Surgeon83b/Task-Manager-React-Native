import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { CustomText } from './CustomText';
import { Colors } from '@/constants/ui';
import { ButtonSize, ButtonVariant } from '@/types';
import { Ionicons } from '@expo/vector-icons';

type CustomButtonProps = TouchableOpacityProps & {
  label?: string;
  icon?: React.ComponentProps<typeof Ionicons>['name'];
  size?: ButtonSize;
  variant?: ButtonVariant;
};

export const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  icon,
  size = 'default',
  variant = 'primary',
  disabled,
  style,
  ...props
}) => {
  const textVariant = size === 'large' ? 'heading' : 'small';

  return (
    <TouchableOpacity
      style={[
        styles.base,
        disabled ? styles.disabled : null,
        size === 'default' ? null : styles[size],
        variant === 'primary' ? null : styles[variant],
        style,
      ]}
      {...props}
      disabled={disabled}
    >
      {label && <CustomText variant={textVariant}>{label}</CustomText>}
      {icon && <Ionicons name={icon} size={16} color={Colors.PRIMARY_TEXT} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: Colors.PRIMARY_ACTIVE_BUTTON,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
  disabled: {
    opacity: 0.5,
  },
  small: {
    paddingHorizontal: 12,
  },
  large: {
    paddingHorizontal: 30,
  },
  secondary: {
    backgroundColor: Colors.SECONDARY_BACKGROUND,
    borderColor: Colors.PRIMARY_ACTIVE_BUTTON,
  },
  delete: {
    backgroundColor: Colors.PRIMARY_RED,
  },
});
