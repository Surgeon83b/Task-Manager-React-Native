import CustomText from "@/components/CustomText";
import { View, StyleSheet } from "react-native"

type HeaderProps = {
  totalTodos: number;
  completedTodos: number;
}

const Header: React.FC<HeaderProps> = ({ totalTodos, completedTodos }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerMain}>
        <CustomText>Task Manager</CustomText>
        <CustomText>August 18, 2025</CustomText>
      </View>

      <CustomText>{`Completed: ${completedTodos} / ${totalTodos}`}</CustomText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingBottom: 24
  },
  headerMain: {
    marginBottom: 24,
    alignItems: 'center',
    gap: 8
  }
})

export default Header;
