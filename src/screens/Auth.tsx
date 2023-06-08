import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthForm } from "../components/Auth/AuthForm";

export const Auth = () => {
  return (
    <SafeAreaView style={styles.container}>
       <AuthForm/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#cee8ed"
  },
  text:{
    fontSize:26,

  }
});
