import { useEffect, useState } from "react";
import { Animated } from "react-native";

import { GameResult, GameMode } from "@/lib/scoring/resultTypes";
import { getBestResultsByMode } from "@/lib/storage/gameResultStorage";

type StatsMode = Extract<GameMode, "classic" | "true-false" | "multiple-choice">;

const modes: StatsMode[] = ["classic", "true-false", "multiple-choice"];

const labels: Record<StatsMode, string> = {
  classic: "Clásico",
  "true-false": "Verdadero/Falso",
  "multiple-choice": "Multiple Choice",
};

export default function useStatsCarousel() {
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<GameResult[]>([]);
  const [slide] = useState(new Animated.Value(0));

  async function load() {
    const mode = modes[index];
    const data = await getBestResultsByMode(mode);
    setResults(data);
  }

  useEffect(() => {
    load();

    Animated.sequence([
      Animated.timing(slide, {
        toValue: 20,
        duration: 120,
        useNativeDriver: true,
      }),
      Animated.timing(slide, {
        toValue: 0,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start();
  }, [index]);

  function next() {
    setIndex((prev) => (prev + 1) % modes.length);
  }

  function prev() {
    setIndex((prev) => (prev === 0 ? modes.length - 1 : prev - 1));
  }

  return {
    mode: modes[index],
    label: labels[modes[index]],
    results,
    next,
    prev,
    slide,
  };
}