import { Link, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import AnswerPad from "@/components/game/AnswerPad";
import GameLayout from "@/components/game/GameLayout";
import GameStatusBar from "@/components/game/GameStatusBar";
import OperationCard from "@/components/game/OperationCard";
import { IconSymbol } from "@/components/ui/icon-symbol";
import useClassicGame from "@/hooks/useClassicGame";

export default function ClassicGameScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const level = Number(params.level ?? 1);
  const restartKey = String(params.restart ?? "");

  const {
    operation,
    answer,
    score,
    round,
    maxRounds,
    secondsLeft,
    pressNumber,
    deleteLast,
    submitAnswer,
  } = useClassicGame({
    level,
    restartKey,
    accumulatedScore: Number(params.accumulatedScore ?? 0),
    accumulatedCorrectAnswers: Number(params.accumulatedCorrectAnswers ?? 0),
    accumulatedWrongAnswers: Number(params.accumulatedWrongAnswers ?? 0),
    accumulatedResponseTime: Number(params.accumulatedResponseTime ?? 0),
  });

  return (
    <GameLayout>
      {/* Barra superior con el botón suelto, idéntico al código de Stats */}
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

      {/* Cambiado a flex-start para que la tarjeta no se caiga encima del teclado */}
      <View style={styles.gameContentContainer}>
        <OperationCard
          expression={operation.expression}
          answerText={answer}
        />
      </View>

      <AnswerPad
        onNumberPress={pressNumber}
        onDelete={deleteLast}
        onSubmit={submitAnswer}
      />
    </GameLayout>
  );
}

const styles = StyleSheet.create({
  /* Mismo margen e idéntica ubicación que en stats */
  topRow: {
    marginTop: 40,
    marginBottom: 20,
    paddingHorizontal: 24,
  },
  gameContentContainer: {
    flex: 1,
    justifyContent: "flex-start", // Alinea arriba para dar más margen respecto al AnswerPad
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 46, // Empuja sutilmente hacia abajo desde la barra de estado, quedando en la zona ideal
    paddingBottom: 20,
  },
});