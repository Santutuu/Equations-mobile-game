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
  const nextLevel = Number(params.nextLevel ?? 1);

  const buttonText = !isWin
    ? "Jugar de nuevo"
    : finishedGame
      ? "Volver al menú"
      : `Pasar a nivel ${nextLevel}`;

  const buttonHref = !isWin
    ? "/game/classic?level=1"
    : finishedGame
      ? "/"
      : `/game/classic?level=${nextLevel}`;

  return (
    <GameLayout>
      <View style={styles.panel}>
        <View style={styles.topRow}>
          <Link href="/" asChild>
            <Pressable>
              <IconSymbol name="house.fill" size={32} color="#FFFFFF" />
            </Pressable>
          </Link>
        </View>

        <Text style={styles.message}>
          {isWin ? "Buen trabajo!" : "Buen intento!"}
        </Text>

        <Text style={styles.subtitle}>
          {isWin
            ? finishedGame
              ? "Completaste todos los niveles"
              : "Superaste el nivel"
            : "Perdiste la ronda"}
        </Text>

        <View style={styles.scoreCard}>
          <IconSymbol name="star.fill" size={38} color="#F5D547" />
          <Text style={styles.scoreText}>850pts</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.smallCard}>
            <Text style={styles.bigNumber}>8</Text>
            <Text style={styles.check}>✓</Text>
          </View>

          <View style={styles.smallCard}>
            <Text style={styles.bigNumber}>2</Text>
            <Text style={styles.cross}>✕</Text>
          </View>
        </View>

        <View style={styles.timeCard}>
          <Text style={styles.timeLabel}>Tiempo Promedio</Text>
          <Text style={styles.timeValue}>5,4s</Text>
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
    marginTop: 72,
    paddingHorizontal: 32,
    paddingTop: 28,
    alignItems: "center",
  },

  topRow: {
    width: "100%",
    marginBottom: 28,
  },

  message: {
    color: "#FFFFFF",
    fontSize: 24,
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
    height: 78,
    borderWidth: 4,
    borderColor: "#F5D547",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 22,
    gap: 14,
    marginBottom: 14,
  },

  scoreText: {
    color: "#FFFFFF",
    fontSize: 34,
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
    height: 82,
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
    width: "76%",
    height: 58,
    backgroundColor: "#F5D547",
    borderWidth: 4,
    borderColor: "#8C5BE8",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#8C5BE8",
    fontSize: 22,
    fontWeight: "900",
  },
});