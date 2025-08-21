import { CustomText } from '@/components';
import { getFullFormattedDate } from '@/helpers/date';
import { View, StyleSheet } from 'react-native';

type HeaderProps = {
  totalTodos: number;
  completedTodos: number;
};

const Header: React.FC<HeaderProps> = ({ totalTodos, completedTodos }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerMain}>
        <CustomText variant="title">Task Manager</CustomText>
        <CustomText>{getFullFormattedDate(new Date())}</CustomText>
      </View>

      <CustomText>{`Completed: ${completedTodos} / ${totalTodos}`}</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 24,
  },
  headerMain: {
    marginBottom: 24,
    alignItems: 'center',
    gap: 8,
  },
});

export default Header;
