import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemedView } from "@/components/themed-view";

function GridLines() {
  return (
    <>
      {Array.from({ length: 50 }).map((_, i) => (
        <View key={`h-${i}`} style={[styles.gridH, { top: i * 24 }]} />
      ))}
      {Array.from({ length: 28 }).map((_, i) => (
        <View key={`v-${i}`} style={[styles.gridV, { left: i * 24 }]} />
      ))}
    </>
  );
}

export default function GameLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemedView style={styles.wrapper}>
      <View style={styles.paper}>
        <GridLines />

        <Text style={[styles.doodle, { bottom: 120, left: 45 }]}>√16</Text>
        <Text style={[styles.doodle, { bottom: 70, right: 70 }]}>x²</Text>

        {children}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  paper: {
    flex: 1,
    backgroundColor: "#F4EDC8",
    overflow: "hidden",
  },

  gridH: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "#C9D2D9",
    opacity: 0.75,
  },

  gridV: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: "#C9D2D9",
    opacity: 0.75,
  },

  doodle: {
    position: "absolute",
    color: "#7D765F",
    opacity: 0.25,
    fontSize: 20,
    fontWeight: "700",
    transform: [{ rotate: "-8deg" }],
  },
});