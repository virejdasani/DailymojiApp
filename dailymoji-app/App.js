import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const website = "https://virejdasani.github.io/Dailymoji";

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: "100%" }}>
        <WebView
          originWhitelist={["*"]}
          userAgent={
            Platform.OS === "android"
              ? "Chrome/18.0.1025.133 Mobile Safari/535.19"
              : "AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75"
          }
          source={{ uri: website }}
          onLoad={console.log("loaded")}
          style={{ marginTop: 20 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
