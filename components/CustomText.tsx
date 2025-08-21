import { Typography, Colors } from '@/constants';
import { TextVariant } from '@/types';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';

type CustomTextProps = TextProps & {
  variant?: TextVariant;
};

export const CustomText: React.FC<CustomTextProps> = ({
  style,
  variant = 'primary',
  ...props
}) => {
  return (
    <Text
      style={[
        styles.base,
        variant === 'primary' ? null : styles[variant],
        style,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  base: {
    color: Colors.PRIMARY_TEXT,
    height: undefined,
  },
  title: Typography.title as TextStyle,
  subTitle: Typography.subtitle as TextStyle,
  heading: Typography.heading as TextStyle,
  small: Typography.small as TextStyle,
  label: Typography.label as TextStyle,
  info: Typography.info,
});
