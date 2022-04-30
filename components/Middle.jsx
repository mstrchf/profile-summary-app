import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Middle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.activities}>
        <Text style={styles.number}>1,250</Text>
        <Text style={styles.text}>Activities</Text>
      </View>

      <View style={styles.bar} />

      <View style={styles.activities}>
        <Text style={styles.number}>250</Text>
        <Text style={styles.text}>Experiences</Text>
      </View>

      <View style={styles.bar} />

      <View style={styles.activities}>
        <Text style={styles.number}>1,250</Text>
        <Text style={styles.text}>Activities</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 25,
    marginTop: -35,
    marginHorizontal: 15,
    borderRadius: 7.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  activities: {
    flex: 1,
    alignItems: "center",
  },

  number: {
    fontSize: 22,
    fontWeight: "bold",
  },

  text: {
    color: "#999",
    marginTop: 5
  },

  bar: {
    width: 1,
    height: 25,
    backgroundColor: "#ddd",
  },
});

export default Middle;
