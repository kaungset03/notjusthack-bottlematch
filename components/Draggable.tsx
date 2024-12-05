import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import BottleIcon from "@/components/BottleIcon";
import { StyleSheet } from "react-native";

type DropZone = {
  x: number;
  y: number;
  width: number;
  height: number;
}

type DraggableProps = {
  color: string;
  checkDropZone: (x: number, y: number, color: string) => void;

};
const Draggable = ({ color, checkDropZone }: DraggableProps) => {
  const pressed = useSharedValue<boolean>(false);
  const offset = useSharedValue<{ x: number; y: number }>({ x: 0, y: 0 });

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange(({ translationX, translationY }) => {
      offset.value = {
        x: translationX,
        y: translationY,
      };
    })
    .onFinalize(({absoluteX, absoluteY}) => {
      pressed.value = false;
      
      checkDropZone(absoluteX, absoluteY, color);
      //console.log(absoluteX, absoluteY);
      
      offset.value = withSpring({ x: 0, y: 0 });
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: offset.value.x },
      { translateY: offset.value.y },
      { scale: withTiming(pressed.value ? 1.2 : 1) },
    ],
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[animatedStyles, styles.bottle]}>
        <BottleIcon fill={color} />
      </Animated.View>
    </GestureDetector>
  );
};
export default Draggable;

const styles = StyleSheet.create({
  bottle: {
   
  },
});
