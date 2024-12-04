import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Setup from "@/components/Setup";
import useGameStore from "@/lib/zustand/useGameStore";
const Settings = () => {
  const {
    numberOfPlayers,
    numberOfBottles,
    setNumberOfPlayers,
    setNumberOfBottles,
  } = useGameStore();

  const increasePlayers = () => {
    const newCount = numberOfPlayers + 1;
    if(newCount > 5) return;
    setNumberOfPlayers(newCount);
  };

  const decreasePlayers = () => {
    const newCount = numberOfPlayers - 1;
    if(newCount < 3) return;
    setNumberOfPlayers(newCount);
  };

  const increaseBottles = () => {
    const newCount = numberOfBottles + 1;
    if(newCount > 10) return;
    setNumberOfBottles(newCount);
  };

  const decreaseBottles = () => {
    const newCount = numberOfBottles - 1;
    if(newCount < 5) return;
    setNumberOfBottles(newCount);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Setup</Text>
      <View style={styles.setupsContainer}>
        <Text>Setting Up for the Game</Text>
        <Setup
          setupName="Number of Players"
          count={numberOfPlayers}
          increment={increasePlayers}
          decrement={decreasePlayers}
        />
        <Setup
          setupName="Number of Bottles"
          count={numberOfBottles}
          increment={increaseBottles}
          decrement={decreaseBottles}
        />
      </View>
      <View style={{ gap: 20 }}>
        <Link
          href={"/game"}
          asChild
          style={[styles.countBtn, styles.confirmBtn]}
        >
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
export default Settings;
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
