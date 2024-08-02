import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { InputPropsInterface } from "../../types/global";

const Input: React.FC<InputPropsInterface> = ({
  placeholder,
  value,
  onChangeText,
  editable,
  key,
}) => {
  const [inputFocus, setInputFocus] = useState(false);

  const onFocusHandler = () => {
    setInputFocus(true);
  };

  const onBlurHandler = () => {
    setInputFocus(false);
  };

  return (
    <TextInput
      style={[styles.input, inputFocus && styles.focusStyles]}
      placeholderTextColor="#6a6c6f"
      cursorColor="#eeeeee"
      placeholder={placeholder}
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
      editable={editable}
      value={value}
      onChangeText={onChangeText?.bind(this, key)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#1f1f1f",
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "400",
  },
  focusStyles: {
    borderColor: "#39ff14",
  },
});

export default Input;
