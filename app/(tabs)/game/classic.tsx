import { useLocalSearchParams, useRouter } from "expo-router";
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

    accumulatedScore: Number(
      params.accumulatedScore ?? 0
    ),

    accumulatedCorrectAnswers: Number(
      params.accumulatedCorrectAnswers ?? 0
    ),

    accumulatedWrongAnswers: Number(
      params.accumulatedWrongAnswers ?? 0
    ),

    accumulatedResponseTime: Number(
      params.accumulatedResponseTime ?? 0
    ),
  });

  return (
    <GameLayout>
      <View style={styles.topRow}>
        <Pressable
  onPress={() => {
    
    router.replace("/");
  }}
>
  <IconSymbol name="house.fill" size={80} color="#171326" />
</Pressable>
      </View>

      <GameStatusBar
        score={score}
        time={`${secondsLeft}s`}
        round={round}
        maxRounds={maxRounds}
      />

      <OperationCard
        expression={
          operation.expression
        }
        answerText={answer}
      />

      <AnswerPad
        onNumberPress={
          pressNumber
        }
        onDelete={
          deleteLast
        }
        onSubmit={
          submitAnswer
        }
      />
    </GameLayout>
  );
}

const styles =
StyleSheet.create({
  topRow: {
    height: 58,
    paddingHorizontal: 28,
    justifyContent: "center",
  },
});