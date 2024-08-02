import React from "react";
import { LablePropsInterface } from "../../types/global";
import { StyleSheet, Text } from "react-native";

const Label: React.FC<LablePropsInterface> = ({ title, required }) => {
  return (
    <Text style={styles.label}>
      {title} {required && <Text style={styles.labelRequired}>*</Text>}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "#ffffff",
    fontSize: 16,
    opacity: 0.7,
    fontWeight: "500",
  },
  labelRequired: {
    color: "#ff0000",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default Label;
