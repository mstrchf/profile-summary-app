import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import logo from '../assets/logo.jpg'
const profile = {
  uri: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
};



const Top = ({ darkMode, setDarkMode }) => {
  return (
    <View style={styles.top}>
      <View style={styles.picture}>
        <Pressable
          onPress={() => {
            if (darkMode) {
              setDarkMode(false);
            } else {
              setDarkMode(true);
            }
          }}
        >
          <Ionicons name="cart" size={25} color={darkMode ? "#eee" : "#111"} />
        </Pressable>

        <Image
          source={logo}
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />

        <Pressable
          onPress={() => {
            if (darkMode) {
              setDarkMode(false);
            } else {
              setDarkMode(true);
            }
          }}
        >
          <Ionicons
            name="settings-sharp"
            size={25}
            color={darkMode ? "#eee" : "#111"}
          />
        </Pressable>
      </View>
      <View style={styles.name}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: darkMode ? "#eee" : "#111",
          }}
        >
          Master Chief
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            color: darkMode ? "#eee" : "#111",
          }}
        >
          Spartan Soldier, 117
        </Text>
      </View>
      <View style={styles.bio}>
        <Text
          style={{
            fontSize: 16,
            color: darkMode ? "#eee" : "#111",
            lineHeight: 20,
          }}
        ></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingTop: 25,
  },
  picture: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  name: {
    alignItems: "center",
  },

  bio: {
    padding: 15,
  },
});

export default Top;
