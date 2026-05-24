import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import useNumericInput from "@/hooks/useNumericInput";

import AnswerPad from "@/components/game/AnswerPad";
import GameLayout from "@/components/game/GameLayout";

import { IconSymbol } from "@/components/ui/icon-symbol";

export default function TimedScreen() {
  const { answer, pressNumber, deleteLast } = useNumericInput();

  return (
    <GameLayout>
      <View style={styles.topRow}>
        <Link href="/" asChild>
          <Pressable>
            <IconSymbol
              name="house.fill"
              size={30}
              color="#171326"
            />
          </Pressable>
        </Link>
      </View>

      <View style={styles.scoreBox}>
        <IconSymbol
          name="star.fill"
          size={24}
          color="#F5D547"
        />

        <Text style={styles.scoreText}>
          120
        </Text>
      </View>

      <View style={styles.progressOuter}>
        <View style={styles.progressYellow}/>
        <View style={styles.progressOrange}/>
        <View style={styles.progressRed}/>

        <IconSymbol
          name="timer"
          size={28}
          color="#FF5757"
          style={styles.timerIcon}
        />
      </View>

      <View style={styles.operationBox}>
        <Text style={styles.operation}>
          24+18
        </Text>

        <Text style={styles.equalLine}>
          = ?
        </Text>

        <View style={styles.answerBox}>
          <Text style={styles.answerText}>
            {answer}
          </Text>
        </View>
      </View>

      <AnswerPad
        onNumberPress={pressNumber}
        onDelete={deleteLast}
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

  scoreBox: {
    alignSelf: "center",
    width: "42%",
    height: 52,

    backgroundColor: "#3B2E68",

    borderWidth: 3,
    borderColor: "#F5D547",
    borderRadius: 8,

    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",

    gap: 12,

    marginTop: 6,
  },

  scoreText: {
    color: "#F5D547",
    fontSize: 24,
    fontWeight: "900",
  },

  progressOuter: {
    alignSelf: "center",

    width: "82%",
    height: 28,

    backgroundColor: "#3B2E68",

    borderWidth: 3,
    borderColor: "#F5D547",

    borderRadius: 14,

    marginTop: 38,

    overflow: "visible",

    flexDirection: "row",
  },

  progressYellow: {
    height: "100%",
    width: "42%",
    backgroundColor: "#F5D547",

    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },

  progressOrange: {
    height: "100%",
    width: "25%",
    backgroundColor: "#F29A38",
  },

  progressRed: {
    height: "100%",
    width: "18%",
    backgroundColor: "#FF5757",
  },

  timerIcon: {
    position: "absolute",
    right: -38,
    top: -3,
  },

  operationBox: {
    alignItems: "center",
    marginTop: 36,
  },

  operation: {
    color: "#171326",
    fontSize: 66,
    fontWeight: "900",
  },

  equalLine: {
    color: "#171326",
    fontSize: 58,
    fontWeight: "900",
    marginTop: -4,
  },

  answerBox: {
    width: 210,
    height: 64,

    backgroundColor: "#3B2E68",

    borderRadius: 10,

    marginTop: 8,

    alignItems: "center",
    justifyContent: "center",
  },

  answerText: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "900",
  },
});