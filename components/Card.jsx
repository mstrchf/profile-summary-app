import React from "react";
import { View, StyleSheet, Image, Text, Animated } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
const profile = {
  uri: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
};

const Card = () => {
  return (
    <Swipeable
      renderRightActions={() => {
        return (
          <View style={styles.rightAction}>
            <MaterialCommunityIcons
              name="delete-outline"
              size={34}
              color="white"
            />
            <Text style={{ color: "#fff", fontSize: 16 }}>Delete</Text>
          </View>
        );
      }}
      renderLeftActions={() => {
        return (
          <View style={styles.leftAction}>
            <MaterialCommunityIcons
              name="archive-outline"
              size={34}
              color="black"
              style={{marginLeft: 20}}
            />
            <Text style={{ color: "#000", marginLeft: 5, fontSize: 16 }}>Archive</Text>
          </View>
        );
      }}
    >
      <View style={[styles.container]}>
        <Image
          source={profile}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
        <View style={styles.text}>
          <Text style={{ fontSize: 16 }}>Valley of Kings & Beyond</Text>
          <Text>Giza</Text>
          <View style={styles.date}>
            <MaterialCommunityIcons name="clock" size={15} color="#999" />
            <Text style={{ color: "#aaa", marginLeft: 5 }}>17/08/2019</Text>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

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
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#c00021",
    marginVertical: 10,
    marginRight: 15,
    borderRadius: 10,
  },
  leftAction: {
    width: 250,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "#0e9594",
    marginVertical: 10,
    marginLeft: 10,
    marginRight: -125,
    borderBottomLeftRadius: 40,
    borderTopLeftRadius: 40,
  },
});

export default Card;
