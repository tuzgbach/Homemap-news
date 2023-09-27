// rfce
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import GlobalApi from "../../Services/GlobalApi";
import Color from "../../Shared/Color";
import { useNavigation } from "@react-navigation/native";

function TopHeadlineSlider({ newsList }) {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        data={newsList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("read-news", { news: item })}
            style={{
              width: Dimensions.get("screen").width * 1,
              marginRight: 15,
            }}>
            <Image
              source={{ uri: item.urlToImage }}
              style={{
                height: Dimensions.get("screen").width * 0.75,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={3} style={styles.title}>
              {item.title}
            </Text>
            <Text style={{ marginTop: 5, color: Color.red }}>
              {item?.source?.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "800",
    marginTop: 15,
  },
});

export default TopHeadlineSlider;
