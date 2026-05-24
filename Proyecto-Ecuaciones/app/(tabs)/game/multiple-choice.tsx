import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import GameLayout from "@/components/game/GameLayout";
import GameStatusBar from "@/components/game/GameStatusBar";

import { IconSymbol } from "@/components/ui/icon-symbol";

function OptionButton({
  letter,
  value,
}: {
  letter: string;
  value: string;
}) {
  return (
    <Pressable style={styles.optionButton}>
      <Text style={styles.optionLetter}>{letter}</Text>
      <Text style={styles.optionValue}>{value}</Text>
    </Pressable>
  );
}

export default function MultipleChoiceScreen() {
  return (
    <GameLayout>
      <View style={styles.topRow}>
        <Link href="/" asChild>
          <Pressable>
            <IconSymbol name="house.fill" size={30} color="#171326" />
          </Pressable>
        </Link>
      </View>

      <GameStatusBar />

      <View style={styles.content}>
        <Text style={styles.operation}>24+18=</Text>

        <View style={styles.optionsGrid}>
          <OptionButton letter="A" value="42" />
          <OptionButton letter="B" value="44" />
          <OptionButton letter="C" value="38" />
          <OptionButton letter="D" value="46" />
        </View>
      </View>
    </GameLayout>
  );
}

const styles = StyleSheet.create({
  topRow: {
    height: 58,
    paddingHorizontal: 28,
    justifyContent: "center",
  },

  content: {
    alignItems: "center",
    marginTop: 58,
    paddingHorizontal: 22,
  },

  operation: {
    color: "#171326",
    fontSize: 66,
    fontWeight: "900",
    marginBottom: 72,
  },

  optionsGrid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 18,
  },

  optionButton: {
    width: "47%",
    height: 86,
    backgroundColor: "#3B2E68",
    borderWidth: 3,
    borderColor: "#F5D547",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },

  optionLetter: {
    color: "#F5D547",
    fontSize: 30,
    fontWeight: "900",
    marginRight: 18,
  },

  optionValue: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "900",
  },
});