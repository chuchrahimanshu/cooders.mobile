// import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
}
