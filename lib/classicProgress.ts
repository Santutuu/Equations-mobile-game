import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "classic_unlocked_level";

export async function getClassicUnlockedLevel() {
  const value = await AsyncStorage.getItem(KEY);
  return value ? Number(value) : 1;
}

export async function unlockClassicLevel(level: number) {
  const current = await getClassicUnlockedLevel();

  if (level > current) {
    await AsyncStorage.setItem(KEY, String(level));
  }
}