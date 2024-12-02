import { StyleSheet, Text, View } from "react-native";
const game = () => {
  return (
    <View style={styles.container}>
      <Text>game</Text>
    </View>
  );
};
export default game;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  }
});
