import { Link, useRouter } from "expo-router";
import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
} from "react-native";

import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import AnimatedTitle from "@/components/AnimatedTitle";

function GridLines() {
  const horizontals = Array.from({
    length: 40,
  }).map((_, i) => (
    <View
      key={`h-${i}`}
      style={[
        styles.gridH,
        { top: i * 22 },
      ]}
    />
  ));

  const verticals = Array.from({
    length: 24,
  }).map((_, i) => (
    <View
      key={`v-${i}`}
      style={[
        styles.gridV,
        { left: i * 22 },
      ]}
    />
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
      <Text
        style={[
          styles.doodle,
          {
            top: 110,
            right: 70,
          },
        ]}
      >
        2+2=4
      </Text>

      <Text
        style={[
          styles.doodle,
          {
            top: 110,
            right: 190,
          },
        ]}
      >
        b²+(4ab)
      </Text>

      <Text
        style={[
          styles.doodle,
          {
            bottom: 120,
            left: 45,
          },
        ]}
      >
        √16
      </Text>

      <Text
        style={[
          styles.doodle,
          {
            bottom: 70,
            right: 70,
          },
        ]}
      >
        x²
      </Text>

      <Text
        style={[
          styles.doodle,
          {
            bottom: 30,
            right: 260,
          },
        ]}
      >
        A(B.A)= A.B + A²
      </Text>

      <Text
        style={[
          styles.doodle,
          {
            bottom: 21,
            right: 12,
          },
        ]}
      >
        ∑
      </Text>

      <Text
        style={[
          styles.doodle,
          {
            bottom: 70,
            right: 120,
          },
        ]}
      >
        ln(e)
      </Text>
    </>
  );
}

function ModeButton({
  onPress,
  icon,
  label,
}: {
  onPress: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Pressable
      style={styles.modeButton}
      onPress={onPress}
    >
      <View style={styles.modeIcon}>
        {icon}
      </View>

      <Text style={styles.modeText}>
        {label}
      </Text>
    </Pressable>
  );
}

export default function HomeScreen() {
  const router = useRouter();

  function startClassicGame() {
    router.replace(
      `/game/classic?level=1&restart=${Date.now()}`
    );
  }

  function startTrueFalseGame() {
    router.replace(
      `/game/true-false?level=1&restart=${Date.now()}`
    );
  }

  function startMultipleChoiceGame() {
    router.replace(
      `/game/multiple-choice?level=1&restart=${Date.now()}`
    );
  }

  function startTimedGame() {
    router.replace(
      `/game/timed?restart=${Date.now()}`
    );
  }

  return (
    <ThemedView style={styles.wrapper}>
      <View style={styles.paper}>
        <GridLines />

        <MathDoodles />

        <View style={styles.topRow}>
          <Link
            href="/settings"
            asChild
          >
            <Pressable>
              <IconSymbol
                name="gearshape.fill"
                size={30}
                color="#171326"
              />
            </Pressable>
          </Link>
        </View>

        <View style={styles.panel}>
          <AnimatedTitle />

          <Text style={styles.subtitle}>
            Elegir Modo
          </Text>

          <View style={styles.modes}>
            <ModeButton
              onPress={startClassicGame}
              icon={
                <View style={styles.mathClassicIconContainer}>
                  <Text style={styles.mathRadical}>√</Text>
                  <View style={styles.mathBaseContainer}>
                    <View style={styles.mathOverbar} />
                    <Text style={styles.mathVariable}>x</Text>
                  </View>
                </View>
              }
              label="Clásico"
            />

            <ModeButton
              onPress={
                startTrueFalseGame
              }
              label="Verdadero/Falso"
              icon={
                <Text
                  style={
                    styles.vfIcon
                  }
                >
                  <Text
                    style={{
                      color:
                        "#48D66D",
                    }}
                  >
                    V
                  </Text>

                  <Text
                    style={{
                      color:
                        "#FF4B5C",
                    }}
                  >
                    F
                  </Text>
                </Text>
              }
            />

            <ModeButton
              onPress={startMultipleChoiceGame}
              label="Multiple Choice"
              icon={
                <View style={styles.epicExamContainer}>
                  {/* Fila 1 del examen */}
                  <View style={styles.examRow}>
                    <View style={[styles.examBubble, styles.examBubbleSelected]} />
                    <View style={styles.examBubble} />
                    <View style={styles.examBubble} />
                  </View>
                  {/* Fila 2 del examen */}
                  <View style={styles.examRow}>
                    <View style={styles.examBubble} />
                    <View style={styles.examBubble} />
                    <View style={[styles.examBubble, styles.examBubbleSelected]} />
                  </View>
                  {/* Fila 3 del examen */}
                  <View style={styles.examRow}>
                    <View style={styles.examBubble} />
                    <View style={[styles.examBubble, styles.examBubbleSelected]} />
                    <View style={styles.examBubble} />
                  </View>
                </View>
              }
            />

            <ModeButton
              onPress={startTimedGame}
              label="Contrarreloj"
              icon={
                <View style={styles.hourglassContainer}>
                  {/* Tapa superior del reloj */}
                  <View style={styles.hourglassCap} />
                  {/* Cuerpo de cristal con la arena cayendo */}
                  <Text style={styles.hourglassGlass}>⏳</Text>
                  {/* Tapa inferior del reloj */}
                  <View style={styles.hourglassCap} />
                </View>
              }
            />
          </View>

          <View
            style={
              styles.bottomIcons
            }
          >
            <Link
              href="/stats"
              asChild
            >
              <Pressable
                style={
                  styles.squareButton
                }
              >
                <Text
                  style={
                    styles.bottomIconText
                  }
                >
                  🏆
                </Text>
              </Pressable>
            </Link>

            <Link
              href="/settings"
              asChild
            >
              <Pressable
                style={
                  styles.squareButton
                }
              >
                <Text
                  style={
                    styles.bottomIconText
                  }
                >
                  ⚙
                </Text>
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
    transform: [
      { rotate: "-8deg" },
    ],
  },

  topRow: {
    height: 58,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent:
      "space-between",
    paddingTop: 10,
  },

  panel: {
    backgroundColor:
      "#3B2E68",

    paddingHorizontal: 10,

    marginTop: 60,

    paddingTop: 26,

    paddingBottom: 24,
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

    borderColor:
      "#F5D547",

    borderRadius: 10,

    backgroundColor:
      "#3B2E68",

    flexDirection: "row",

    alignItems: "center",

    paddingHorizontal: 14,
  },

  modeIcon: {
    width: 54,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  modeText: {
    color: "#FFFFFF",

    fontSize: 22,

    fontWeight: "900",
  },

  /* --- CLÁSICO (√x) --- */
  mathClassicIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  mathRadical: {
    color: "#F5D547",
    fontSize: 32,
    fontWeight: "300",
    fontFamily: "monospace",
    marginRight: -2,
    marginTop: -4,
  },
  mathBaseContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  mathOverbar: {
    backgroundColor: "#F5D547",
    height: 2,
    width: 14,
    marginBottom: 1,
  },
  mathVariable: {
    color: "#F5D547",
    fontSize: 18,
    fontWeight: "700",
    fontStyle: "italic",
    fontFamily: "serif",
    lineHeight: 20,
    paddingLeft: 1,
  },

  /* --- VERDADERO / FALSO --- */
  vfIcon: {
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: -1,
  },

  /* --- NUEVO: HOJA DE EXAMEN ÉPICA (Multiple Choice) --- */
  epicExamContainer: {
    backgroundColor: "#2E2452", // Un fondo levemente más oscuro que el botón para dar contraste
    padding: 6,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: "#5A46A8",
    gap: 4,
    width: 42,
    alignItems: "center",
  },
  examRow: {
    flexDirection: "row",
    gap: 4,
  },
  examBubble: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: "#8E85B0",
  },
  examBubbleSelected: {
    backgroundColor: "#F5D547",
    borderColor: "#F5D547",
  },

  /* --- NUEVO: RELOJ DE ARENA ARCADE (Contrarreloj) --- */
  hourglassContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
  },
  hourglassCap: {
    backgroundColor: "#F5D547", // Bordes planos dorados arriba y abajo
    height: 3,
    width: 22,
    borderRadius: 1,
  },
  hourglassGlass: {
    fontSize: 26,
    lineHeight: 32,
    color: "#FF4B5C", // Tinte rojizo para denotar urgencia
    textAlign: "center",
    marginVertical: -2, // Pega el emoji a los bordes construidos
  },

  bottomIcons: {
    flexDirection: "row",

    justifyContent:
      "center",

    gap: 38,

    marginTop: 30,
  },

  bottomIconText: {
    fontSize: 25,
  },

  squareButton: {
    width: 72,
    height: 52,

    backgroundColor:
      "#F5D547",

    borderWidth: 3,

    borderColor:
      "#5A46A8",

    alignItems: "center",

    justifyContent:
      "center",

    shadowColor: "#000",

    shadowOpacity: 0.35,

    shadowRadius: 5,

    elevation: 6,
  },
});