import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconSymbol } from "@/components/ui/icon-symbol";

export default function GameStatusBar() {
  return (
    <View style={styles.statusBar}>
      <View style={styles.statusItem}>
        <IconSymbol name="timer" size={24} color="#F5D547" />
        <Text style={styles.statusText}>10s</Text>
      </View>

      <View style={styles.statusItem}>
        <IconSymbol name="star.fill" size={24} color="#F5D547" />
        <Text style={styles.statusText}>120</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    alignSelf: "center",
    width: "64%",
    height: 52,
    backgroundColor: "#3B2E68",
    borderWidth: 3,
    borderColor: "#F5D547",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 8,
  },

  statusItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  statusText: {
    color: "#F5D547",
    fontSize: 22,
    fontWeight: "900",
  },
});