import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import GameLayout from "@/components/game/GameLayout";
import { IconSymbol } from "@/components/ui/icon-symbol";

type ResultType = "win" | "lose";

export default function LevelResultScreen({
  type = "win",
}: {
  type?: ResultType;
}) {
  const params = useLocalSearchParams();

  const isWin = type === "win";
  const finishedGame = params.finishedGame === "true";

  const level = Number(params.level ?? 1);
  const nextLevel = Number(params.nextLevel ?? 1);

  const score = String(params.score ?? "0");
  const correctAnswers = String(params.correctAnswers ?? "0");
  const wrongAnswers = String(params.wrongAnswers ?? "0");
  const averageTime = String(params.averageTime ?? "0.0");

  const buttonText = !isWin
    ? "Reiniciar desde nivel 1"
    : finishedGame
      ? "Volver al menú"
      : `Pasar a nivel ${nextLevel}`;

  const buttonHref = !isWin
    ? `/game/classic?level=1&restart=${Date.now()}`
    : finishedGame
      ? "/"
      : `/game/classic?level=${nextLevel}&accumulatedScore=${params.accumulatedScore}&accumulatedCorrectAnswers=${params.accumulatedCorrectAnswers}&accumulatedWrongAnswers=${params.accumulatedWrongAnswers}&accumulatedResponseTime=${params.accumulatedResponseTime}`;

  return (
    <GameLayout>
      <View style={styles.panel}>
        <View style={styles.topRow}>
          <Link href="/" asChild>
            <Pressable>
              <IconSymbol name="house.fill" size={45} color="#FFFFFF" />
            </Pressable>
          </Link>
        </View>

        <Text style={styles.message}>
          {isWin ? "Buen trabajo!" : "No alcanzaste el puntaje"}
        </Text>

        <Text style={styles.subtitle}>
          {isWin
            ? finishedGame
              ? "Completaste todos los niveles"
              : `Superaste nivel ${level}`
            : `Perdiste en nivel ${level}`}
        </Text>

        <View style={styles.scoreCard}>
          <IconSymbol name="star.fill" size={38} color="#F5D547" />
          <Text style={styles.scoreText}>{score} pts</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.smallCard}>
            <Text style={styles.bigNumber}>{correctAnswers}</Text>
            <Text style={styles.check}>✓</Text>
          </View>

          <View style={styles.smallCard}>
            <Text style={styles.bigNumber}>{wrongAnswers}</Text>
            <Text style={styles.cross}>✕</Text>
          </View>
        </View>

        <View style={styles.timeCard}>
          <Text style={styles.timeLabel}>Tiempo Promedio</Text>
          <Text style={styles.timeValue}>{averageTime}s</Text>
        </View>

        <Link href={buttonHref as any} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </Pressable>
        </Link>
      </View>
    </GameLayout>
  );
}

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    backgroundColor: "#3B2E68",
    
    paddingHorizontal: 32,
    paddingTop: 28,
    alignItems: "center",
  },

  topRow: {
    width: "100%",
    marginTop: 30,
    marginBottom: 28,
  },

  message: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "900",
    textAlign: "center",
  },

  subtitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 28,
  },

  scoreCard: {
    width: "100%",
    height: 90,
    borderWidth: 4,
    borderColor: "#F5D547",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 22,
    gap: 20,
    marginTop: 80,
    marginBottom: 40,

  },

  scoreText: {
    color: "#FFFFFF",
    fontSize: 35,
    fontWeight: "900",
  },

  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  smallCard: {
    width: "47%",
    height: 72,
    borderWidth: 4,
    borderColor: "#F5D547",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },

  bigNumber: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "900",
  },

  check: {
    color: "#51C86B",
    fontSize: 34,
    fontWeight: "900",
  },

  cross: {
    color: "#FF5757",
    fontSize: 34,
    fontWeight: "900",
  },

  timeCard: {
    width: "100%",
    height: 90,
    borderWidth: 4,
    borderColor: "#F5D547",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 34,
  },

  timeLabel: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "900",
  },

  timeValue: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "900",
  },

  button: {
    marginTop: 90,
    width: "90%",
    height: 70,
    backgroundColor: "#F5D547",
    borderWidth: 4,
    borderColor: "#8C5BE8",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },

  buttonText: {
    color: "#8C5BE8",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "center",
  },
});