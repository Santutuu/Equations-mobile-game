import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Text,
  StyleSheet,
} from "react-native";

export default function AnimatedTitle() {
  const glow = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glow, {
          toValue: 1,
          duration: 1200,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),

        Animated.timing(glow, {
          toValue: 0,
          duration: 1200,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const scale = glow.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.01],
  });

  return (
    <Animated.View
      style={{
        transform: [{ scale }],
      }}
    >
      <Text style={styles.animatedTitle}>
        DESAFÍO MENTAL
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  animatedTitle: {
    color: "#FFFFFF",

    fontSize: 40,
    fontWeight: "900",

    textAlign: "center",

    textShadowColor: "#F5D547",

    textShadowOffset: {
      width: 0,
      height: 0,
    },

    textShadowRadius: 16,

    letterSpacing: 1,

    marginBottom: 40,
  },
});