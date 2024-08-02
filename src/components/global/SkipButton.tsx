import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const SkipButton: React.FC = () => {
  return (
    <Pressable style={({ pressed }) => [pressed && styles.pressed]}>
      {({ pressed }) => (
        <View style={styles.button}>
          <Text style={[pressed ? styles.textPressed : styles.text]}>Skip</Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: "#ff5722",
    borderWidth: 2,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
  text: {
    color: "#ff5722",
    fontSize: 18,
    fontWeight: "600",
  },
  pressed: {
    backgroundColor: "#ff5722",
    color: "#ffffff",
    borderRadius: 100,
  },
  textPressed: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default SkipButton;
