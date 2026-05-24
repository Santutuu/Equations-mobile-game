import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function OperationCard({
  expression = "24+18",
  answerText = "",
}: {
  expression?: string;
  answerText?: string;
}) {
  return (
    <View style={styles.operationBox}>
      <Text style={styles.operation}>{expression}</Text>
      <Text style={styles.equalLine}>= ?</Text>

      <View style={styles.answerBox}>
        <Text style={styles.answerText}>{answerText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  operationBox: {
    alignItems: "center",
    marginTop: 24,
  },

  operation: {
    color: "#171326",
    fontSize: 66,
    fontWeight: "900",
    letterSpacing: 1,
  },

  equalLine: {
    color: "#171326",
    fontSize: 58,
    fontWeight: "900",
    marginTop: -8,
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