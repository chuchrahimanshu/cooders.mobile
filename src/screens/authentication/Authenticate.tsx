import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormContainer from "../../components/form/FormContainer";
import InputContainer from "../../components/form/InputContainer";
import { AuthenticateStateInterface } from "../../types/global";
import Button from "../../components/form/Button";

const Authenticate: React.FC = () => {
  const initialState: AuthenticateStateInterface = {
    email: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    if (formData.email.trim()) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [formData]);

  const onChangeTextHandler = (key: string, value: string) => {
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  };

  const onPressHandler = () => {};

  return (
    <SafeAreaView style={styles.display}>
      <FormContainer>
        <InputContainer
          editable={true}
          keyName="email"
          placeholder="johndoe@gmail.com"
          required={true}
          title="Email Address"
          value={formData.email}
          onChangeText={onChangeTextHandler}
          autoCapitalize="none"
        />
        <Button
          disabled={submitDisabled}
          onPress={onPressHandler}
          title="Let's Go"
        />
      </FormContainer>
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
});

export default Authenticate;
