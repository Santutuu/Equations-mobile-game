import { Link } from "expo-router";


import React, { useEffect, useRef } from "react";
import {Animated, Easing, Text, StyleSheet, View, Pressable} from "react-native";

import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import AnimatedTitle from "@/components/AnimatedTitle";

function GridLines() {
  const horizontals = Array.from({ length: 40 }).map((_, i) => (
    <View key={`h-${i}`} style={[styles.gridH, { top: i * 22 }]} />
  ));

  const verticals = Array.from({ length: 24 }).map((_, i) => (
    <View key={`v-${i}`} style={[styles.gridV, { left: i * 22 }]} />
  ));

  return (
    <>
      {horizontals}
      {verticals}
    </>
  );
}

function MathDoodles() {
  return (
    <>
      <Text style={[styles.doodle, { top: 110, right: 70 }]}>2+2=4</Text>
      <Text style={[styles.doodle, { top: 110, right: 190 }]}>b²+(4ab)</Text>
      <Text style={[styles.doodle, { bottom: 120, left: 45 }]}>√16</Text>
      <Text style={[styles.doodle, { bottom: 70, right: 70 }]}>x²</Text>
      <Text style={[styles.doodle, { bottom: 30, right: 260 }]}>A(B.A)= A.B + A²</Text>
      <Text style={[styles.doodle, { bottom: 21, right: 12 }]}>∑</Text>
      <Text style={[styles.doodle, { bottom: 70, right: 120 }]}>ln(e)</Text>
    </>
  );
}

function ModeButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link href={href as any} asChild>
      <Pressable style={styles.modeButton}>
        <View style={styles.modeIcon}>{icon}</View>
        <Text style={styles.modeText}>{label}</Text>
      </Pressable>
    </Link>
  );
}

export default function HomeScreen() {
  return (
    <ThemedView style={styles.wrapper}>
      <View style={styles.paper}>
        <GridLines />
        <MathDoodles />

        <View style={styles.topRow}>
         

          <Link href="/settings" asChild>
            <Pressable>
              <IconSymbol name="gearshape.fill" size={30} color="#171326" />
            </Pressable>
          </Link>
        </View>

        <View style={styles.panel}>
         <AnimatedTitle />
          <Text style={styles.subtitle}>Elegir Modo</Text>

          <View style={styles.modes}>
            <ModeButton
              href="/game/classic"
              label="Clásico"
              icon={<Text style={styles.emojiIcon}>▦</Text>}
            />

            <ModeButton
              href="/game/true-false"
              label="Verdadero/Falso"
              icon={
                <Text style={styles.vfIcon}>
                  <Text style={{ color: "#48D66D" }}>V</Text>
                  <Text style={{ color: "#FF4B5C" }}>F</Text>
                </Text>
              }
            />

            <ModeButton
              href="/game/multiple-choice"
              label="Multiple Choice"
              icon={<Text style={styles.emojiIcon}>◉◌</Text>}
            />

            <ModeButton
              href="/game/timed"
              label="Contrarreloj"
              icon={<Text style={styles.emojiIcon}>◷</Text>}
            />
          </View>

          <View style={styles.bottomIcons}>
         <Link href="/stats" asChild>
          <Pressable style={styles.squareButton}>
         <Text style={styles.bottomIconText}>🏆</Text>
         </Pressable>
  </Link>

  <Link href="/settings" asChild>
    <Pressable style={styles.squareButton}>
      <Text style={styles.bottomIconText}>⚙</Text>
    </Pressable>
  </Link>
  <Link href="/(tabs)/game/result-win" asChild>
    <Pressable style={styles.squareButton}>
      <Text style={styles.bottomIconText}>⚙</Text>
    </Pressable>
  </Link>
</View>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  paper: {
    flex: 1,
    backgroundColor: "#F4EDC8",
    paddingTop: 30,
    overflow: "hidden",
  },

  gridH: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "#C9D2D9",
    opacity: 0.75,
  },

  gridV: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: "#C9D2D9",
    opacity: 0.75,
  },

  doodle: {
    position: "absolute",
    color: "#7D765F",
    opacity: 0.28,
    fontSize: 18,
    fontWeight: "700",
    transform: [{ rotate: "-8deg" }],
  },

  topRow: {
    height: 58,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingTop: 10,
  },

  panel: {
    
    backgroundColor: "#3B2E68",
    paddingHorizontal: 10,
    marginTop: 60,
    paddingTop: 26,
    paddingBottom: 24,
  },

animatedTitle: {
  color:"#FFFFFF",

  fontSize:40,
  fontWeight:"900",

  textAlign:"center",

  textShadowColor:"#F5D547",

  textShadowOffset:{
    width:0,
    height:0
  },

  textShadowRadius:16,

  letterSpacing:1,

  marginBottom:60
},
  subtitle: {
    color: "#F5D547",
    fontSize: 25,
    fontWeight: "900",
    marginBottom: 16,
  },

  modes: {
    gap: 11,
  },

  modeButton: {
    height: 64,
    borderWidth: 3,
    borderColor: "#F5D547",
    borderRadius: 10,
    backgroundColor: "#3B2E68",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  
  },

  modeIcon: {
    width: 48,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  modeText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "900",
  },

  emojiIcon: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "900",
  },

  vfIcon: {
    fontSize: 27,
    fontWeight: "900",
  },

  bottomIcons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 38,
    marginTop: 30,
    
  },

  bottomIconText: {
    fontSize: 25,
    
  },



squareButton: {
  width: 72,
  height: 52,

  backgroundColor: "#F5D547",

  borderWidth: 3,
  borderColor: "#5A46A8",

  alignItems: "center",
  justifyContent: "center",

  shadowColor: "#000",
  shadowOpacity: 0.35,
  shadowRadius: 5,
  elevation: 6,
},
});