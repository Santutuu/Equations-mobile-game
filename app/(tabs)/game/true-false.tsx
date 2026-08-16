import { Link, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import GameLayout from "@/components/game/GameLayout";
import GameStatusBar from "@/components/game/GameStatusBar";
import { IconSymbol } from "@/components/ui/icon-symbol";
import useTrueFalseGame from "@/hooks/useTrueFalseGame";

export default function TrueFalseScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const level = Number(params.level ?? 1);
  const restartKey = String(params.restart ?? "");

  const {
    question,
    score,
    round,
    maxRounds,
    secondsLeft,
    answer,
  } = useTrueFalseGame({
    level,
    restartKey,
    accumulatedScore: Number(params.accumulatedScore ?? 0),
    accumulatedCorrectAnswers: Number(params.accumulatedCorrectAnswers ?? 0),
    accumulatedWrongAnswers: Number(params.accumulatedWrongAnswers ?? 0),
    accumulatedResponseTime: Number(params.accumulatedResponseTime ?? 0),
  });

  return (
    <GameLayout>
      {/* Barra superior con el botón idéntico al código de Stats */}
      <View style={styles.topRow}>
        <Link href="/" asChild>
          <Pressable>
            <IconSymbol name="house.fill" size={50} color="black" />
          </Pressable>
        </Link>
      </View>

      <GameStatusBar
        score={score}
        time={`${secondsLeft}s`}
        round={round}
        maxRounds={maxRounds}
      />

      <View style={styles.mainContainer}>
        <View style={styles.operationWrapper}>
          <Text style={styles.operation}>{question.display}</Text>
        </View>

        <View style={styles.buttonWrapper}>
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
      </View>
    </GameLayout>
  );
}

const styles = StyleSheet.create({
  /* Mismo margen e idéntica ubicación que en stats */
  topRow: {
    marginTop: 40,
    marginBottom: 20,
    paddingHorizontal: 24, // Para mantener la alineación fluida de la pantalla
  },
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
  },
  operationWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  operation: {
    color: "#171326",
    fontSize: 54,
    fontWeight: "900",
    textAlign: "center",
  },
  buttonWrapper: {
    width: "100%",
    gap: 16,
  },
  answerButton: {
    width: "100%",
    height: 76,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#FFFFFF",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  trueButton: {
    backgroundColor: "#51C86B",
  },
  falseButton: {
    backgroundColor: "#FF5757",
  },
  answerText: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "900",
  },
});