import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

const FormContainer: React.FC<{ children: ReactNode; title: string }> = ({
  children,
  title,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: "88%",
    backgroundColor: "#121212",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 25,
    borderRadius: 10,
  },
  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 30,
  },
});

export default FormContainer;
