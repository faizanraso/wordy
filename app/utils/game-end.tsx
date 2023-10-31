export function updateUserGamesPlayed(currentGamesPlayed: number) {
  if (!currentGamesPlayed) return 1;
  return currentGamesPlayed + 1;
}

export function updateUserHighScore(
  currentHighScore: number,
  gameScore: number
) {
  if (gameScore > currentHighScore || !currentHighScore) return gameScore;
  return currentHighScore;
}

export function updateUserAvgResponseTime(
  currentAvgResponseTime: number,
  gameAvgResponseTime: number
) {
  if (!currentAvgResponseTime) return gameAvgResponseTime;
  return (currentAvgResponseTime + gameAvgResponseTime) / 2;
}

export function updateAvgScore(currentAvgScore: number, gameScore: number) {
  if (!currentAvgScore) return gameScore;
  return (currentAvgScore + gameScore) / 2;
}
