import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";
import Top from "./components/Top";
import Middle from "./components/Middle";
import Card from "./components/Card";
import background from "./assets/background.png";


const { width, height } = Dimensions.get("screen");

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMethod="auto"
        style={{ width: "100%", height: height / 2.25 }}
      >
        <Top />
        
      </ImageBackground>
      <Middle/>
      <Text style={styles.title}>My Activities</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%', flex: 1}}>
      <View style={{paddingBottom: 50}}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
    marginHorizontal: 15
  }
});
