import { Link, useLocalSearchParams } from "expo-router";
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
  const level = Number(params.level ?? 1);

  const {
    operation,
    answer,
    score,
    round,
    maxRounds,
    pressNumber,
    deleteLast,
    submitAnswer,
  } = useClassicGame(level);

  return (
    <GameLayout>
      <View style={styles.topRow}>
        <Link href="/" asChild>
          <Pressable>
            <IconSymbol name="house.fill" size={80} color="#171326" />
          </Pressable>
        </Link>
      </View>

      <GameStatusBar
        score={score}
        time={`N${level}`}
        round={round}
        maxRounds={maxRounds}
      />

      <OperationCard expression={operation.expression} answerText={answer} />

      <AnswerPad
        onNumberPress={pressNumber}
        onDelete={deleteLast}
        onSubmit={submitAnswer}
      />
    </GameLayout>
  );
}

const styles = StyleSheet.create({
  topRow: {
    height: 58,
    paddingHorizontal: 28,
    justifyContent: "center",
  },
});