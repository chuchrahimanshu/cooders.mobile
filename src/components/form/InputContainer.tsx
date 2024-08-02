import React from "react";
import { InputContainerPropsInterface } from "../../types/global";
import Label from "./Label";
import Input from "./Input";
import { StyleSheet, View } from "react-native";

const InputContainer: React.FC<InputContainerPropsInterface> = ({
  editable,
  key,
  onChangeText,
  placeholder,
  required,
  title,
  value,
}) => {
  return (
    <View style={styles.container}>
      <Label title={title} required={required} />
      <Input
        editable={editable}
        key={key}
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 8,
  },
});

export default InputContainer;
