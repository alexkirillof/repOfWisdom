import React, { useState, useEffect, useMemo } from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,

} from "react-native";
import filter from "lodash.filter";

const API_ENDPOINT = "https://647dde56af984710854a8134.mockapi.io/Posts";

export const ArticleContent = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  console.log(route.params);
  const { id, name, email, avatar, telephone, description } = route.params;


  useEffect(() => {
    navigation.setOptions({ name });
    fetchData(API_ENDPOINT);

  }, []);
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setIsLoading(false);

    } catch (error) {
      setError(error);
      console.log("%c%s", "color: red;", error);
      setIsLoading(false);
    }
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
    <View style={{ height: "100%" }}>
      <TouchableOpacity style={styles.arrowBack} onPress={() => navigation.navigate('Search')} >
        <Text style={styles.arrow}> &#8592;</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Image source={{ uri: avatar }} style={styles.ava} />
        <View style={styles.block}>
          <Text style={styles.textName}> Имя: {name}</Text>
          <Text style={styles.text}> Почта: {email}</Text>
          <Text style={styles.text}> Телефон: {telephone}</Text>
          <Text style={styles.text}> Резюме: {description}</Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

  },
  ava: {
    width: 100,
    height: 100,
    marginRight: 15,
    borderRadius: 10,
  },
  textName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    margin: 3,
  },
  block: {
    flex: 1,
    flexDirection: "column",
  },
  arrowBack: {
    height: 50,
    aspectRatio: 1,
    backgroundColor: "#ccc",
    borderRadius: 25,
    paddingHorizontal:6



  },
  arrow: {
    color: "#fff",
    fontSize: 26,
    aspectRatio: 1,

  },
});


