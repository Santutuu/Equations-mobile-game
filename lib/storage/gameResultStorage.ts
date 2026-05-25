import AsyncStorage from "@react-native-async-storage/async-storage";
import { GameResult } from "@/lib/scoring/resultTypes";

const STORAGE_KEY = "game_results";

export async function getGameResults(): Promise<GameResult[]> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);

  if (!raw) return [];

  return JSON.parse(raw);
}

export async function saveGameResult(result: GameResult) {
  const results = await getGameResults();

  const updatedResults = [result, ...results];

  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedResults)
  );
}

export async function getBestResultsByMode(mode: GameResult["mode"]) {
  const results = await getGameResults();

  return results
    .filter((result) => result.mode === mode)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}

export async function clearGameResults() {
  await AsyncStorage.removeItem(STORAGE_KEY);
}