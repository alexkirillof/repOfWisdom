import React, { useState, useEffect, useMemo } from "react";

import { StyleSheet, Text, View, TextInput, ActivityIndicator, FlatList, Image, TouchableOpacity } from "react-native";
import filter from "lodash.filter";

const API_ENDPOINT = "https://randomuser.me/api/?results=30";

export const SearchForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [fullData, setFullData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    setIsLoading(true);
    fetchData(API_ENDPOINT);

  }, []);
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
      console.log("%c%s", "color: blue;", json.results[5].login.username);
      setFullData(json.results);
      setIsLoading(false);

    } catch (error) {
      setError(error);
      console.log("%c%s", "color: red;", error);
      setIsLoading(false);
    }
  };

  const contains = ({ name, email }, query) => {
    const { first, last } = name;
    if (first.includes(query) || last.includes(query) || email.includes(query)) {
      return true;
    }
    return false;
  };
  const handleSearch = (query) => {
    setSearchQuery(query);
    const formattedQuery = query.toLowerCase();
    const filteredData = filter(fullData, (user) => {
      return contains(user, formattedQuery);
    });
    setData(filteredData);

  };


  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color="#000000" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Ошибка загрузки данных ...Пожалуйста, проверьте ваше интернет соединение !</Text>
      </View>
    );
  }

  return (
    <View>
      <TextInput
        placeholder="П О И С К"
        clearButtonMode="always"
        style={styles.searchBox}
        autoCapitalize="none"
        autoCorrect={false}
        value={searchQuery}
        onChangeText={(query) => handleSearch(query)}
      />

      {searchQuery && <FlatList
        data={data}
        keyExtractor={(item) => {
          item.login.username;
        }}
        scrollEnabled
        renderItem={({ item }) => (

            <View style={styles.itemContainer}>
              <Image source={{ uri: item.picture.thumbnail }}
                     style={styles.image}
              />
              <View>
                <Text> {item.name.first} {item.name.last}</Text>
                <Text> {item.email} </Text>
              </View>
            </View>

        )}
      />}
    </View>
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
  itemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    height: 40,
    marginLeft: 10,
    marginTop: 15,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
});
