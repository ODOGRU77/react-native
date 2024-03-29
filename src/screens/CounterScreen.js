import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

export default function CounterScreen() {
  const [counter, setcounter] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="Increase"
          onPress={() => {
            setcounter(counter + 1);
          }}
        />
        <Button
          title="Decrease"
          onPress={() => {
            setcounter(counter - 1);
          }}
        />
      </View>
      <Text style={styles.button}>Counter : {counter} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
  button: {
    marginVertical: 10,
    fontSize: 30,
  },
});
