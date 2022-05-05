import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
const profile = {
  uri: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
};

const Card = ({ darkMode }) => {
  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={() => {
          return (
            <TouchableOpacity
              activeOpacity={0.75}
              style={[
                styles.rightAction,
                { backgroundColor: darkMode ? "#640207" : "#FC5F67" },
              ]}
            >
              <AntDesign
                name="delete"
                size={34}
                color={darkMode ? "white" : "black"}
              />
            </TouchableOpacity>
          );
        }}
        renderLeftActions={() => {
          return (
            <TouchableOpacity
              activeOpacity={0.75}
              style={[
                styles.leftAction,
                { backgroundColor: darkMode ? "#002929" : "#C2FFED" },
              ]}
            >
              <MaterialCommunityIcons
                name="archive-outline"
                size={34}
                color={darkMode ? "white" : "black"}
              />
            </TouchableOpacity>
          );
        }}
      >
        <View style={[styles.container]}>
          <Image
            source={profile}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
          <View style={styles.text}>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>
              Trip to Valley of Kings
            </Text>
            <Text>Giza - Egypt</Text>
            <View style={styles.date}>
              <MaterialCommunityIcons name="clock" size={15} color="#999" />
              <Text style={{ color: "#aaa", marginLeft: 5 }}>17/08/2019</Text>
            </View>
          </View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    marginHorizontal: 15,
    marginVertical: 7.5,
    borderRadius: 10,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
    elevation: 5,
  },

  text: {
    justifyContent: "space-between",
    flex: 2,
    marginLeft: 10,
  },

  date: {
    flexDirection: "row",
  },

  rightAction: {
    width: 70,
    height: 67.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c00021",
    marginVertical: 10,
    marginRight: 15,
    borderRadius: 60,
  },
  leftAction: {
    width: 70,
    height: 67.5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginLeft: 15,
    borderRadius: 60,
  },
});

export default Card;
