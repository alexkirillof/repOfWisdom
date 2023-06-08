import React, { useState, useEffect } from "react";

import { StyleSheet, Text, View, TextInput } from "react-native";

const API_ENDPOINT = 'https://randomuser.me/api/?results=30';

export const SearchForm = () => {
  const [isLoading,setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [fullData, setFullData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
   setIsLoading(true);
   fetchData(API_ENDPOINT)
  }, []);
  const fetchData = async(url)=> {
    try{
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
      console.log('%c%s', 'color: blue;',json.results[3].phone);

    } catch (error){
      setError(error);
      console.log('%c%s', 'color: red;',error);
    }
  }
  const handleSearch =(query)=>{
    setSearchQuery(query);
  }

  return (
    <TextInput
      placeholder="П О И С К"
      clearButtonMode="always"
      style={styles.searchBox}
      autoCapitalize="none"
      autoCorrect={false}
      value={searchQuery}
      onChangeText={(query)=> handleSearch(query)}
    />
  );
};


const styles = StyleSheet.create({
  searchBox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    borderColor: "#5c6059",
    borderWidth: 1,
  },
});
