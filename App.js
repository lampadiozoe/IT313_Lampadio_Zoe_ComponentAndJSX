import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import StudentRoster from "./components/StudentRoster";

export default function App() {
  return (
    <View style={styles.container}>
      <StudentRoster />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f2f2", paddingTop: 60, paddingHorizontal: 16 },
});
