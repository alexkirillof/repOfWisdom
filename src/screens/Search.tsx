import React, {useState} from "react";
import { StyleSheet, Text, View,TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchForm } from "../components/Search/SearchForm";

export const Search = () => {
  const [number, onChangeNumber] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <SearchForm/>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingVertical:50,
    backgroundColor: "#d7ddd3",
  },
});
