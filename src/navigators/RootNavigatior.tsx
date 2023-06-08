import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Auth } from "../screens/Auth";
import { Search } from "../screens/Search";
import { Article } from "../screens/Article";
import { Profile } from "../screens/Profile";
import { TabStack } from "./TabStack";


const RootNavigatior = () => {

  const Stack = createStackNavigator();


  return (
    <Stack.Navigator initialRouteName="App">
      <Stack.Screen name="Tab" component={TabStack} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default RootNavigatior;
