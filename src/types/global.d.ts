import "react-native";

// AUTHENTICATION MODULE INTERFACES

interface LablePropsInterface {
  title: string;
  required: boolean;
}

interface InputPropsInterface {
  placeholder: string;
  value: string;
  onChangeText: function;
  editable: boolean;
  keyName: string;
  autoCapitalize: "none" | "sentences" | "words" | "characters" | undefined;
}

interface InputContainerPropsInterface {
  placeholder: string;
  value: string;
  onChangeText: function;
  editable: boolean;
  keyName: string;
  title: string;
  required: boolean;
  autoCapitalize: "none" | "sentences" | "words" | "characters" | undefined;
  divider: boolean;
}

interface AuthenticateStateInterface {
  email: string;
}

interface ButtonPropsInterface {
  title: string;
  disabled: boolean;
  onPress: function;
}

interface AuthenticateInputsPropsInterface {
  formData: AuthenticateStateInterface;
  onChangeText: function;
}

interface SignUpStateInterface {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

interface SignUpInputsPropsInterface {
  formData: SignUpStateInterface;
  onChangeText: function;
}
