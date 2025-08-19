import { Typography } from "@/constants/typography";
import { Colors } from "@/constants/ui";
import { TextVariant } from "@/types/text";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";

type CustomTextProps = TextProps & {
  variant?: TextVariant;
};

const CustomText: React.FC<CustomTextProps> = ({
  style,
  variant = "primary",
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
  },
  title: Typography.title as TextStyle,
  subTitle: Typography.subtitle as TextStyle,
  heading: Typography.heading as TextStyle,
  small: Typography.small as TextStyle,
});

export default CustomText;
