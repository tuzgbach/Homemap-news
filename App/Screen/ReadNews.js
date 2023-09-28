import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Image,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Color from "../Shared/Color";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

function ReadNews() {
  const news = useRoute().params.news;
  const navigation = useNavigation();
  useEffect(() => {
    console.log(news);
  }, []);

  const shareNews = () => {
    Share.share({
      message: news.title + "\nRead More" + news.description,
    });
  };
  return (
    <ScrollView style={{ backgroundColor: Color.white, flex: 1, padding: 15 }}>
      <View
        style={{
          marginTop: 15,
          marginBottom: 15,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => shareNews()}>
          <Entypo name="share" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: news.urlToImage }}
        style={{ width: "100%", height: 400, borderRadius: 5 }}
      />
      <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "800" }}>
        {news.title}
      </Text>
      <Text style={{ marginTop: 10, color: Color.primary, fontSize: 16 }}>
        {news.source.name}
      </Text>
      <Text
        style={{
          marginTop: 10,
          fontSize: 16,
          color: Color.gray,
          lineHeight: 25,
        }}>
        {" "}
        {news.description}{" "}
      </Text>

      <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(news.url)}>
        <Text
          style={{
            marginTop: 10,
            color: Color.primary,
            fontSize: 16,
            fontWeight: "700",
          }}>
          Đọc thêm
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default ReadNews;
