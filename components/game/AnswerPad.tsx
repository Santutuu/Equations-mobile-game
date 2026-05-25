import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function KeyButton({
  label,
  variant = "default",
  onPress,
}: {
  label: string;
  variant?: "default" | "delete" | "ok";
  onPress?: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.keyButton,
        variant === "delete" && styles.deleteButton,
        variant === "ok" && styles.okButton,
      ]}
    >
      <Text style={[styles.keyText, variant === "ok" && styles.okText]}>
        {label}
      </Text>
    </Pressable>
  );
}

export default function AnswerPad({
  onNumberPress,
  onDelete,
  onSubmit,
}: {
  onNumberPress?: (value: string) => void;
  onDelete?: () => void;
  onSubmit?: () => void;
}) {
  return (
    <View style={styles.keyboard}>
      <View style={styles.keyRow}>
        <KeyButton label="1" onPress={() => onNumberPress?.("1")} />
        <KeyButton label="2" onPress={() => onNumberPress?.("2")} />
        <KeyButton label="3" onPress={() => onNumberPress?.("3")} />
      </View>

      <View style={styles.keyRow}>
        <KeyButton label="4" onPress={() => onNumberPress?.("4")} />
        <KeyButton label="5" onPress={() => onNumberPress?.("5")} />
        <KeyButton label="6" onPress={() => onNumberPress?.("6")} />
      </View>

      <View style={styles.keyRow}>
        <KeyButton label="7" onPress={() => onNumberPress?.("7")} />
        <KeyButton label="8" onPress={() => onNumberPress?.("8")} />
        <KeyButton label="9" onPress={() => onNumberPress?.("9")} />
      </View>

      <View style={styles.keyRow}>
        <KeyButton label="<-" variant="delete" onPress={onDelete} />
        <KeyButton label="0" onPress={() => onNumberPress?.("0")} />
        <KeyButton label="ok" variant="ok" onPress={onSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 48,
    backgroundColor: "#3B2E68",
    paddingHorizontal: 22,
    paddingTop: 14,
    paddingBottom: 18,
  },

  keyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  keyButton: {
    width: "30%",
    height: 60,
    backgroundColor: "#3B2E68",
    borderWidth: 3,
    borderColor: "#F5D547",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  keyText: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "900",
  },

  deleteButton: {
    backgroundColor: "#F29A38",
  },

  okButton: {
    backgroundColor: "#51C86B",
  },

  okText: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "900",
  },
});