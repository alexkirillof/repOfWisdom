import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text } from "react-native";
import RootNavigatior from "./src/navigators/RootNavigatior";
import { NavigationContainer } from "@react-navigation/native";


export default function App() {

  return (
    <NavigationContainer>
      <RootNavigatior />
    </NavigationContainer>
  );
};


