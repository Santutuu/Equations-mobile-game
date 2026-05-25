import React from "react";
import { StyleSheet, View } from "react-native";

/*
Muestra la barra de tiempo restante en el juego (esqueleto)
*/

export function TimerBar({ progress = 1 }: { progress?: number }) {
  return (
    <View style={styles.barBackground}>
      <View
        style={[
          styles.barFill,
          { width: `${Math.max(0, Math.min(1, progress)) * 100}%` },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  barBackground: {
    height: 8,
    backgroundColor: "#eee",
    borderRadius: 8,
    overflow: "hidden",
  },
  barFill: { height: "100%", backgroundColor: "#4CAF50" },
});
