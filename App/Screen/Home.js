import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CategoryTextSlider from "../Componets/Home/CategoryTextSlider";
import Color from "../Shared/Color";
import { Ionicons } from "@expo/vector-icons";
import TopHeadlineSlider from "../Componets/Home/TopHeadlineSlider";
import HeadlineList from "../Componets/Home/HeadlineList";
import GlobalApi from "../Services/GlobalApi";
import { ScrollView } from "react-native";

function Home() {
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    getTopHeadline();
  }, []);

  const getTopHeadline = async () => {
    const result = (await GlobalApi.getTopHeadline).data;
    setNewsList(result.articles);
  };
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <Text style={styles.appName}>Homemap.asia</Text>
        <Ionicons
          name="notifications"
          size={25}
          color="black"
          style={{ marginRight: 15 }}
        />
      </View>

      <CategoryTextSlider />
      {/* topheadlineslider */}
      <TopHeadlineSlider newsList={newsList} />
      {/* headlineList */}
      <HeadlineList newsList={newsList} />
    </ScrollView>
  );
}

// rnss
const styles = StyleSheet.create({
  appName: {
    fontSize: 25,
    fontWeight: "700",
    color: Color.red,
    padding: 18,
  },
});

export default Home;
