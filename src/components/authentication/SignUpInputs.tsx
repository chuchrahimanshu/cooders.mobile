import React from "react";
import InputContainer from "../form/InputContainer";
import { SignUpInputsPropsInterface } from "../../types/global";
import { StyleSheet, View } from "react-native";

const SignUpInputs: React.FC<SignUpInputsPropsInterface> = ({
  formData,
  onChangeText,
}) => {
  return (
    <>
      <View style={styles.divider}>
        <InputContainer
          editable={true}
          keyName="firstName"
          placeholder="John"
          required={true}
          title="First Name"
          value={formData.firstName}
          onChangeText={onChangeText}
          autoCapitalize="words"
          divider={true}
        />
        <InputContainer
          editable={true}
          keyName="lastName"
          placeholder="Doe"
          required={true}
          title="Last Name"
          value={formData.lastName}
          onChangeText={onChangeText}
          autoCapitalize="words"
          divider={true}
        />
      </View>
      <InputContainer
        editable={true}
        keyName="email"
        placeholder="johndoe@gmail.com"
        required={true}
        title="Email Address"
        value={formData.email}
        onChangeText={onChangeText}
        autoCapitalize="none"
        divider={false}
      />
      <InputContainer
        editable={true}
        keyName="username"
        placeholder="johndoe"
        required={true}
        title="Username"
        value={formData.username}
        onChangeText={onChangeText}
        autoCapitalize="none"
        divider={false}
      />
      <View style={styles.divider}>
        <InputContainer
          editable={true}
          keyName="password"
          placeholder="johndoe"
          required={true}
          title="Password"
          value={formData.password}
          onChangeText={onChangeText}
          autoCapitalize="none"
          divider={true}
        />
        <InputContainer
          editable={true}
          keyName="confirmPassword"
          placeholder="johndoe"
          required={true}
          title="Confirmation"
          value={formData.confirmPassword}
          onChangeText={onChangeText}
          autoCapitalize="none"
          divider={true}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  divider: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});

export default SignUpInputs;
