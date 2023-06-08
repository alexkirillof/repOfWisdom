import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>
          ПРОФИЛЬ
        </Text>
      </View>
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
    fontWeight:700
  }
});
