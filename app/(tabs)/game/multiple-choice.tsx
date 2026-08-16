import { Link, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import GameLayout from "@/components/game/GameLayout";
import GameStatusBar from "@/components/game/GameStatusBar";
import { IconSymbol } from "@/components/ui/icon-symbol";
import useMultipleChoiceGame from "@/hooks/useMultipleChoiceGame";

function OptionButton({
  letter,
  value,
  onPress,
}: {
  letter: string;
  value: number;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.optionButton} onPress={onPress}>
      <Text style={styles.optionLetter}>{letter}</Text>
      <Text style={styles.optionValue}>{value}</Text>
    </Pressable>
  );
}

export default function MultipleChoiceScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const level = Number(params.level ?? 1);
  const restartKey = String(params.restart ?? "");

  const {
    operation,
    options,
    score,
    round,
    maxRounds,
    secondsLeft,
    answer,
  } = useMultipleChoiceGame({
    level,
    restartKey,
    accumulatedScore: Number(params.accumulatedScore ?? 0),
    accumulatedCorrectAnswers: Number(params.accumulatedCorrectAnswers ?? 0),
    accumulatedWrongAnswers: Number(params.accumulatedWrongAnswers ?? 0),
    accumulatedResponseTime: Number(params.accumulatedResponseTime ?? 0),
  });

  const letters = ["A", "B", "C", "D"];

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

      {/* Contenedor principal expandido hacia abajo */}
      <View style={styles.mainContainer}>
        <View style={styles.operationWrapper}>
          <Text style={styles.operation}>{operation.expression}=</Text>
        </View>

        <View style={styles.optionsGrid}>
          {options.map((option, index) => (
            <OptionButton
              key={`${option}-${index}`}
              letter={letters[index]}
              value={option}
              onPress={() => answer(option)}
            />
          ))}
        </View>
      </View>
    </GameLayout>
  );
}

const styles = StyleSheet.create({
  /* Mismo margen e idéntica ubicación que en stats */
  topRow: {
    marginTop: 50,
    marginBottom: 20,
    paddingHorizontal: 24, // Mantiene la alineación de la pantalla de juego
  },
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 40,
  },
  operationWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  operation: {
    color: "#171326",
    fontSize: 66,
    fontWeight: "900",
    textAlign: "center",
  },
  optionsGrid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 18,
    marginBottom: 50,
  },
  optionButton: {
    width: "48%",
    height: 100,
    backgroundColor: "#3B2E68",
    borderWidth: 3,
    borderColor: "#F5D547",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  optionLetter: {
    color: "#F5D547",
    fontSize: 28,
    fontWeight: "900",
    marginRight: 14,
  },
  optionValue: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "900",
  },
});