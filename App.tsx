import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import AppLoading from "expo-app-loading";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import {
  Poppins_600SemiBold,
  Poppins_400Regular,
  useFonts,
} from "@expo-google-fonts/poppins";

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Poppins_600SemiBold,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const circle = <View style={styles.circle}></View>;

  const catecories = ["Fantasy", "Super Hero", "Action", "Adventure"];

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.share}>
          <FontAwesome name="share" size={16} color="white" />
        </View>
        <View style={styles.starIcon}>
          <Feather name="star" size={18} color="#333" />
        </View>
        <LinearGradient
          colors={["transparent", "#333", "#000"]}
          style={styles.overlay}
        />
        <Image
          style={styles.image}
          source={require("./assets/Moon_Knight_Poster.webp")}
          borderRadius={20}
          blurRadius={2}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={[styles.text, { fontFamily: "Poppins_400Regular" }]}>
            New {circle} Season 1 {circle} 2022 {circle} Disney
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.title, { fontFamily: "Poppins_600SemiBold" }]}>
            Moon Knight
          </Text>
          <View style={styles.categoryContainer}>
            {catecories.map((catecory, index) => (
              <Text
                key={index}
                style={[styles.category, { fontFamily: "Poppins_600SemiBold" }]}
              >
                {catecory}
              </Text>
            ))}
          </View>
          <View style={styles.episode}>
            <Text style={[styles.text, { fontFamily: "Poppins_400Regular" }]}>
              S1: E3 The Frindly Type
            </Text>
            <Text style={[styles.text, { fontFamily: "Poppins_400Regular" }]}>
              53 min
            </Text>
          </View>
          <LinearGradient
            colors={["#888", "#191820"]}
            style={styles.episodeLine}
            locations={[0.4, 0.4]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          />
          <Pressable style={styles.button}>
            <Text
              style={[
                styles.text,
                { fontFamily: "Poppins_600SemiBold", fontSize: 18 },
              ]}
            >
              Continue Watching
            </Text>
          </Pressable>
          <View style={styles.episode}>
            <View style={styles.logoContainer}>
              <Image
                source={require("./assets/IMDb_Logo_Square.png")}
                style={{ width: 40, height: 40 }}
              />
              <View style={{ justifyContent: "center" }}>
                <Text style={[styles.text, { marginLeft: 8 }]}>7.7/10</Text>
                <Text style={[styles.text, { marginLeft: 8 }]}>
                  <FontAwesome name="star" size={12} color="yellow" /> 57k
                </Text>
              </View>
            </View>
            <View style={styles.logoContainer}>
              <Image
                source={require("./assets/didisney-plus-logo.webp")}
                style={{ width: 40, height: 40 }}
              />
              <View style={{ justifyContent: "center" }}>
                <Text style={[styles.text, { marginLeft: 8 }]}>Watch now</Text>
                <Text style={[styles.text, { marginLeft: 8, fontSize: 12 }]}>
                  Subscription
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={[
              styles.text,
              {
                paddingHorizontal: 20,
                paddingTop: 10,
                color: "#888",
                fontWeight: "bold",
              },
            ]}
          >
            With Marc in the forefront and Harrow near Ammit's tomb, Marc needs
            to navigate Cairo while putting his differences aside with Layla and
            Steven without jeopardizing their mission.
          </Text>
          <View style={styles.episode}>
            <Text style={[styles.text, { fontFamily: "Poppins_400Regular" }]}>
              Cast
            </Text>
            <Text style={[styles.text, { fontFamily: "Poppins_400Regular" }]}>
              See all <FontAwesome name="arrow-right" size={16} color="white" />
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "70%",
  },
  text: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    marginTop: 30,
  },
  textContainer: {
    position: "absolute",
    top: "35%",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  category: {
    color: "white",
    fontSize: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginRight: 5,
    borderRadius: 10,
    backgroundColor: "#191820",
    justifyContent: "center",
    alignItems: "center",
  },
  episode: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 20,
    marginVertical: 10,
    marginTop: 20,
  },
  episodeLine: {
    width: "90%",
    height: 9,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  logoContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  circle: {
    width: 5,
    height: 5,
    backgroundColor: "white",
    borderRadius: 2.5,
    transform: [{ translateY: -2 }],
  },
  share: {
    position: "absolute",
    top: 40,
    right: 30,
    zIndex: 1,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  starIcon: {
    position: "absolute",
    top: 90,
    right: 30,
    zIndex: 1,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "transparent",
    borderColor: "#333",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: 700,
  },
  button: {
    width: "90%",
    height: 50,
    borderRadius: 15,
    backgroundColor: "#191820",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
