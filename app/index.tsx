import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'}/>
      <Text style={styles.title}>Task Manager</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
