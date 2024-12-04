import { Pressable, Text, View, StyleSheet } from "react-native";

type SetupProps = {
  setupName: string;
  count: number;
  increment: () => void;
  decrement: () => void;
};

const Setup = ({ setupName, count, increment, decrement }: SetupProps) => {
  return (
    <View style={styles.setup}>
      <Pressable style={styles.countBtn} onPress={decrement}>
        <Text style={styles.btnText}>-</Text>
      </Pressable>
      <View style={styles.countDisplay}>
        <Text style={styles.btnText}>
          {setupName}: <Text style={styles.count}>{count}</Text>
        </Text>
      </View>
      <Pressable style={styles.countBtn} onPress={increment}>
        <Text style={styles.btnText}>+</Text>
      </Pressable>
    </View>
  );
};
export default Setup;

const styles = StyleSheet.create({
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
  count: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
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
    fontWeight: "semibold",
    textAlign: "center",
  },
});
