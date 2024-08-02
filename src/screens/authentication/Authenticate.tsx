import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormContainer from "../../components/form/FormContainer";
import InputContainer from "../../components/form/InputContainer";
import { AuthenticateStateInterface } from "../../types/global";

const Authenticate: React.FC = () => {
  const initialState: AuthenticateStateInterface = {
    email: "",
  };

  const [formData, setFormData] = useState(initialState);
  const onChangeTextHandler = (key: string, value: string) => {
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  };

  return (
    <SafeAreaView style={styles.display}>
      <FormContainer>
        <InputContainer
          editable={true}
          key="email"
          placeholder="johndoe@gmail.com"
          required={true}
          title="Email Address"
          value={formData.email}
          onChangeText={onChangeTextHandler}
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
