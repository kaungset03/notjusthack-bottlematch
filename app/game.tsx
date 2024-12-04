import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Draggable from "@/components/Draggable";
import BottleIcon from "@/components/BottleIcon";
import { createRef, SetStateAction, useLayoutEffect, useRef, useState } from "react";

const Game = () => {
  const colors = ["#87CEEB", "#FF4500", "#50C878", "#FFD700"];
  const [dropZones, setDropZones] = useState<any[]>([]);
  const bottleRefs = useRef(colors.map(() => createRef<View>()));

  useLayoutEffect(() => {
    const zones: SetStateAction<any[]> = [];
    bottleRefs.current.forEach((ref) => {
      ref.current?.measure((x, y, width, height, pageX, pageY) => {
        zones.push({ x: pageX, y: pageY, width, height });
      });
    });
    setDropZones(zones);
  }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.bottleContainer}>
          {colors.map((_, index) => (
            <View key={index} ref={bottleRefs.current[index]}>
              <BottleIcon />
            </View>
          ))}
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.bottleContainer}>
          {colors.map((color, index) => (
            <Draggable key={index} color={color} />
          ))}
        </View>
      </View>
    </GestureHandlerRootView>
  );
};
export default Game;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  bottleContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
