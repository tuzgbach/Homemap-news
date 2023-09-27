import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Color from "../../Shared/Color";

function CategoryTextSlider() {
  const [active, setActive] = useState(1);
  const categoryList = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Business",
    },
    {
      id: 3,
      name: "Startup",
    },
    {
      id: 4,
      name: "Travel",
    },
    {
      id: 5,
      name: "Life",
    },
    {
      id: 6,
      name: "Movie",
    },
    {
      id: 7,
      name: "FoodSafe",
    },
    {
      id: 8,
      name: "Sport",
    },
  ];

  const onCategoryClick = (id) => {
    setActive(id);
  };

  return (
    <View>
      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onCategoryClick(item.id)}>
            <Text
              style={
                item.id == active ? styles.selectText : styles.unselectText
              }>
              {" "}
              {item.name}{" "}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  unselectText: {
    margin: 10,
    fontWeight: "bold",
    color: Color.gray,
  },
  selectText: {
    margin: 10,
    fontWeight: "bold",
    color: Color.primary,
  },
});

export default CategoryTextSlider;
