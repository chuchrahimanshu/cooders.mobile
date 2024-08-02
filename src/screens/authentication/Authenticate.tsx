import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Authenticate: React.FC = () => {
  return (
    <SafeAreaView style={styles.display}>
      <View style={styles.container}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  display: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  container: {
    height: "auto",
    width: "85%",
    backgroundColor: "#121212",
    padding: 10,
    borderRadius: 10,
  },
});

export default Authenticate;
