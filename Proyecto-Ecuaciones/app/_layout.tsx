import { Stack } from "expo-router";

export default function GameLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="classic" />
      <Stack.Screen name="multiple-choice" />
      <Stack.Screen name="timed" />
      <Stack.Screen name="true-false" />
      <Stack.Screen name="result-win" />
      <Stack.Screen name="result-lose" />
      <Stack.Screen name="summary" />
    </Stack>
  );
}