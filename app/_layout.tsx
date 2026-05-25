import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />

      <Stack.Screen
        name="game/classic"
      />

      <Stack.Screen
        name="game/multiple-choice"
      />

      <Stack.Screen
        name="game/true-false"
      />

      <Stack.Screen
        name="game/timed"
      />

      <Stack.Screen
        name="game/result-win"
      />

      <Stack.Screen
        name="game/result-lose"
      />
    </Stack>
  );
}