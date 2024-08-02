import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Authenticate from "../screens/authentication/Authenticate";
import SignUp from "../screens/authentication/SignUp";
import SignIn from "../screens/authentication/SignIn";
import ChangePassword from "../screens/authentication/ChangePassword";
import ForgetPassword from "../screens/authentication/ForgetPassword";
import EmailVerification from "../screens/authentication/EmailVerification";
import TwoFactorAuthentication from "../screens/authentication/TwoFactorAuthentication";
const Stack = createNativeStackNavigator();

const AuthNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="authenticate" component={Authenticate} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="changepassword" component={ChangePassword} />
      <Stack.Screen name="forgetpassword" component={ForgetPassword} />
      <Stack.Screen name="emailverification" component={EmailVerification} />
      <Stack.Screen
        name="twofactorauthentication"
        component={TwoFactorAuthentication}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
