import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormContainer from "../../components/form/FormContainer";
import { AuthenticateStateInterface } from "../../types/global";
import Button from "../../components/form/Button";
import AuthenticateInputs from "../../components/authentication/AuthenticateInputs";
import SocialAuth from "../../components/authentication/SocialAuth";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Authenticate: React.FC = () => {
  type RootStackParamList = {
    authenticate: undefined;
    signup: undefined;
  };
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, "authenticate">
    >();

  const initialState: AuthenticateStateInterface = {
    email: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    if (formData.email?.trim()) {
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
    navigation.navigate("signup");
  };

  return (
    <SafeAreaView style={styles.display}>
      <FormContainer title="Ignite! 🔥">
        <AuthenticateInputs
          formData={formData}
          onChangeText={onChangeTextHandler}
        />
        <Button
          disabled={submitDisabled}
          onPress={onPressHandler}
          title="Let's Go"
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

export default Authenticate;
