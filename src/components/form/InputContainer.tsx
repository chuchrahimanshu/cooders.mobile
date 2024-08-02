import React from "react";
import { InputContainerPropsInterface } from "../../types/global";
import Label from "./Label";
import Input from "./Input";
import { StyleSheet, View } from "react-native";

const InputContainer: React.FC<InputContainerPropsInterface> = ({
  editable,
  keyName,
  onChangeText,
  placeholder,
  required,
  title,
  value,
  autoCapitalize,
  divider,
}) => {
  return (
    <View style={[styles.container, divider && { width: "48%" }]}>
      <Label title={title} required={required} />
      <Input
        editable={editable}
        keyName={keyName}
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 8,
    marginBottom: 12,
  },
});

export default InputContainer;
