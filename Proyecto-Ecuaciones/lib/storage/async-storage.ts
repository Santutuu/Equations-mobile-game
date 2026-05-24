/*
Funciones para guardar y cargar datos de forma asíncrona usando AsyncStorage
*/

import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveJSON(key: string, value: any) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn("Storage save error", e);
  }
}

export async function loadJSON<T = any>(key: string): Promise<T | null> {
  try {
    const raw = await AsyncStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch (e) {
    console.warn("Storage load error", e);
    return null;
  }
}
