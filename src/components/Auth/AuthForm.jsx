import React from "react";

import { StyleSheet, Text, View } from "react-native";

export const AuthForm  = () => {
  return (
    <View>
      <Text style={styles.text}>
        Регистация
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  text:{
    fontSize:26,

  }
});
