import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CounterSelector({
  value,
}: {
  value: string;
}) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={styles.symbol}>−</Text>
      </Pressable>

      <Text style={styles.value}>{value}</Text>

      <Pressable style={styles.button}>
        <Text style={styles.symbol}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 52,
    backgroundColor: "#FFF",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth:3,
    borderColor:"#F5D547"
  },

  button:{
    width:32,
    alignItems:"center"
  },

  symbol:{
    fontSize:32,
    fontWeight:"900"
  },

  value:{
    fontSize:34,
    fontWeight:"900",
    color:"#171326"
  }
});