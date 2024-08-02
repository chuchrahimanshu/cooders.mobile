import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormContainer from "../../components/form/FormContainer";
import SocialAuth from "../../components/authentication/SocialAuth";
import Button from "../../components/form/Button";
import { SignUpStateInterface } from "../../types/global";
import SignUpInputs from "../../components/authentication/SignUpInputs";

const SignUp: React.FC = () => {
  const initialState: SignUpStateInterface = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    if (
      formData.firstName?.trim() &&
      formData.lastName?.trim() &&
      formData.email?.trim() &&
      formData.username?.trim() &&
      formData.password?.trim() &&
      formData.confirmPassword?.trim()
    ) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [formData]);

  const onChangeTextHandler = (key: string, value: string) => {
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  };

  const onPressHandler = () => {
    // TODO: Add Disabled logic of not to Navigate
    // navigation.navigate("signup");
  };
  return (
    <SafeAreaView style={styles.display}>
      <FormContainer title="Sign Up">
        <SignUpInputs formData={formData} onChangeText={onChangeTextHandler} />
        <Button
          disabled={submitDisabled}
          onPress={onPressHandler}
          title="Sign Up"
        />
        <SocialAuth />
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

export default SignUp;
