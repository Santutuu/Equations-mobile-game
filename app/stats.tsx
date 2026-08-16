import { Link } from "expo-router";
import React from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import GameLayout from "@/components/game/GameLayout";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { GameResult } from "@/lib/scoring/resultTypes";
import useStatsCarousel from "@/hooks/useStatsCarrousel";

function Row({ item }: { item: GameResult }) {
  return (
    <View style={styles.row}>
      <Text style={styles.score}>{item.score} ⭐</Text>

      <Text style={styles.time}>
        {item.averageTime.toFixed(1)}s
      </Text>

      <Text style={styles.time}>
        {item.correctAnswers}/{item.correctAnswers + item.wrongAnswers}
      </Text>
    </View>
  );
}

export default function StatsScreen() {
  const { results, label, next, prev, slide } = useStatsCarousel();

  const bestResult = results[0];

  return (
    <GameLayout>
      <View style={styles.screen}>
        <View style={styles.topRow}>
          <Link href="/" asChild>
            <Pressable>
              <IconSymbol name="house.fill" size={40} color="#FFFFFF" />
            </Pressable>
          </Link>
        </View>

        <View style={styles.modeBar}>
          <Pressable onPress={prev}>
            <Text style={styles.arrow}>◀</Text>
          </Pressable>

          <Text style={styles.mode}>{label}</Text>

          <Pressable onPress={next}>
            <Text style={styles.arrow}>▶</Text>
          </Pressable>
        </View>

        <Animated.View
          style={{
            transform: [{ translateX: slide }],
          }}
        >
          <View style={styles.bestCard}>
            {bestResult ? (
              <>
                <Text style={styles.bestScore}>
                  {bestResult.score} ⭐
                </Text>

                <Text style={styles.bigTrophy}>🏆</Text>

                <Text style={styles.bestTime}>
                  Tiempo promedio: {bestResult.averageTime.toFixed(1)}s
                </Text>
              </>
            ) : (
              <>
                <Text style={styles.bestScore}>0 ⭐</Text>
                <Text style={styles.bigTrophy}>🏆</Text>
                <Text style={styles.bestTime}>Sin partidas todavía</Text>
              </>
            )}
          </View>

          <View style={styles.list}>
            {results.map((item) => (
              <Row key={item.id} item={item} />
            ))}
          </View>
        </Animated.View>
      </View>
    </GameLayout>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    backgroundColor: "#3B2E68",
  },

  topRow: {
    marginTop: 20,
    marginBottom: 20,
  },

  modeBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  arrow: {
    fontSize: 32,
    color: "#FFF",
    fontWeight: "900",
  },

  mode: {
    fontSize: 28,
    fontWeight: "900",
    color: "#FFF",
  },

  bestCard: {
    backgroundColor: "#171717",
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "#F5D547",
    padding: 20,
    alignItems: "center",
    marginBottom: 30,
  },

  bestScore: {
    fontSize: 42,
    fontWeight: "900",
    color: "#FFF",
  },

  bigTrophy: {
    fontSize: 75,
  },

  bestTime: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "800",
  },

  list: {
    gap: 12,
  },

  row: {
    height: 55,
    backgroundColor: "#171717",
    borderWidth: 3,
    borderColor: "#F5D547",
    borderRadius: 10,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  score: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "900",
  },

  time: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "800",
  },
});