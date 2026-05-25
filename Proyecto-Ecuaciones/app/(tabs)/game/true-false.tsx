import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import GameLayout from "@/components/game/GameLayout";
import GameStatusBar from "@/components/game/GameStatusBar";
import { IconSymbol } from "@/components/ui/icon-symbol";
import useTrueFalseGame from "@/hooks/useTrueFalseGame";

export default function TrueFalseScreen() {
  const { operation, score, round, maxRounds, answer } = useTrueFalseGame();

  return (
    <GameLayout>
      <View style={styles.topRow}>
        <Link href="/" asChild>
          <Pressable>
            <IconSymbol name="house.fill" size={30} color="#171326" />
          </Pressable>
        </Link>
      </View>

      <GameStatusBar score={score} round={round} maxRounds={maxRounds} />

      <View style={styles.content}>
        <Text style={styles.operation}>{operation.text}</Text>

        <Pressable
          style={[styles.answerButton, styles.trueButton]}
          onPress={() => answer(true)}
        >
          <Text style={styles.answerText}>✓ Verdadero</Text>
        </Pressable>

        <Pressable
          style={[styles.answerButton, styles.falseButton]}
          onPress={() => answer(false)}
        >
          <Text style={styles.answerText}>✕ Falso</Text>
        </Pressable>
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
    marginTop: 46,
    paddingHorizontal: 22,
  },

  operation: {
    color: "#171326",
    fontSize: 54,
    fontWeight: "900",
    marginBottom: 48,
  },

  answerButton: {
    width: "100%",
    height: 84,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },

  trueButton: {
    backgroundColor: "#51C86B",
  },

  falseButton: {
    backgroundColor: "#FF5757",
  },

  answerText: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "900",
  },
});