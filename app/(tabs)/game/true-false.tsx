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

  const restartKey = String(
    params.restart ?? ""
  );

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
          <IconSymbol
            name="house.fill"
            size={80}
            color="#171326"
          />
        </Pressable>
      </View>

      <GameStatusBar
        score={score}
        time={`${secondsLeft}s`}
        round={round}
        maxRounds={maxRounds}
      />

      <View style={styles.content}>
        <Text style={styles.operation}>
          {question.display}
        </Text>

        <Pressable
          style={[
            styles.answerButton,
            styles.trueButton,
          ]}
          onPress={() =>
            answer(true)
          }
        >
          <Text
            style={styles.answerText}
          >
            ✓ Verdadero
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.answerButton,
            styles.falseButton,
          ]}
          onPress={() =>
            answer(false)
          }
        >
          <Text
            style={styles.answerText}
          >
            ✕ Falso
          </Text>
        </Pressable>
      </View>
    </GameLayout>
  );
}

const styles = StyleSheet.create({
  topRow:{
    height:58,
    paddingHorizontal:28,
    justifyContent:"center",
  },

  content:{
    alignItems:"center",
    marginTop:42,
    paddingHorizontal:28,
  },

  operation:{
    color:"#171326",
    fontSize:50,
    fontWeight:"900",
    marginBottom:46,
  },

  answerButton:{
    width:"100%",
    height:72,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:18,
    borderWidth:3,
    borderColor:"#FFFFFF"
  },

  trueButton:{
    backgroundColor:"#51C86B",
  },

  falseButton:{
    backgroundColor:"#FF5757",
  },

  answerText:{
    color:"#FFFFFF",
    fontSize:28,
    fontWeight:"900"
  }

});