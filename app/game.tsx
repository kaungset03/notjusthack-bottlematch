import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createRef, SetStateAction, useRef, useState } from "react";
import { runOnJS } from "react-native-reanimated";
import Svg from "react-native-svg";
import Draggable from "@/components/Draggable";
import BottleIcon from "@/components/BottleIcon";

type DropZone = {
  index: number;
  x: number;
  y: number;
  width: number;
  height: number;
};

const Game = () => {
  const colors = ["#87CEEB", "#FF4500", "#50C878", "#FFD700"];
  const [dropZones, setDropZones] = useState<DropZone[]>([]);
  const bottleRefs = useRef(colors.map(() => createRef<Svg>()));

  const onLayout = () => {
    const zones: SetStateAction<DropZone[]> = [];
    bottleRefs.current.forEach((ref, index) => {
      ref.current?.measure((x, y, width, height, pageX, pageY) => {
        zones.push({ index, x: pageX, y: pageY, width, height });
      });
    });
    setDropZones(zones);
  };
  const updateColor = (index: number, color: string) => {
    console.log("updateColor", index, color);
    bottleRefs.current[index].current?.setNativeProps({ fill: color });
  };

  const checkDropZone = (x: number, y: number, color: string) => {
    "worklet";
    const zone = dropZones.find(
      (zone) =>
        x > zone.x &&
        x < zone.x + zone.width &&
        y > zone.y &&
        y < zone.y + zone.height
    );
    if (zone) {
      console.log(zone.index);
      runOnJS(updateColor)(zone.index, color);
    }
  };

  // console.log(dropZones[0]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container} onLayout={onLayout}>
        <View style={styles.bottleContainer}>
          {colors.map((_, index) => (
            <BottleIcon key={index} ref={bottleRefs.current[index]} />
          ))}
        </View>
        <View style={styles.bottleContainer}>
          {colors.map((color, index) => (
            <Draggable
              key={index}
              color={color}
              checkDropZone={checkDropZone}
            />
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
    borderWidth: 1,
    borderColor: "blue",
  },
});
