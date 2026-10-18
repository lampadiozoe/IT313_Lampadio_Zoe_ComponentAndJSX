import { useState } from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import StudentCard from "./StudentCard";
import { students as initialStudents } from "../data/students";

export default function StudentRoster() {
  const [students, setStudents] = useState(initialStudents);

  const reverseRoster = () => setStudents([...students].reverse());

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{`${students.length} students enrolled`}</Text>

      <Button title="Reverse Order" onPress={reverseRoster} />

      <ScrollView style={styles.list}>
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            units={student.units}
            isFullLoad={student.isFullLoad}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  list: { marginTop: 12 },
});
