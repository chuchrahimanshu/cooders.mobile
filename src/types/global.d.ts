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
  key: string;
}

interface InputContainerPropsInterface {
  placeholder: string;
  value: string;
  onChangeText: function;
  editable: boolean;
  key: string;
  title: string;
  required: boolean;
}

interface AuthenticateStateInterface {
  email: string;
}
