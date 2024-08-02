import React from "react";
import { ButtonPropsInterface } from "../../types/global";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Button: React.FC<ButtonPropsInterface> = ({
  disabled,
  onPress,
  title,
}) => {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <View
          style={[
            styles.container,
            pressed && !disabled
              ? styles.containerPressed
              : styles.containerBlur,
          ]}>
          <Text
            style={[
              pressed ? styles.buttonTextPressed : styles.buttonText,
              disabled && styles.buttonTextDisabled,
            ]}>
            {title}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderRadius: 14,
    height: 48,
    marginTop: 8,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  containerPressed: {
    borderColor: "#39ff14",
  },
  containerBlur: {
    borderColor: "#1f1f1f",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  buttonTextDisabled: {
    opacity: 0.5,
  },
  buttonTextPressed: {
    color: "#39ff14",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default Button;
