import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Color from "../../Shared/Color";
import { useNavigation } from "@react-navigation/native";

function HeadlineList({ newsList }) {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={newsList}
        renderItem={({ item }) => (
          <View>
            <View
              style={{
                backgroundColor: Color.lightGray,
                height: 1,
                marginTop: 10,
              }}></View>
            <TouchableOpacity
              onPress={() => navigation.navigate("read-news", { news: item })}
              style={{
                marginTop: 10,
                marginLeft: 20,
                display: "flex",
                flexDirection: "row",
              }}>
              <Image
                source={{ uri: item.urlToImage }}
                style={{ width: 150, height: 130, borderRadius: 10 }}
              />

              <View style={{ marginRight: 150, marginLeft: 15, marginTop: 3 }}>
                <Text
                  numberOfLines={4}
                  style={{ fontSize: 15, fontWeight: "700" }}>
                  {item.title}
                </Text>
                <Text style={{ color: Color.red, marginTop: 6 }}>
                  {item?.source?.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default HeadlineList;
