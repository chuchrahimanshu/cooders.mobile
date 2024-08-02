import React from "react";
import { StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const SocialAuth: React.FC = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="logo-google" size={26} color="#ffffff" />
      <Ionicons name="logo-github" size={26} color="#ffffff" />
      <Ionicons name="logo-linkedin" size={26} color="#ffffff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    columnGap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SocialAuth;
