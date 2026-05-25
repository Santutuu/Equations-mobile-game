import { Link, useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import GameLayout from "@/components/game/GameLayout";
import { IconSymbol } from "@/components/ui/icon-symbol";

import { GameResult } from "@/lib/scoring/resultTypes";
import { getBestResultsByMode } from "@/lib/storage/gameResultStorage";

function formatDate(date: string) {
  const value = new Date(date);

  return value.toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
}

function formatTime(date: string) {
  const value = new Date(date);

  return value.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function RankingRow({
  result,
}: {
  result: GameResult;
}) {
  return (
    <View style={styles.rankingRow}>
      <View style={styles.rowTop}>
        <View style={styles.rowItem}>
          <Text style={styles.rowText}>
            {result.score} ⭐
          </Text>
        </View>

        <Text style={styles.rowText}>
          {result.averageTime.toFixed(1)}s
        </Text>

        <Text style={styles.rowText}>
          {result.correctAnswers}/
          {result.correctAnswers +
            result.wrongAnswers}
        </Text>
      </View>

      <Text style={styles.rowDate}>
        📅 {formatDate(result.date)} •{" "}
        {formatTime(result.date)}
      </Text>
    </View>
  );
}

export default function StatsScreen() {
  const [results, setResults] =
    useState<GameResult[]>([]);

  useFocusEffect(
    useCallback(() => {
      async function loadResults() {
        const bestResults =
          await getBestResultsByMode(
            "classic"
          );

        setResults(bestResults);
      }

      loadResults();
    }, [])
  );

  const bestResult =
    results[0];

  return (
    <GameLayout>
      <View style={styles.screenPanel}>
        <View style={styles.topRow}>
          <Link href="/" asChild>
            <Pressable>
              <IconSymbol
                name="house.fill"
                size={45}
                color="#FFFFFF"
              />
            </Pressable>
          </Link>
        </View>

        <Text style={styles.title}>
          Mejores puntajes
        </Text>

        <View style={styles.bestCard}>
          {bestResult ? (
            <>
              <View
                style={styles.bestTop}
              >
                <View
                  style={
                    styles.bestScoreContainer
                  }
                >
                  <Text
                    style={
                      styles.bestScore
                    }
                  >
                    {bestResult.score}
                  </Text>

                  <Text
                    style={
                      styles.bigStar
                    }
                  >
                    ⭐
                  </Text>
                </View>

                <Text
                  style={
                    styles.bestDate
                  }
                >
                  📅{" "}
                  {formatDate(
                    bestResult.date
                  )}
                  {"\n"}
                  {formatTime(
                    bestResult.date
                  )}
                </Text>
              </View>

              <View
                style={styles.bestBody}
              >
                <View
                  style={
                    styles.trophyBox
                  }
                >
                  <Text
                    style={
                      styles.trophyEmoji
                    }
                  >
                    🏆
                  </Text>
                </View>

                <View
                  style={
                    styles.bestInfo
                  }
                >
                  <Text
                    style={
                      styles.bestLabel
                    }
                  >
                    Tiempo promedio
                  </Text>

                  <Text
                    style={
                      styles.bestTime
                    }
                  >
                    {bestResult.averageTime.toFixed(
                      1
                    )}
                    s
                  </Text>
                </View>
              </View>
            </>
          ) : (
            <View
              style={
                styles.emptyBest
              }
            >
              <Text
                style={
                  styles.emptyText
                }
              >
                Todavía no hay
                partidas
              </Text>
            </View>
          )}
        </View>

        <View style={styles.ranking}>
          {results.map(
            (result) => (
              <RankingRow
                key={result.id}
                result={result}
              />
            )
          )}
        </View>
      </View>
    </GameLayout>
  );
}

const styles = StyleSheet.create({
screenPanel:{flex:1,backgroundColor:"#3B2E68",paddingHorizontal:28},
topRow:{flexDirection:"row",marginBottom:34,marginTop:20},
title:{color:"#FFF",fontSize:40,fontWeight:"900",marginBottom:20},
bestCard:{width:"100%",height:220,backgroundColor:"#171717",borderWidth:5,borderColor:"#F5D547",borderRadius:32,paddingHorizontal:28,paddingTop:10,marginBottom:38},
bestTop:{flexDirection:"row",justifyContent:"space-between"},
bestScoreContainer:{flexDirection:"row",alignItems:"center",gap:10},
bestScore:{color:"#FFF",fontSize:50,fontWeight:"900"},
bigStar:{fontSize:35},
bestDate:{color:"#BEBEBE",fontSize:12,textAlign:"right"},
bestBody:{flexDirection:"row",alignItems:"center",gap:26},
trophyBox:{width:120,height:100,backgroundColor:"#050505",alignItems:"center",justifyContent:"center"},
trophyEmoji:{fontSize:70},
bestInfo:{flex:1},
bestLabel:{color:"#FFF",fontSize:18,fontWeight:"900"},
bestTime:{color:"#FFF",fontSize:30,fontWeight:"900"},
emptyBest:{flex:1,alignItems:"center",justifyContent:"center"},
emptyText:{color:"#FFF",fontSize:22,fontWeight:"900"},
ranking:{gap:8},
rankingRow:{minHeight:60,backgroundColor:"#171717",borderWidth:3,borderColor:"#F5D547",borderRadius:8,paddingHorizontal:22,paddingVertical:6},
rowTop:{flexDirection:"row",justifyContent:"space-between"},
rowItem:{minWidth:75},
rowText:{color:"#FFF",fontSize:18,fontWeight:"900"},
rowDate:{color:"#AFAFAF",fontSize:10}
});