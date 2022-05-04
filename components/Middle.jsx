import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Middle = ({ selected, setselected, darkMode }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setselected("activities");
        }}
        activeOpacity={0.75}
        style={[
          styles.activities,
          {
            backgroundColor:
              selected === "activities" && darkMode
                ? "#002929"
                : selected === "activities" && !darkMode
                ? "#C2FFED"
                : "#fff",
          },
        ]}
      >
        <Text
          style={[
            styles.number,
            { color: selected === "activities" && darkMode ? "#eee" : "#111" },
          ]}
        >
          1,250
        </Text>
        <Text
          style={[
            styles.text,
            { color: selected === "activities" && darkMode ? "#ccc" : "#333" },
          ]}
        >
          Activities
        </Text>
      </TouchableOpacity>



      <TouchableOpacity
        onPress={() => {
          setselected("experiences");
        }}
        activeOpacity={0.75}
        style={[
          styles.activities,
          {
            backgroundColor:
              selected === "experiences" && darkMode
                ? "#002929"
                : selected === "experiences" && !darkMode
                ? "#C2FFED"
                : "#fff",
          },
        ]}
      >
        <Text
          style={[
            styles.number,
            { color: selected === "experiences" && darkMode ? "#eee" : "#111" },
          ]}
        >
          250
        </Text>
        <Text
          style={[
            styles.text,
            { color: selected === "experiences" && darkMode ? "#ccc" : "#333" },
          ]}
        >
          Experiences
        </Text>
      </TouchableOpacity>

 

      <TouchableOpacity
        onPress={() => {
          setselected("followers");
        }}
        activeOpacity={0.75}
        style={[
          styles.activities,
          {
            backgroundColor:
              selected === "followers" && darkMode
                ? "#002929"
                : selected === "followers" && !darkMode
                ? "#C2FFED"
                : "#fff",
          },
        ]}
      >
        <Text
          style={[
            styles.number,
            { color: selected === "followers" && darkMode ? "#eee" : "#111" },
          ]}
        >
          1,250
        </Text>
        <Text
          style={[
            styles.text,
            { color: selected === "followers" && darkMode ? "#ccc" : "#333" },
          ]}
        >
          Followers
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 0,
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
    margin: 5,
    padding: 5,
    borderRadius: 5,
  },
  number: {
    fontSize: 22,
    fontWeight: "bold",
  },

  text: {
    marginTop: 5,
  },

  bar: {
    width: 1,
    height: 25,
    backgroundColor: "#ddd",
  },
});

export default Middle;
