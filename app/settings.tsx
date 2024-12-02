import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
const settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Setup</Text>
      <View style={styles.setupsContainer}>
        <Text>Game settings go here</Text>
        <View style={styles.setup}>
          <Pressable style={styles.countBtn}>
            <Text style={styles.btnText}>-</Text>
          </Pressable>
          <View style={styles.countDisplay}>
            <Text style={styles.btnText}>
              Number of Players: <Text>2</Text>
            </Text>
          </View>
          <Pressable style={styles.countBtn}>
            <Text style={styles.btnText}>+</Text>
          </Pressable>
        </View>
        <View style={styles.setup}>
          <Pressable style={styles.countBtn}>
            <Text style={styles.btnText}>-</Text>
          </Pressable>
          <View style={styles.countDisplay}>
            <Text style={styles.btnText}>
              Number of Bottles: <Text>2</Text>
            </Text>
          </View>
          <Pressable style={styles.countBtn}>
            <Text style={styles.btnText}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ gap: 20 }}>
        <Link href={"/game"} asChild style={[styles.countBtn, styles.confirmBtn]}>
          <Pressable>
            <Text style={styles.btnText}>Start the Game</Text>
          </Pressable>
        </Link>
        <Link href={"/"} asChild style={[styles.countBtn, styles.cancelBtn]}>
          <Pressable>
            <Text style={styles.btnText}>Back to Home</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};
export default settings;
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
  setupsContainer: {
    width: "98%",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
  },
  setup: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  countDisplay: {
    width: "60%",
    backgroundColor: "#FFEB3B",
    borderWidth: 3,
    borderColor: "#000",
    borderRadius: 10,
    elevation: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  countBtn: {
    backgroundColor: "#FFEB3B",
    padding: 10,
    borderWidth: 3,
    borderColor: "#000",
    borderRadius: 10,
    elevation: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  confirmBtn: {
    backgroundColor: "#00FF00",
    width: 250,
  },
  cancelBtn: {
    backgroundColor: "#FF6B6B",
    width: 250,
  },
});
