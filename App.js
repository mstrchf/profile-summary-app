import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useState } from "react";
import Top from "./components/Top";
import Middle from "./components/Middle";
import Card from "./components/Card";
import backgroundDark from "./assets/background_dark.png";
import backgroundLight from "./assets/background_light.png";

const { width, height } = Dimensions.get("screen");

export default function App() {
  const [selected, setselected] = useState("activities");
  const [darkMode, setDarkMode] = useState(false);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? "#002929" : "#EBFFF9" },
      ]}
    >
      <ImageBackground
        source={darkMode ? backgroundDark : backgroundLight}
        resizeMethod="auto"
        style={{ width: width, height: height / 2.25 }}
      >
        <Top darkMode={darkMode} setDarkMode={setDarkMode} />
      </ImageBackground>
      <Middle
        selected={selected}
        setselected={setselected}
        darkMode={darkMode}
      />
      <Text style={[styles.title, {color: darkMode ? '#fff' : '#000'}]}>
        {selected === "activities"
          ? "Activities"
          : selected === "experiences"
          ? "Experiences"
          : "Followers"}
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", flex: 1 }}
      >
        <View style={{ paddingBottom: 50 }}>
          <Card darkMode={darkMode}/>
          <Card darkMode={darkMode}/>
          <Card darkMode={darkMode}/>
          <Card darkMode={darkMode}/>
          <Card darkMode={darkMode}/>
  
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 15,
    marginHorizontal: 15,
  },
});
