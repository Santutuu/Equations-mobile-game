import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import GameLayout from "@/components/game/GameLayout";
import { IconSymbol } from "@/components/ui/icon-symbol";

function RankingRow() {
  return (
    <View style={styles.rankingRow}>
      <View style={styles.rowItem}>
        <IconSymbol name="star.fill" size={20} color="#F5D547" />
        <Text style={styles.rowText}>980</Text>
      </View>

      <Text style={styles.rowText}>5,4s</Text>
      <Text style={styles.rowText}>30/30</Text>
    </View>
  );
}

export default function StatsScreen() {
  return (
    <GameLayout>
      <View style={styles.screenPanel}>
        <View style={styles.topRow}>
          <Link href="/" asChild>
            <Pressable>
              <IconSymbol name="house.fill" size={45} color="#FFFFFF" />
            </Pressable>
          </Link>

        </View>
          <Text style={styles.title}>Mejores puntajes</Text>

        <View style={styles.bestCard}>
          <View style={styles.bestTop}>
            <IconSymbol name="star.fill" size={38} color="#F5D547" />
            <Text style={styles.bestScore}>1250</Text>
          </View>

          <View style={styles.bestBody}>
            <View style={styles.trophyBox}>
              <IconSymbol name="trophy.fill" size={82} color="#F5D547" />
            </View>

            <View style={styles.bestInfo}>
              <Text style={styles.bestLabel}>Tiempo promedio</Text>
              <Text style={styles.bestTime}>5,4s</Text>
            </View>
          </View>
        </View>

        <View style={styles.ranking}>
          <RankingRow />
          <RankingRow />
          <RankingRow />
          <RankingRow />
          <RankingRow />
          
        </View>
      </View>
    </GameLayout>
  );
}

const styles = StyleSheet.create({
  screenPanel: {
    flex: 1,
    backgroundColor: "#3B2E68",

    paddingHorizontal: 28,
    
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    marginBottom: 34,
    marginTop: 20,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "900",
    marginTop: 0,
    marginBottom: 20,
    
  },

  bestCard: {
    width: "100%",
    height: 220,
    backgroundColor: "#171717",
    borderWidth: 5,
    borderColor: "#F5D547",
    borderRadius: 32,
    paddingHorizontal: 28,
    paddingTop: 10,
    marginBottom: 38,
  },

  bestTop: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 14,
    marginBottom: 8,
  },

  bestScore: {
    color: "#FFFFFF",
    fontSize: 50,
    fontWeight: "900",
  },

  bestBody: {
    flexDirection: "row",
    alignItems: "center",
    gap: 26,
  },

  trophyBox: {
    width: 120,
    height: 100,
    backgroundColor: "#050505",
    alignItems: "center",
    justifyContent: "center",
  },

  bestInfo: {
    flex: 1,
  },

  bestLabel: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "900",
    
  },

  bestTime: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "900",
  },

  ranking: {
    gap: 8,
  },

  rankingRow: {
    height: 50,
    backgroundColor: "#171717",
    borderWidth: 3,
    borderColor: "#F5D547",
    borderRadius: 8,
    paddingHorizontal: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  rowItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    minWidth: 75,
  },

  rowText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "900",
  },
});