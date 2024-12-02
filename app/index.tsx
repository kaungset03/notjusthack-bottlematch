import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import BottleIcon from "../components/BottleIcon";
const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bottle Match</Text>
      <View style={styles.bottlesContainer}>
        <BottleIcon fill={"red"}/>
        <BottleIcon fill={"green"}/>
        <BottleIcon fill={"blue"}/>
      </View>
      <View style={styles.btnContainer}>
        <Link href={"/settings"} asChild>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Play Game</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};
export default index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  bottlesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  btnContainer: {
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "transparent",
  },
  btn: {
    width: "100%",
    backgroundColor: "#FF6B6B",
    borderWidth: 3,
    borderColor: "#000",
    borderRadius: 18,
    elevation: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    paddingVertical: 4,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
});
