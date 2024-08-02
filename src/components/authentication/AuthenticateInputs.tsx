import React from "react";
import InputContainer from "../form/InputContainer";
import { AuthenticateInputsPropsInterface } from "../../types/global";

const AuthenticateInputs: React.FC<AuthenticateInputsPropsInterface> = ({
  formData,
  onChangeText,
}) => {
  return (
    <InputContainer
      editable={true}
      keyName="email"
      placeholder="johndoe@gmail.com"
      required={true}
      title="Email Address"
      value={formData.email}
      onChangeText={onChangeText}
      autoCapitalize="none"
    />
  );
};

export default AuthenticateInputs;
