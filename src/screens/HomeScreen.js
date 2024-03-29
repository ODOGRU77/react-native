import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>HomeScreen</Text>
      <Button title="Courses" onPress={() => navigation.navigate("Courses")} />
      <Button
        title="Course Informations"
        onPress={() => navigation.navigate("CoursesInformationScreen")}
      />
      <Button
        title="Counter"
        onPress={() => navigation.navigate("CounterScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    marginVertical: 10,
    padding: 20,
  },
});
