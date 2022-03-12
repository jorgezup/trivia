const RANKING = 'ranking';

export const getRankingFromLocalStorage = () => JSON
  .parse(localStorage.getItem(RANKING)) || [];

export const saveRankingInLocalStorage = (ranking) => {
  const prevRanking = getRankingFromLocalStorage();
  if (prevRanking) {
    localStorage.setItem(RANKING, JSON.stringify([...prevRanking, ranking]));
  } else {
    localStorage.setItem(RANKING, JSON.stringify([ranking]));
  }
};
