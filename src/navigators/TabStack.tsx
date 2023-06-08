import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Auth } from "../screens/Auth";
import { Search } from "../screens/Search";
import { Article } from "../screens/Article";
import { Profile } from "../screens/Profile";
import { AuthSvg } from "../assets/svg/AuthSvg";
import { SearchSvg } from "../assets/svg/SearchSvg";
import { ArticleSvg } from "../assets/svg/ArticleSvg";
import { ProfileSvg } from "../assets/svg/ProfileSvg";



const Tab = createBottomTabNavigator();


export const TabStack = () => {

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Регистрация" component={Auth} options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size}) => <AuthSvg color={focused ? "blue" : "#374b4e"} />,

      }} />
      <Tab.Screen name="Search" component={Search} options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size}) => <SearchSvg color={focused ? "blue" : "#374b4e"} />,
      }} />
      <Tab.Screen name="Article" component={Article} options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size}) => <ArticleSvg color={focused ? "blue" : "#374b4e"} />,
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size}) => <ProfileSvg color={focused ? "blue" : "#374b4e"} />,
      }} />
    </Tab.Navigator>
  );
};


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#cc11"
//
//   }
// });
