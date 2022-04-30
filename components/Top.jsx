import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
const profile = {
  uri: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
};

const Top = () => {
  return (
    <View style={styles.top}>
      <View style={styles.picture}>
        <Ionicons name="cart" size={25} color="#eee" />

        <Image
          source={profile}
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />

        <Ionicons name="settings-sharp" size={25} color="#eee" />
      </View>
      <View style={styles.name}>
        <Text style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>
          Master Chief
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "400", color: "white" }}>
          San Francisco, CA
        </Text>
      </View>
      <View style={styles.bio}>
        <Text style={{ fontSize: 16, color: "white", lineHeight: 20 }}>
           
        </Text>
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
