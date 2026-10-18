import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function StudentCard({ name, course, units, isFullLoad }) {
  const [starred, setStarred] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.name}>{name}</Text>
        {isFullLoad && <Text style={styles.badge}>Full Load</Text>}
      </View>

      <Text style={styles.detail}>{`${course} • ${units} units enrolled`}</Text>

      <Pressable onPress={() => setStarred(!starred)}>
        <Text style={styles.star}>{starred ? "★ Starred" : "☆ Tap to star"}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  name: { fontSize: 18, fontWeight: "bold" },
  badge: {
    backgroundColor: "#2e7d32",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
    fontSize: 12,
    overflow: "hidden",
  },
  detail: { marginTop: 6, color: "#555" },
  star: { marginTop: 10, color: "#b8860b", fontWeight: "600" },
});
