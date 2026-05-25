import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { IconSymbol } from "@/components/ui/icon-symbol";

type Props = {
  score?: number;
  time?: string;
  round?: number;
  maxRounds?: number;
};

export default function GameStatusBar({
  score = 0,
  time = "15s",
  round,
  maxRounds,
}: Props) {
  return (
    <>
      <View style={styles.statusBar}>
        <View style={styles.statusItem}>
          <IconSymbol
            name="timer"
            size={24}
            color="#F5D547"
          />

          <Text style={styles.statusText}>
            {time}
          </Text>
        </View>

        <View style={styles.statusItem}>
          <Text style={styles.statusText}>
            {score} ⭐
          </Text>
        </View>
      </View>

      {round && maxRounds && (
        <Text style={styles.roundText}>
          Ronda {round}/{maxRounds}
        </Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    alignSelf: "center",

    width: "72%",

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

  roundText: {
    marginTop: 8,

    textAlign: "center",

    color: "#171326",

    fontWeight: "900",

    fontSize: 18,
  },
});