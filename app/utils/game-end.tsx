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
  return (
    Math.round((100 * (currentAvgResponseTime + gameAvgResponseTime)) / 2) / 100
  );
}

export function updateAvgScore(currentAvgScore: number, gameScore: number) {
  if (!currentAvgScore) return gameScore;
  return Math.round((100 * (currentAvgScore + gameScore)) / 2) / 100;
}
